import { render, h, Component } from 'preact';
import { useState, useEffect } from 'preact/hooks';

import { sources } from './../store';

import PageApi from './PageApi.jsx';
import PageStatic from './PageStatic.jsx';

const Page = props => {
  if (props.page in sources) {
    return <PageApi className={props.className} slug={props.page} />;
  }

  return (
    <div className={props.className}>
      {typeof props.page === 'undefined' && (
        <div className="editor">
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
      <PageStatic className={props.className} slug={props.page} />
    </div>
  );
};

export default Page;
