import styles from './PostCard.module.scss';
import type { PostCardProps } from './types';
import { Icon } from '@iconify/react';

export const PostCard = ({ username, title, content, date, isOwner = true }: PostCardProps) => {
  return (
    <article className={styles.postCard}>
      <header className={styles.postCard__header}>
        <h3 className={styles.postCard__title}>{title}</h3>

        {isOwner && (
          <div className={styles.postCard__actions}>
            <button
              type="button"
              className={styles.postCard__actionButton}
              aria-label="Delete post"
            >
              <Icon icon="ic:baseline-delete-forever" width="30" />
            </button>

            <button type="button" className={styles.postCard__actionButton} aria-label="Edit post">
              <Icon icon="bx:bx-edit" width="30" />
            </button>
          </div>
        )}
      </header>

      <div className={styles.postCard__body}>
        <div className={styles.postCard__meta}>
          <span className={styles.postCard__author}>@{username}</span>
          <span className={styles.postCard__date}>{date}</span>
        </div>

        <p className={styles.postCard__content}>{content}</p>
      </div>
    </article>
  );
};
