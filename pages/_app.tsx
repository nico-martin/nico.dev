import React from 'react';
import PageImage from '@/comps/PageImage';
import PageNavigation from '@/comps/PageNavigation';

import '../styles/app.css';

export default ({ Component, pageProps }) => {
  return (
    <div className="page-layout">
      <PageImage className="page-layout__image" />
      <div className="page-layout__main">
        <PageNavigation className="page-layout__navigation" />
        <div className="page-layout__content">
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  );
};
