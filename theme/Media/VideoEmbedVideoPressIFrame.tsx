import React from 'react';
import { Icon } from '@theme';
import cn from '@utils/classnames';
import { getVideopressIdFromUrl } from '@utils/helpers';
import { VideoIframeProps } from './VideoEmbed';
import stylesVideo from './VideoEmbed.module.css';
import styles from './VideoEmbedVideoPressIFrame.module.css';

interface Props extends VideoIframeProps {}

const VideoEmbedVideoPressIFrame: React.FC<Props> = ({
  url,
  title = '',
  aspectRatio,
  className = '',
  onClick = null,
  inactive = false,
  poster = '',
}) => {
  const id = getVideopressIdFromUrl(url);
  const [loaded, setLoaded] = React.useState<boolean>(false);

  React.useEffect(() => {
    inactive && setLoaded(false);
  }, [inactive]);

  return id ? (
    <div style={{ aspectRatio }} className={cn(className, styles.root)}>
      {loaded ? (
        <iframe
          src={`https://videopress.com/v/${id}?autoplay=true`}
          frameBorder="0"
          allowFullScreen
          allow="clipboard-write"
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

export default VideoEmbedVideoPressIFrame;
