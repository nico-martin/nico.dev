import cn from '@utils/classnames';
import styles from './ShareableTemplate.module.css';

export default function ShareableTemplate({ content }: { content: string }) {
  return (
    <template data-shareable>
      <svg
        height="0"
        style={{
          position: 'absolute',
          opacity: 0,
        }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="svgBlur" x="-5%" y="-5%" width="110%" height="110%">
          <feGaussianBlur stdDeviation="20" />
          <feColorMatrix
            type="matrix"
            values="1 0 0 0 0, 0 1 0 0 0, 0 0 1 0 0, 0 0 0 9 0"
          />
          <feComposite in2="SourceGraphic" operator="in" />
        </filter>
      </svg>
      <img
        alt="Nico Martin - Frontend Developer"
        className={styles.image}
        src="../img/nico-martin-700.webp"
      />
      <div className={cn(styles.shadow)} />
      <div className={cn(styles.main)}>
        <div className={cn(styles.mainContent)}>
          <div className={cn(styles.titleContainer)}>
            <h1 className={styles.title}>Nico Martin</h1>
          </div>
          <div
            className={cn(styles.text)}
            dangerouslySetInnerHTML={{ __html: content }}
          />
          <p className={cn(styles.text)}>
            <b>nico.dev</b>
          </p>
        </div>
      </div>
    </template>
  );
}
