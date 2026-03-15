import { PostCard } from '@/components/PostCard';
import styles from './PostList.module.scss';
import type { PostListProps } from './types';

export const PostList = ({ posts, username, onDelete, onUpdate }: PostListProps) => {
  return (
    <section className={styles.postList}>
      {posts.map((post) => (
        <PostCard
          key={post.id}
          {...post}
          isOwner={post.username === username}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </section>
  );
};
