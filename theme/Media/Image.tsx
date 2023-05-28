import React from 'react';
import cn from '@utils/classnames';
import { IS_BROWSER } from '@utils/helpers';
import { ImageI, ImageSizeI } from '@utils/types';
import styles from './Image.module.css';

IS_BROWSER && require('./lazyConfig');

const Image: React.FC<{
  className?: string;
  classNameImage?: string;
  image: ImageI;
  imagePosition?: string;
}> = ({
  className = '',
  classNameImage = '',
  image,
  imagePosition = 'center center',
}) => {
  const imageSources: Array<ImageSizeI> = React.useMemo(() => {
    const sizes = [...Object.values(image.sizes)];
    sizes.sort((a, b) => (a.width < b.width ? -1 : 0));
    return sizes;
  }, [image.sizes]);

  const biggestImage: ImageSizeI = React.useMemo(
    () => imageSources[imageSources.length - 1],
    [imageSources]
  );

  const imageStyles = {
    'object-position': imagePosition,
  } as React.CSSProperties;

  return (
    <figure className={cn(className, styles.root)}>
      <img
        aria-hidden="true"
        src={image.placeholder}
        alt={`Preview: ${image.alt}`}
        className={cn(styles.preview, classNameImage)}
        style={imageStyles}
      />
      <img
        aria-hidden="true"
        width={biggestImage.width}
        height={biggestImage.height}
        src={image.placeholder}
        alt={image.alt}
        data-sizes="auto"
        data-src={biggestImage.url}
        data-srcset={imageSources
          .map(({ width, url }) => `${url} ${width}w`)
          .join(', ')}
        className={cn(styles.image, styles.lazy, classNameImage)}
        style={imageStyles}
      />
      <div className={styles.shadow} />
    </figure>
  );
};

export default Image;
