import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { Card, CardList } from './Cards.jsx';
import { fetchApi } from './../store';

const PageApi = ({ className = '', slug = '' }) => {
  const [entries, setEntries] = useState({});

  useEffect(() => {
    setEntries({});
    fetchApi(slug, resp => {
      setEntries(resp);
    });
  }, [slug]);

  const Content = () => {
    if (slug === '') {
      return <p>Error: invalid page</p>;
    }

    if (entries === false) {
      return <p>Error: fetch failed</p>;
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

  /*
  entry(key, entry) {
    if (key === 'talks') {
      const date = this.fortmatDate(entry.date);
      return (
        <div className="card">
          <span className="card__date">{date}</span>
          <h3 className="card__title">{entry.venue}</h3>
          <p className="card__subtitle">{entry.title}</p>
          <p className="card__links">
            {[entry.slides, entry.video].map((link, i) => {
              let text = 'Slides';
              if (i === 1) {
                text = 'Video';
              }
              if (link) {
                return (
                  <a href={link} target="_blank" className="card__link">
                    {text}
                    <i class="icon-arrow-right"></i>
                  </a>
                );
              }
            })}
          </p>
        </div>
      );
    } else if (key === 'blog') {
      const date = this.fortmatDate(entry.date);
      return (
        <div className="card">
          <span className="card__date">
            {date} on {entry.publisher}
          </span>
          <h3 className="card__title">{entry.title}</h3>
          {entry.abstract && (
            <p className="card__subtitle">
              <i>German:</i>
              <br />
              <span>{entry.abstract}</span>
            </p>
          )}
          <p className="card__links">
            <a href={entry.link} target="_blank" className="card__link">
              weiterlesen <i class="icon-arrow-right"></i>
            </a>
          </p>
        </div>
      );
    } else if (key === 'code') {
      const languages = entry.language.split(', ');
      return (
        <div className="card">
          <h3 className="card__title">{entry.title}</h3>
          <span className="card__languages">
            {languages.map(language => {
              return (
                <span
                  className={`card__language card__language--${language
                    .toLowerCase()
                    .replace(' ', '-')}`}
                >
                  {language}
                </span>
              );
            })}
          </span>
          <p className="card__subtitle">{entry.description}</p>
          <p className="card__links">
            {[entry.link, entry.demo].map((link, i) => {
              let text = entry.publisher;
              if (i === 1) {
                text = 'Demo';
              }
              if (link) {
                return (
                  <a href={link} target="_blank" className="card__link">
                    {text}
                    <i class="icon-arrow-right"></i>
                  </a>
                );
              }
            })}
          </p>
        </div>
      );
    }

    return (
      <div className="card">
        <h3 className="card__title">{entry.title}</h3>
      </div>
    );
  }

  render() {
    if (!this.state.pageSlug) {
      return (
        <div className={this.props.className}>
          <p>Error: invalid page</p>
        </div>
      );
    }

    if (!this.state.entries) {
      return (
        <div className={this.props.className}>
          <p>Error: fetch failed</p>
        </div>
      );
    }

    if (!this.state.entries.length) {
      return '';
    }

    return (
      <div className={`${this.props.className} card-list`}>
        {Object.keys(this.state.entries).map(id => {
          const entry = this.state.entries[id];
          return this.entry(this.props.type, entry);
        })}
      </div>
    );
  }*/
};

export default PageApi;
