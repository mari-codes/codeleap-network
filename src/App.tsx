import { useState } from 'react';
import { SignupModal } from './components/SignupModal';
import { CreatePost } from './components/CreatePost';
import { Header } from './components/Header';
import { PostList } from './components/PostList';
import { PostSort } from '@/components/PostSort';
import { PostFilter } from '@/components/PostFilter';
import { EmptyState } from '@/components/EmptyState';
import { FeedSkeleton } from '@/components/FeedSkeleton';
import { LogoutModal } from '@/components/LogoutModal';
import { useUsername } from '@/hooks/useUsername';
import { usePosts } from '@/hooks/usePosts';
import { useVisiblePosts } from '@/hooks/useVisiblePosts';
import styles from './App.module.scss';
import type { FilterBy, SortBy } from './types/post';

const App = () => {
  const { username, signup, logout } = useUsername();

  const [sortBy, setSortBy] = useState<SortBy>('newest');
  const [filterBy, setFilterBy] = useState<FilterBy>('all');
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const { posts, isLoading, isError, handleCreatePost, handleDeletePost, handleUpdatePost } =
    usePosts(username);

  const visiblePosts = useVisiblePosts({
    posts,
    username,
    sortBy,
    filterBy,
  });

  const handleConfirmLogout = () => {
    logout();
    setIsLogoutModalOpen(false);
  };

  if (!username) {
    return <SignupModal onEnter={signup} />;
  }

  return (
    <div className={styles.app}>
      <Header username={username} onLogout={() => setIsLogoutModalOpen(true)} />

      <main className={styles.app__main}>
        <CreatePost onCreate={handleCreatePost} />

        {!isLoading && !isError && (
          <div className={styles.app__feedControls}>
            <PostFilter value={filterBy} onChange={setFilterBy} />
            <span className={styles.app__divider} aria-hidden="true"></span>
            <PostSort value={sortBy} onChange={setSortBy} />
          </div>
        )}

        {isLoading && <FeedSkeleton />}
        {isError && <p className={styles.app__errorMessage}>Failed to load posts.</p>}

        {!isLoading &&
          !isError &&
          (visiblePosts.length === 0 ? (
            <EmptyState type={filterBy} />
          ) : (
            <PostList
              posts={visiblePosts}
              username={username}
              onDelete={handleDeletePost}
              onUpdate={handleUpdatePost}
            />
          ))}
      </main>

      {isLogoutModalOpen && (
        <LogoutModal onCancel={() => setIsLogoutModalOpen(false)} onConfirm={handleConfirmLogout} />
      )}
    </div>
  );
};

export default App;
