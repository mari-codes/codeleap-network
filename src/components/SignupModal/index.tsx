import { useState } from 'react';
import styles from './SignupModal.module.scss';
import { Input } from '@/components/Input';
import Button from '@/components/Button';
import type { SignupModalProps } from './types';
export const SignupModal = ({ onEnter }: SignupModalProps) => {
  const [username, setUsername] = useState('');

  const handleEnter = () => {
    const value = username.trim();

    if (!value) return;

    onEnter(value);
  };

  return (
    <div className={styles.signupModal}>
      <div className={styles.signupModal__card}>
        <h1 className={styles.signupModal__title}>Welcome to CodeLeap network!</h1>

        <Input
          label="Please enter your username"
          placeholder="John Doe"
          inputSize="sm"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <div className={styles.signupModal__actions}>
          <Button
            variant="primary"
            size="compact"
            disabled={!username.trim()}
            onClick={handleEnter}
          >
            ENTER
          </Button>
        </div>
      </div>
    </div>
  );
};
