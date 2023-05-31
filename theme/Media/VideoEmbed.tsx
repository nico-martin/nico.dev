import React from 'react';
import cn from '@utils/classnames';
import { getVideoTypeByUrl } from '@utils/helpers';
import { TALK_VIDEO_TYPE } from '@utils/types';
import styles from './VideoEmbed.module.css';
import VideoEmbedJwpIFrame from './VideoEmbedJwpIFrame';
import VideoEmbedVideoPressIFrame from './VideoEmbedVideoPressIFrame';
import VideoEmbedYoutubeIFrame from './VideoEmbedYoutubeIFrame';

export interface VideoIframeProps {
  url: string;
  title?: string;
  aspectRatio: string;
  className?: string;
  onClick?: () => void;
  inactive?: boolean;
  poster?: string;
}

const VideoEmbed: React.FC<{
  url: string;
  videoWidth?: number;
  videoHeight?: number;
  className?: string;
  onClick?: () => void;
  inactive?: boolean;
  title?: string;
  poster?: string;
}> = ({
  url,
  videoWidth = 560,
  videoHeight = 315,
  className = '',
  onClick = null,
  inactive = false,
  title = '',
  poster = '',
}) => {
  const type: TALK_VIDEO_TYPE = getVideoTypeByUrl(url);

  return (
    <div className={cn(className, styles.root)}>
      {type === TALK_VIDEO_TYPE.WORDPRESS ? (
        <VideoEmbedVideoPressIFrame
          url={url}
          aspectRatio={`${videoWidth} / ${videoHeight}`}
          onClick={onClick}
          inactive={inactive}
          title={title}
          poster={poster}
        />
      ) : type === TALK_VIDEO_TYPE.JWPLAYER ? (
        <VideoEmbedJwpIFrame
          url={url}
          aspectRatio={`${videoWidth} / ${videoHeight}`}
          onClick={onClick}
          inactive={inactive}
          title={title}
          poster={poster}
        />
      ) : type === TALK_VIDEO_TYPE.YOUTUBE ? (
        <VideoEmbedYoutubeIFrame
          url={url}
          aspectRatio={`${videoWidth} / ${videoHeight}`}
          onClick={onClick}
          inactive={inactive}
          title={title}
          poster={poster}
        />
      ) : null}
    </div>
  );
};

export default VideoEmbed;
