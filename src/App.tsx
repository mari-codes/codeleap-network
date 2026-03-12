import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { SignupModal } from './components/SignupModal';
import { CreatePost } from './components/CreatePost';
import { Header } from './components/Header';
import { PostList } from './components/PostList';
import { PostSort } from '@/components/PostSort';
import { PostFilter } from '@/components/PostFilter';
import { EmptyState } from '@/components/EmptyState';
import { FeedSkeleton } from '@/components/FeedSkeleton';
import { fetchPosts, createPost, deletePost, updatePost } from '@/api/posts';
import styles from './App.module.scss';

const App = () => {
  const [username, setUsername] = useState(() => localStorage.getItem('username') || '');
  const [sortBy, setSortBy] = useState<'newest' | 'oldest'>('newest');
  const [filterBy, setFilterBy] = useState<'all' | 'mine'>('all');

  const queryClient = useQueryClient();

  const handleSignup = (name: string) => {
    localStorage.setItem('username', name);
    setUsername(name);
  };

  const handleLogout = () => {
    localStorage.removeItem('username');
    setUsername('');
  };

  const {
    data: posts = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

  const filteredPosts =
    filterBy === 'mine' ? posts.filter((post) => post.username === username) : posts;

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    const dateA = new Date(a.created_datetime).getTime();
    const dateB = new Date(b.created_datetime).getTime();

    if (sortBy === 'newest') {
      return dateB - dateA;
    }

    return dateA - dateB;
  });

  const createPostMutation = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
  });

  const handleCreatePost = (title: string, content: string) => {
    createPostMutation.mutate({
      username,
      title,
      content,
    });
  };

  const deletePostMutation = useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
  });

  const handleDeletePost = (id: number) => {
    deletePostMutation.mutate(id);
  };

  const updatePostMutation = useMutation({
    mutationFn: updatePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
  });

  const handleUpdatePost = (id: number, title: string, content: string) => {
    updatePostMutation.mutate({ id, title, content });
  };

  if (!username) {
    return <SignupModal onEnter={handleSignup} />;
  }

  return (
    <div className={styles.container}>
      <Header username={username} onLogout={handleLogout} />

      <main className={styles.main}>
        <CreatePost onCreate={handleCreatePost} />

        {!isLoading && !isError && (
          <div className={styles.feedControls}>
            <PostFilter value={filterBy} onChange={setFilterBy} />
            <span className={styles.divider}></span>
            <PostSort value={sortBy} onChange={setSortBy} />
          </div>
        )}

        {isLoading && <FeedSkeleton />}
        {isError && <p className={styles.errorMessage}>Failed to load posts.</p>}

        {!isLoading &&
          !isError &&
          (sortedPosts.length === 0 ? (
            <EmptyState type={filterBy} />
          ) : (
            <PostList
              posts={sortedPosts}
              username={username}
              onDelete={handleDeletePost}
              onUpdate={handleUpdatePost}
            />
          ))}
      </main>
    </div>
  );
};

export default App;
