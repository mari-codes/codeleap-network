import { Icon } from '@iconify/react';
import styles from './EmptyState.module.scss';
import type { EmptyStateProps } from './types';

export const EmptyState = ({ type }: EmptyStateProps) => {
  return (
    <div className={styles.emptyState}>
      <Icon icon="mdi:post-outline" width="36" className={styles.emptyState__icon} />

      {type === 'all' ? (
        <>
          <p className={styles.emptyState__title}>No posts yet</p>
          <p className={styles.emptyState__text}>Start the conversation by creating a post.</p>
        </>
      ) : (
        <>
          <p className={styles.emptyState__title}>Your posts will appear here</p>
          <p className={styles.emptyState__text}>Create your first one above.</p>
        </>
      )}
    </div>
  );
};
