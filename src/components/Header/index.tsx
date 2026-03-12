import { Icon } from '@iconify/react';
import styles from './Header.module.scss';
import type { HeaderProps } from './types';

export const Header = ({ onLogout }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <h1 className={styles.header__title}>CodeLeap Network</h1>

        <button
          type="button"
          className={styles.header__logout}
          onClick={onLogout}
          aria-label="Logout"
        >
          <Icon icon="mdi:logout" width="30" />
        </button>
      </div>
    </header>
  );
};
