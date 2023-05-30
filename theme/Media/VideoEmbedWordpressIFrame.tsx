import React from 'react';
import { Icon } from '@theme';
import { apiGet } from '@utils/apiFetch';
import cn from '@utils/classnames';
import { untrailingSlashIt, youtubeParser } from '@utils/helpers';
import { VideoIframeProps } from './VideoEmbed';
import stylesVideo from './VideoEmbed.module.css';
import styles from './VideoEmbedWordPressIFrame.module.css';

interface Props extends VideoIframeProps {}

const VideoEmbedWordPressIFrame: React.FC<Props> = ({
  url,
  title = '',
  aspectRatio,
  className = '',
  iFrameClassName,
  onClick = null,
  inactive = false,
}) => {
  const id = untrailingSlashIt(url).replace('https://videopress.com/v/', '');
  const [loaded, setLoaded] = React.useState<boolean>(false);
  const [poster, setPoster] = React.useState<string>('');

  React.useEffect(() => {
    apiGet<{ poster: string }>(
      `https://public-api.wordpress.com/rest/v1.1/videos/${id}/`
    ).then((resp) => setPoster(resp.poster));
  }, []);

  React.useEffect(() => {
    inactive && setLoaded(false);
  }, [inactive]);

  return id ? (
    <div style={{ aspectRatio }} className={styles.root}>
      {loaded ? (
        <iframe
          src={`https://videopress.com/v/${id}?autoplay=true`}
          frameBorder="0"
          allowFullScreen
          allow="clipboard-write"
          style={{ aspectRatio }}
          title={title}
          className={styles.iframe}
        />
      ) : (
        <div
          className={cn(styles.overlay)}
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
            className={cn(styles.overlayButton)}
            onClick={() => (onClick ? onClick() : setLoaded(true))}
          >
            <Icon icon="play" className={styles.overlayButtonIcon} />
          </button>
        </div>
      )}
    </div>
  ) : null;
};

export default VideoEmbedWordPressIFrame;
