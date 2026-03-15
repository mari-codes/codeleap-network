import { useEffect } from 'react';
import styles from './Modal.module.scss';
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll';
import type { ModalProps } from './types';

export const Modal = ({ isOpen = true, title, onCancel, children }: ModalProps) => {
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

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onCancel}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.title}>{title}</h2>

        <div className={styles.actions}>{children}</div>
      </div>
    </div>
  );
};
