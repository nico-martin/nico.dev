import React from 'react';
import { Icon, Video } from '@theme';
import cn from '@utils/classnames';
import { ApiTalksVideoI } from '@utils/types';
import styles from './VideoSlider.module.css';

const VideoSlider: React.FC<{ videos: ApiTalksVideoI[]; className?: string }> =
  ({ videos, className = '' }) => {
    const [activeElement, setActiveElement] = React.useState<number>(0);
    const ref = React.useRef<HTMLUListElement>(null);

    React.useEffect(() => {
      if (!ref?.current) return;
      const elements = ref.current.querySelectorAll('li');
      const element = elements[activeElement];
      const offset = element.offsetLeft - ref.current.offsetLeft;
      ref.current.scrollTo({
        left: offset,
        behavior: 'smooth',
      });
    }, [activeElement, ref]);

    return (
      <div className={cn(styles.root, className)}>
        <ul className={cn(styles.slider, className)} ref={ref}>
          {videos.map((video, i) => (
            <li className={styles.element} key={i} data-i={i}>
              <Video
                className={cn(styles.video, {
                  [styles.videoActive]: i === activeElement,
                })}
                url={video.url}
                type={video.type}
                videoWidth={video.width || undefined}
                videoHeight={video.height || undefined}
                onClick={i === activeElement ? null : () => setActiveElement(i)}
                inactive={i !== activeElement}
              />
            </li>
          ))}
        </ul>
        <div className={styles.actions}>
          <ul className={styles.indicator}>
            {videos.map((video, i) => (
              <li className={styles.indicatorElement}>
                <button
                  className={styles.indicatorButton}
                  onClick={() => setActiveElement(i)}
                  disabled={i === activeElement}
                >
                  Show video #{i + 1}
                </button>
              </li>
            ))}
          </ul>
          <div className={styles.nextPrev}>
            <button
              className={cn(styles.nextPrevButton, styles.nextPrevButtonPrev)}
              disabled={activeElement === 0}
              onClick={() => setActiveElement(activeElement - 1)}
            >
              <Icon icon="arrowLeftThin" className={styles.nextPrevIcon} />
            </button>
            <button
              className={cn(styles.nextPrevButton, styles.nextPrevButtonNext)}
              disabled={activeElement === videos.length - 1}
              onClick={() => setActiveElement(activeElement + 1)}
            >
              <Icon icon="arrowRightThun" className={styles.nextPrevIcon} />
            </button>
          </div>
        </div>
      </div>
    );
  };

export default VideoSlider;
