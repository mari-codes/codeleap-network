import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { SignupModal } from './components/SignupModal';
import { CreatePost } from './components/CreatePost';
import { Header } from './components/Header';
import { PostList } from './components/PostList';
import { fetchPosts, createPost, deletePost, updatePost } from '@/api/posts';
import styles from './App.module.scss';

const App = () => {
  const [username, setUsername] = useState('');

  const {
    data: posts = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

  const queryClient = useQueryClient();

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
    return <SignupModal onEnter={setUsername} />;
  }

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <CreatePost onCreate={handleCreatePost} />

        {isLoading && <p>Loading posts...</p>}
        {isError && <p>Failed to load posts.</p>}

        {!isLoading && !isError && (
          <PostList
            posts={posts}
            username={username}
            onDelete={handleDeletePost}
            onUpdate={handleUpdatePost}
          />
        )}
      </main>
    </div>
  );
};

export default App;
