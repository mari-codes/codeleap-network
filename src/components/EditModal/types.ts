export interface EditModalProps {
  isOpen: boolean;
  title: string;
  content: string;
  onCancel: () => void;
  onSave: (title: string, content: string) => void;
}
