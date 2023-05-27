import React from 'react';
import cn from '@utils/classnames';
import { TALK_VIDEO_TYPE } from '@utils/types';
import styles from './VideoEmbed.module.css';
import VideoEmbedYoutubeIFrame from './VideoEmbedYoutubeIFrame';

export interface VideoIframeProps {
  url: string;
  title?: string;
  aspectRatio: string;
  iFrameClassName: string;
  className?: string;
  onClick?: () => void;
  inactive?: boolean;
}

const VideoEmbed: React.FC<{
  url: string;
  type: TALK_VIDEO_TYPE;
  videoWidth?: number;
  videoHeight?: number;
  className?: string;
  onClick?: () => void;
  inactive?: boolean;
}> = ({
  url,
  type,
  videoWidth = 560,
  videoHeight = 315,
  className = '',
  onClick = null,
  inactive = false,
}) => {
  return (
    <div className={cn(className, styles.root)}>
      {type === TALK_VIDEO_TYPE.YOUTUBE ? (
        <VideoEmbedYoutubeIFrame
          url={url}
          aspectRatio={`${videoWidth} / ${videoHeight}`}
          iFrameClassName={styles.iframe}
          onClick={onClick}
          inactive={inactive}
        />
      ) : null}
    </div>
  );
};

export default VideoEmbed;
