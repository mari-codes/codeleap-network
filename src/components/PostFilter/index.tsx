import styles from './PostFilter.module.scss';
import type { PostFilterProps } from './types';

export const PostFilter = ({ value, onChange }: PostFilterProps) => {
  return (
    <div className={styles.postFilter}>
      <button
        className={`${styles.postFilter__button} ${
          value === 'all' ? styles['postFilter__button--active'] : ''
        }`}
        onClick={() => onChange('all')}
      >
        All
      </button>

      <button
        className={`${styles.postFilter__button} ${
          value === 'mine' ? styles['postFilter__button--active'] : ''
        }`}
        onClick={() => onChange('mine')}
      >
        My posts
      </button>
    </div>
  );
};
