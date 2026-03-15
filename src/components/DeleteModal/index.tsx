import Button from '@/components/Button';
import { Modal } from '@/components/Modal';
import type { DeleteModalProps } from './types';

export const DeleteModal = ({ isOpen, onCancel, onConfirm }: DeleteModalProps) => {
  return (
    <Modal isOpen={isOpen} title="Are you sure you want to delete this item?" onCancel={onCancel}>
      <Button variant="outline" onClick={onCancel}>
        Cancel
      </Button>

      <Button variant="danger" onClick={onConfirm}>
        Delete
      </Button>
    </Modal>
  );
};
