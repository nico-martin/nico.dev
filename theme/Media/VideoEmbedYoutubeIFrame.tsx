import React from 'react';
import { Icon } from '@theme';
import cn from '@utils/classnames';
import { youtubeParser } from '@utils/helpers';
import { VideoIframeProps } from './VideoEmbed';
import stylesVideo from './VideoEmbed.module.css';
import styles from './VideoEmbedYoutubeIFrame.module.css';

interface Props extends VideoIframeProps {}

const VideoEmbedYoutubeIFrame: React.FC<Props> = ({
  url,
  title = '',
  aspectRatio,
  className = '',
  onClick = null,
  inactive = false,
  poster = '',
}) => {
  const id = youtubeParser(url);
  const [loaded, setLoaded] = React.useState<boolean>(false);

  React.useEffect(() => {
    inactive && setLoaded(false);
  }, [inactive]);

  return id ? (
    <div style={{ aspectRatio }} className={cn(className, styles.root)}>
      {loaded ? (
        <iframe
          className={cn(stylesVideo.iframe)}
          src={`https://www.youtube.com/embed/${id}?autoplay=1`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ aspectRatio }}
        />
      ) : (
        <div
          className={cn(stylesVideo.overlay)}
          style={{
            aspectRatio,
            backgroundImage: `url(${poster})`,
          }}
        >
          {title !== '' && (
            <p className={stylesVideo.title}>
              <span>{title}</span>
            </p>
          )}
          <button
            className={cn(styles.overlayButton, stylesVideo.overlayButton)}
            onClick={() => (onClick ? onClick() : setLoaded(true))}
          >
            <Icon
              icon="youtube"
              className={cn(
                styles.overlayButtonIcon,
                stylesVideo.overlayButtonIcon
              )}
            />
          </button>
        </div>
      )}
    </div>
  ) : null;
};

export default VideoEmbedYoutubeIFrame;
