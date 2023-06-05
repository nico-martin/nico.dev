import React from 'react';
import VersionsSelect from '@comps/cfp/VersionsSelect';
import cn from '@utils/classnames';
import { ApiPaperI } from '@utils/types';
import styles from './Papers.module.css';

const Papers: React.FC<{ className?: string; papers: Array<ApiPaperI> }> = ({
  className = '',
  papers,
}) => {
  const [activePaper, setActivePaper] = React.useState<number>(0);

  return (
    <div className={cn(className, styles.root)}>
      <select
        className={styles.select}
        onChange={(e) => setActivePaper(parseInt(e.target.value))}
      >
        {papers.map((paper, i) => (
          <option value={i}>{paper.title}</option>
        ))}
      </select>
      <VersionsSelect
        key={papers[activePaper].title}
        options={papers[activePaper].content.map((content) => ({
          title: content.title,
          content: content.text,
        }))}
      />
      <h4 className={styles.notes}>Notes</h4>
      <p
        dangerouslySetInnerHTML={{
          __html: papers[activePaper].notes.replace(/\n/g, '<br />'),
        }}
      />
    </div>
  );
};

export default Papers;
