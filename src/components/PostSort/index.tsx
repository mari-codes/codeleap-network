import { Icon } from '@iconify/react';
import styles from './PostSort.module.scss';
import type { PostSortProps } from './types';

export const PostSort = ({ value, onChange }: PostSortProps) => {
  const handleToggle = () => {
    onChange(value === 'newest' ? 'oldest' : 'newest');
  };

  return (
    <div className={styles.postSort}>
      <button type="button" className={styles.postSort__button} onClick={handleToggle}>
        <Icon icon="mdi:swap-vertical" width="14" />
        <span>{value === 'newest' ? 'Newest' : 'Oldest'}</span>
      </button>
    </div>
  );
};
