import { h } from 'preact';
import { sources, fetchApi } from './../store';
import { Link } from 'preact-router/match';
import { useEffect, useState } from 'preact/hooks';

const PageStatic = ({ className = '', slug = '' }) => {
  const [page, setPage] = useState({});

  useEffect(() => {
    setPage({});
    fetchApi(page, resp => {
      setPage(resp);
    });
  }, [slug]);

  /*
  setPage(key) {
    if (typeof key === 'undefined') {
      key = 'home';
    }
    this.setState({
      pageSlug: key,
      page: {},
    });

    if (!key in sources.pages.pages && key !== 'home') {
      this.setState({
        page: false,
      });
      return;
    }

    fetchApi('pages', resp => {
      if (key in resp) {
        this.setState({
          page: resp[key],
        });
      } else {
        this.setState({
          page: false,
        });
      }
    });
  }

  componentWillReceiveProps(nextProps) {
    const currentPage = this.props.page;
    const nextPage = nextProps.page;

    if (currentPage !== nextPage) {
      this.setPage(nextPage);
    }
  }

  componentDidMount() {
    this.setPage(this.props.page);
  }

  render() {
    // Error
    if (this.state.page === false) {
      return (
        <div className="editor">
          <h1>404 Error</h1>
          <p>The requested Page does not exist.</p>
        </div>
      );
    }

    // Loading
    if (!Object.keys(this.state.page).length) {
      return '';
    }

    // success
    return (
      <div
        className="editor"
        dangerouslySetInnerHTML={{ __html: this.state.page.content }}
      />
    );
  }
   */
};

export default PageStatic;
