import { useState } from 'react';
import styles from './CreatePost.module.scss';
import { Input } from '@/components/Input';
import { Textarea } from '@/components/TextArea';
import Button from '@/components/Button';

export const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const isDisabled = !title.trim() || !content.trim();

  return (
    <section className={styles.createPost}>
      <h2 className={styles.createPost__title}>What’s on your mind?</h2>

      <div className={styles.createPost__form}>
        <Input
          label="Title"
          placeholder="Hello world"
          inputSize="lg"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <Textarea
          label="Content"
          placeholder="Content here"
          textareaSize="lg"
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />

        <div className={styles.createPost__actions}>
          <Button variant="primary" disabled={isDisabled}>
            Create
          </Button>
        </div>
      </div>
    </section>
  );
};
