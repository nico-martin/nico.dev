import React from 'react';
import Image from 'next/image';

import cn from '@/utils/classnames';

const SIZES = [500, 700, 1000, 1500, 2000];
const TYPES = {
  webp: 'image/webp',
  jpg: '',
};

const PageImage = ({ className = '' }: { className?: string }) => (
  <div className={cn(className, 'page-image')}>
    <picture className="page-image__image">
      {Object.entries(TYPES).map(([ext, mime]) => (
        <source
          type={mime}
          srcSet={SIZES.map(
            (size) => `../portrait/nico-martin-${size}.${ext} ${size}w`
          ).join(',')}
        />
      ))}
    </picture>
  </div>
);

export default PageImage;
