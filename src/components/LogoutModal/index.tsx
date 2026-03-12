import { useEffect } from 'react';
import styles from './LogoutModal.module.scss';
import Button from '@/components/Button';
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll';
import type { LogoutModalProps } from './types';

export const LogoutModal = ({ onConfirm, onCancel }: LogoutModalProps) => {
  useLockBodyScroll();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onCancel();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onCancel]);

  return (
    <div className={styles.logoutModalOverlay} onClick={onCancel}>
      <div className={styles.logoutModal} onClick={(event) => event.stopPropagation()}>
        <h2 className={styles.logoutModal__title}>Ready to log out?</h2>

        <div className={styles.logoutModal__actions}>
          <Button variant="outline" onClick={onCancel}>
            Cancel
          </Button>

          <Button variant="danger" onClick={onConfirm}>
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};
