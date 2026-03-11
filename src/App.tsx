import { useState } from 'react';
import { SignupModal } from './components/SignupModal';
import { CreatePost } from './components/CreatePost';
import { Header } from './components/Header';
import { PostList } from './components/PostList';

const App = () => {
  const [username, setUsername] = useState('');

  return (
    <>
      {!username ? (
        <SignupModal onEnter={setUsername} />
      ) : (
        <>
          <Header />
          <main>
            <CreatePost />
            <PostList />
          </main>
        </>
      )}
    </>
  );
};

export default App;
