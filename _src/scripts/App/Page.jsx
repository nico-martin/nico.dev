import { h, Fragment } from 'preact';
import PageApi from './PageApi.jsx';

const Page = props => {
  return (
    <Fragment>
      {location.pathname === '/' && (
        <div className={props.className + ' editor'}>
          <p className="big">
            <b>Hello, my name is Nico.</b>
            <br />
            I'm a frontend developer and founder of{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://sayhello.ch"
            >
              say hello
            </a>
            , a digital agency focused on modern web developement and WordPress.
          </p>
        </div>
      )}
      <PageApi className={props.className} slug={props.page} />
    </Fragment>
  );
};

export default Page;
