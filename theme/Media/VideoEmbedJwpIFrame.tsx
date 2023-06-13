import React from 'react';
import { Icon } from '@theme';
import cn from '@utils/classnames';
import { getJwpIdFromUrl } from '@utils/helpers';
import { VideoIframeProps } from './VideoEmbed';
import stylesVideo from './VideoEmbed.module.css';
import styles from './VideoEmbedJwpIFrame.module.css';

interface Props extends VideoIframeProps {}

const VideoEmbedJwtIFrame: React.FC<Props> = ({
  url,
  title = '',
  aspectRatio,
  className = '',
  onClick = null,
  inactive = false,
  poster = '',
}) => {
  const id = getJwpIdFromUrl(url);
  const [loaded, setLoaded] = React.useState<boolean>(false);

  React.useEffect(() => {
    inactive && setLoaded(false);
  }, [inactive]);

  return id ? (
    <div style={{ aspectRatio }} className={cn(className, styles.root)}>
      {loaded ? (
        <iframe
          src={`https://cdn.jwplayer.com/players/${id}-embed.html?autoplay=1`}
          frameBorder="0"
          scrolling="auto"
          allowFullScreen
          style={{ aspectRatio }}
          title={title}
          className={stylesVideo.iframe}
        />
      ) : (
        <div
          className={cn(stylesVideo.overlay)}
          style={{
            aspectRatio,
            backgroundImage: `url(${poster})`,
          }}
        >
          {
            <p className={stylesVideo.title}>
              <span>{title}</span>
            </p>
          }
          <button
            className={cn(stylesVideo.overlayButton)}
            onClick={() => (onClick ? onClick() : setLoaded(true))}
          >
            <Icon icon="play" className={stylesVideo.overlayButtonIcon} />
          </button>
        </div>
      )}
    </div>
  ) : null;
};

export default VideoEmbedJwtIFrame;
