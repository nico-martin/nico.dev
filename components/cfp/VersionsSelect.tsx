import React from 'react';
import CopyP from '@comps/cfp/CopyP';
import cn from '@utils/classnames';
import styles from './VersionsSelect.module.css';

const VersionsSelect: React.FC<{
  className?: string;
  options: Array<{ title: string; content: string }>;
}> = ({ className = '', options }) => {
  const [activeOption, setActiveOption] = React.useState<number>(0);
  const activeContent: string = React.useMemo(
    () => options[activeOption].content,
    [activeOption]
  );

  return (
    <div className={cn(className, styles.root)}>
      <label className={styles.label}>
        <select
          className={styles.select}
          onChange={(e) => setActiveOption(parseInt(e.target.value))}
        >
          {options.map(({ title, content }, i) => (
            <option key={i} value={i}>
              {title} ({content.length})
            </option>
          ))}
        </select>
      </label>
      <div className={styles.content}>
        <CopyP content={activeContent} />
        <div className={styles.sizes}>
          <p>
            {activeContent.length} / {activeContent.split(' ').length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VersionsSelect;
