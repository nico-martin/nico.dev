import React from 'react';
import PageNavigation from '@/comps/PageNavigation';
import PageImage from '@/comps/PageImage';

const PageLayout = ({
  children = null,
}: {
  children?: React.CElement<any, any> | React.CElement<any, any>[];
}) => (
  <div className="page-layout">
    <PageImage className="page-layout__image" />
    <div className="page-layout__main">
      <PageNavigation className="page-layout__navigation" />
      <div className="page-layout__content">{children}</div>
    </div>
  </div>
);

export default PageLayout;
