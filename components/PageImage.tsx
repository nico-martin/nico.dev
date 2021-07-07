import React from 'react';
import cn from '@utils/classnames';
import { supportedImageFormat } from '@utils/images';
import styles from './PageImage.module.css';

const SIZES = [500, 700, 1000, 1500, 2000];
const TYPES = {
  //avif: 'image/avif',
  webp: 'image/webp',
  jpg: '',
};

const PageImage = ({ className = '' }: { className?: string }) => {
  const [imageExt, setImageExt] = React.useState<'avif' | 'webp' | 'jpg'>(null);
  React.useEffect(() => {
    supportedImageFormat().then((ext) => setImageExt(ext));
  }, []);

  return (
    <div
      className={cn(className, styles.root, {
        [styles.extensionLoaded]: imageExt !== null,
      })}
    >
      {imageExt && (
        <img
          alt="Nico Martin - Frontend Developer"
          className={cn(styles.image)}
          srcSet={SIZES.map(
            (size) => `../portrait/nico-martin-${size}.${imageExt} ${size}w`
          ).join(',')}
        />
      )}
      <img
        className={cn(styles.imageThumb)}
        src="../portrait/nico-martin-thumb.jpg"
      />
    </div>
  );
};

export default PageImage;
