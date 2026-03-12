import { useState } from 'react';
import styles from './EditModal.module.scss';
import Button from '@/components/Button';
import { Input } from '@/components/Input';
import { Textarea } from '@/components/TextArea';
import type { EditModalProps } from './types';

export const EditModal = ({ isOpen, title, content, onCancel, onSave }: EditModalProps) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newContent, setNewContent] = useState(content);

  if (!isOpen) return null;

  return (
    <div className={styles.editModalOverlay}>
      <div className={styles.editModal}>
        <h3 className={styles.editModal__title}>Edit item</h3>

        <Input
          label="Title"
          placeholder="Hello world"
          inputSize="md"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />

        <Textarea
          label="Content"
          placeholder="Content here"
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
        />

        <div className={styles.editModal__actions}>
          <Button variant="outline" onClick={onCancel}>
            Cancel
          </Button>

          <Button variant="success" onClick={() => onSave(newTitle, newContent)}>
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};
