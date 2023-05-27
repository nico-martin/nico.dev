import React from 'react';
import { Icon } from '@theme';
import cn from '@utils/classnames';
import { youtubeParser } from '@utils/helpers';
import { VideoIframeProps } from './VideoEmbed';
import styles from './VideoEmbedYoutubeIFrame.module.css';

interface Props extends VideoIframeProps {}

const VideoEmbedYoutubeIFrame: React.FC<Props> = ({
  url,
  title = '',
  aspectRatio,
  className = '',
  iFrameClassName,
  onClick = null,
  inactive = false,
}) => {
  const id = youtubeParser(url);
  const [loaded, setLoaded] = React.useState<boolean>(false);

  React.useEffect(() => {
    inactive && setLoaded(false);
  }, [inactive]);

  return id ? (
    <div style={{ aspectRatio }} className={styles.root}>
      {loaded ? (
        <iframe
          className={cn(className, iFrameClassName, styles.iframe)}
          src={`https://www.youtube.com/embed/${id}?autoplay=1`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ aspectRatio }}
        />
      ) : (
        <div
          className={cn(styles.overlay)}
          style={{
            aspectRatio,
            backgroundImage: `url(https://img.youtube.com/vi/${id}/maxresdefault.jpg)`,
          }}
        >
          <button
            className={cn(styles.overlayButton)}
            onClick={() => (onClick ? onClick() : setLoaded(true))}
          >
            <Icon icon="youtube" className={styles.overlayButtonIcon} />
          </button>
        </div>
      )}
    </div>
  ) : null;
};

export default VideoEmbedYoutubeIFrame;
