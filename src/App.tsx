import { useState } from 'react';
import { SignupModal } from './components/SignupModal';

const App = () => {
  const [username, setUsername] = useState('');

  return (
    <>
      {!username ? (
        <SignupModal onEnter={setUsername} />
      ) : (
        <main>
          <h1>Username: {username}</h1>
        </main>
      )}
    </>
  );
};

export default App;
