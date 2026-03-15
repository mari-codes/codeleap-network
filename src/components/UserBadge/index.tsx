import styles from './UserBadge.module.scss';
import type { UserBadgeProps } from './types';

export const UserBadge = ({ username }: UserBadgeProps) => {
  return (
    <span className={styles.userBadge}>
      Hey, <strong>{username}</strong>
    </span>
  );
};
