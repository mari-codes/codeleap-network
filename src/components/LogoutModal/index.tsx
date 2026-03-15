import Button from '@/components/Button';
import { Modal } from '@/components/Modal';
import type { LogoutModalProps } from './types';

export const LogoutModal = ({ onCancel, onConfirm }: LogoutModalProps) => {
  return (
    <Modal title="Ready to log out?" onCancel={onCancel}>
      <Button variant="outline" onClick={onCancel}>
        Cancel
      </Button>

      <Button variant="danger" onClick={onConfirm}>
        Logout
      </Button>
    </Modal>
  );
};
