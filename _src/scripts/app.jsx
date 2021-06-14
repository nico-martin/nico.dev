import { render, h, Fragment } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { Router } from 'preact-router';
import { Link } from 'preact-router/match';
import Page from './App/Page.jsx';
import { sources } from './store';

const App = () => {
  const [nav, setNav] = useState({});

  useEffect(() => {
    const newNav = {
      '/': 'About',
    };

    Object.keys(sources).forEach(page => {
      if (typeof sources[page].title !== 'undefined') {
        newNav[`/${page}/`] = sources[page].title;
      }
    });

    setNav(newNav);
  }, []);

  return (
    <Fragment>
      <nav className="app__nav nav nav--main">
        {Object.keys(nav).map(link => {
          return (
            <Link
              className="nav__element"
              activeClassName="nav__element--active"
              href={link}
            >
              {nav[link]}
            </Link>
          );
        })}
      </nav>
      <Router>
        <Page className="app__content" path="/" />
        <Page className="app__content" path="/:page/" />
        <Page className="app__content" default />
      </Router>
      <footer className="app__footer">
        <nav className="app__footer-nav nav nav--footer">
          {Object.keys(sources.pages.pages).map(link => {
            return (
              <Link
                className={`nav__element nav__element--${link}`}
                activeClassName="nav__element--active"
                href={`/${link}/`}
              >
                {sources.pages.pages[link]}
              </Link>
            );
          })}
        </nav>
      </footer>
    </Fragment>
  );
};

render(<App />, document.querySelector('#main'));
