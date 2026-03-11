import { PostCard } from '@/components/PostCard';
import styles from './PostList.module.scss';

export const PostList = () => {
  const posts = [
    {
      id: 1,
      username: 'John',
      title: 'Hello world',
      content: 'This is my first post',
      date: '25 minutes ago',
    },
  ];

  return (
    <section className={styles.postList}>
      {posts.map((post) => (
        <PostCard
          key={post.id}
          username={post.username}
          title={post.title}
          content={post.content}
          date={post.date}
        />
      ))}
    </section>
  );
};