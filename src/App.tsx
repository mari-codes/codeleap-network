import { useState } from 'react';
import { SignupModal } from './components/SignupModal';
import { CreatePost } from './components/CreatePost';
import { Header } from './components/Header';

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
          </main>
        </>
      )}
    </>
  );
};

export default App;
