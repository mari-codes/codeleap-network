import { Icon } from '@iconify/react';
import styles from './LikeButton.module.scss';
import type { LikeButtonProps } from './types';

export const LikeButton = ({ liked, count, onToggle }: LikeButtonProps) => {
  return (
    <button
      className={`${styles.likeButton} ${liked ? styles['likeButton--liked'] : ''}`}
      onClick={onToggle}
    >
      <Icon icon={liked ? 'mdi:heart' : 'mdi:heart-outline'} width="20" />
      <span>{count}</span>
    </button>
  );
};
