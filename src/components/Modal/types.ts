export interface ModalProps {
  isOpen?: boolean;
  title: string;
  onCancel: () => void;
  children: React.ReactNode;
}
