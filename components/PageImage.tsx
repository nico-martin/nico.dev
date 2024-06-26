import React from 'react';
import cn from '@utils/classnames';
import { supportedImageFormat } from '@utils/images';
import styles from './PageImage.module.css';

const SIZES = [500, 700, 1000, 1500, 2000];

const PageImage = ({ className = '' }: { className?: string }) => {
  const [imageExt, setImageExt] = React.useState<'avif' | 'webp' | 'jpeg'>(
    null
  );
  React.useEffect(() => {
    supportedImageFormat().then((ext) => {
      setImageExt(ext === 'jpg' ? 'jpeg' : ext);
    });
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
            (size) => `../img-67t723/nico-martin-${size}.${imageExt} ${size}w`
          ).join(',')}
        />
      )}
      <img
        alt="Nico Martin - Frontend Developer"
        className={cn(styles.imageThumb)}
        src="../img/nico-martin-thumb.jpeg"
      />
    </div>
  );
};

export default PageImage;
