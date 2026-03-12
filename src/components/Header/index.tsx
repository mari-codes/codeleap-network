import { Icon } from '@iconify/react';
import { UserBadge } from '../UserBadge';
import styles from './Header.module.scss';
import type { HeaderProps } from './types';

export const Header = ({ username, onLogout }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <h1 className={styles.header__title}>CodeLeap Network</h1>

        <div className={styles.header__actions}>
          <UserBadge username={username} />

          <span className={styles.header__divider}></span>

          <button
            type="button"
            className={styles.header__logout}
            onClick={onLogout}
            aria-label="Logout"
          >
            <Icon icon="mdi:logout" width="28" />
          </button>
        </div>
      </div>
    </header>
  );
};
