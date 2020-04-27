import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { Card, CardList } from './Cards.jsx';
import { fetchApi, sources } from './../store';

const PageApi = ({ className = '', slug = '' }) => {
  const [entries, setEntries] = useState({});

  useEffect(() => {
    setEntries({});
    fetchApi(slug, resp => setEntries(resp));
  }, [slug]);

  const Loading = () => <div className="app__loader" />;
  const Error = ({ error = 'Error' }) => <p className="app__error">{error}</p>;
  const NotFound = () => <Error error="404: Page not found" />;

  const Content = () => {
    if (entries === false) {
      return <NotFound />;
    }

    if (Object.keys(entries).length === 0) {
      return <Loading />;
    }

    if (!(slug in sources) || slug === '') {
      const page = entries.filter(
        entry => entry.title.toLowerCase() === (slug === '' ? 'home' : slug)
      );
      if (page.length) {
        return (
          <div
            className="editor"
            dangerouslySetInnerHTML={{ __html: page[0].content }}
          />
        );
      } else {
        return <Loading />;
      }
    }

    return (
      <CardList>
        {Object.values(entries).map(entry => (
          <Card entry={entry} />
        ))}
      </CardList>
    );
  };

  return (
    <div className={className}>
      <Content />
    </div>
  );
};

export default PageApi;
