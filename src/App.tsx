import { useState } from 'react';
import { SignupModal } from './components/SignupModal';
import { CreatePost } from './components/CreatePost';

const App = () => {
  const [username, setUsername] = useState('');

  return (
    <>
      {!username ? (
        <SignupModal onEnter={setUsername} />
      ) : (
        <main>
          <CreatePost/>
        </main>
      )}
    </>
  );
};

export default App;
