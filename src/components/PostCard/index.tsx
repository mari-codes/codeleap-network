import { useEffect, useState } from 'react';
import styles from './PostCard.module.scss';
import type { PostCardProps } from './types';
import { Icon } from '@iconify/react';
import { formatDate } from '@/utils/formatDate';
import { DeleteModal } from '@/components/DeleteModal';
import { EditModal } from '@/components/EditModal';
import { LikeButton } from '@/components/LikeButton';
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll';

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
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  const { ref, isVisible } = useRevealOnScroll<HTMLElement>();

  const likedStorageKey = `post-liked-${id}`;
  const likesStorageKey = `post-likes-${id}`;

  useEffect(() => {
    const savedLiked = localStorage.getItem(likedStorageKey);
    const savedLikes = localStorage.getItem(likesStorageKey);

    if (savedLiked !== null) {
      setLiked(JSON.parse(savedLiked));
    }

    if (savedLikes !== null) {
      setLikes(JSON.parse(savedLikes));
    }
  }, [likedStorageKey, likesStorageKey]);

  const handleConfirmDelete = () => {
    onDelete?.(id);
    setIsDeleteOpen(false);
  };

  const handleSaveEdit = (newTitle: string, newContent: string) => {
    onUpdate?.(id, newTitle, newContent);
    setIsEditOpen(false);
  };

  const handleToggleLike = () => {
    const nextLiked = !liked;
    const nextLikes = nextLiked ? likes + 1 : Math.max(likes - 1, 0);

    setLiked(nextLiked);
    setLikes(nextLikes);

    localStorage.setItem(likedStorageKey, JSON.stringify(nextLiked));
    localStorage.setItem(likesStorageKey, JSON.stringify(nextLikes));
  };

  return (
    <>
      <article
        ref={ref}
        className={`${styles.postCard} ${isVisible ? styles['postCard--visible'] : ''}`}
      >
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
                <Icon icon="ic:baseline-delete-forever" className={styles.postCard__actionIcon} />
              </button>

              <button
                type="button"
                className={styles.postCard__actionButton}
                aria-label="Edit post"
                onClick={() => setIsEditOpen(true)}
              >
                <Icon icon="bx:bx-edit" className={styles.postCard__actionIcon} />
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
          <div className={styles.postCard__footer}>
            <LikeButton liked={liked} count={likes} onToggle={handleToggleLike} />
          </div>
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
