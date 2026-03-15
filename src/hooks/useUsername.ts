import { useState } from 'react';

export const useUsername = () => {
  const [username, setUsername] = useState(() => localStorage.getItem('username') || '');

  const signup = (name: string) => {
    localStorage.setItem('username', name);
    setUsername(name);
  };

  const logout = () => {
    localStorage.removeItem('username');
    setUsername('');
  };

  return {
    username,
    signup,
    logout,
  };
};
