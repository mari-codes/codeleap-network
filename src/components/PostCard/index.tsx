import { useState } from 'react';
import styles from './PostCard.module.scss';
import type { PostCardProps } from './types';
import { Icon } from '@iconify/react';
import { formatDate } from '@/utils/formatDate';
import { DeleteModal } from '@/components/DeleteModal';
import { EditModal } from '@/components/EditModal';

export const PostCard = ({
  id,
  username,
  title,
  content,
  created_datetime,
  isOwner = true,
  onDelete,
  onUpdate,
}: PostCardProps) => {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);

  const handleConfirmDelete = () => {
    onDelete?.(id);
    setIsDeleteOpen(false);
  };

  const handleSaveEdit = (newTitle: string, newContent: string) => {
    onUpdate?.(id, newTitle, newContent);
    setIsEditOpen(false);
  };

  return (
    <>
      <article className={styles.postCard}>
        <header className={styles.postCard__header}>
          <h3 className={styles.postCard__title}>{title}</h3>

          {isOwner && (
            <div className={styles.postCard__actions}>
              <button
                type="button"
                className={styles.postCard__actionButton}
                aria-label="Delete post"
                onClick={() => setIsDeleteOpen(true)}
              >
                <Icon icon="ic:baseline-delete-forever" width="30" />
              </button>

              <button
                type="button"
                className={styles.postCard__actionButton}
                aria-label="Edit post"
                onClick={() => setIsEditOpen(true)}
              >
                <Icon icon="bx:bx-edit" width="30" />
              </button>
            </div>
          )}
        </header>

        <div className={styles.postCard__body}>
          <div className={styles.postCard__meta}>
            <span className={styles.postCard__author}>@{username}</span>
            <span className={styles.postCard__date}>{formatDate(created_datetime)}</span>
          </div>

          <p className={styles.postCard__content}>{content}</p>
        </div>
      </article>

      <DeleteModal
        isOpen={isDeleteOpen}
        onCancel={() => setIsDeleteOpen(false)}
        onConfirm={handleConfirmDelete}
      />

      <EditModal
        isOpen={isEditOpen}
        title={title}
        content={content}
        onCancel={() => setIsEditOpen(false)}
        onSave={handleSaveEdit}
      />
    </>
  );
};
