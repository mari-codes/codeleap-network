import styles from './DeleteModal.module.scss';
import Button from '@/components/Button';
import type { DeleteModalProps } from './types';

export const DeleteModal = ({ isOpen, onCancel, onConfirm }: DeleteModalProps) => {
  if (!isOpen) return null;

  return (
    <div className={styles.deleteModalOverlay}>
      <div className={styles.deleteModal}>
        <h3 className={styles.deleteModal__title}>Are you sure you want to delete this item?</h3>

        <div className={styles.deleteModal__actions}>
          <Button variant="outline" onClick={onCancel}>
            Cancel
          </Button>

          <Button variant="danger" onClick={onConfirm}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};
