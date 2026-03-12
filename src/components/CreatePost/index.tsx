import { useState } from 'react';
import styles from './CreatePost.module.scss';
import { Input } from '@/components/Input';
import { Textarea } from '@/components/TextArea';
import Button from '@/components/Button';
import type { CreatePostProps } from './types';

export const CreatePost = ({ onCreate }: CreatePostProps) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const MAX_TITLE_LENGTH = 60;

  const trimmedTitle = title.trim();
  const trimmedContent = content.trim();

  const isTitleTooLong = title.length > MAX_TITLE_LENGTH;

  const isDisabled = !trimmedTitle || !trimmedContent || isTitleTooLong;

  const handleCreate = () => {
    const trimmedTitle = title.trim();
    const trimmedContent = content.trim();

    if (!trimmedTitle || !trimmedContent || isTitleTooLong) {
      return;
    }

    onCreate(trimmedTitle, trimmedContent);

    setTitle('');
    setContent('');
  };

  return (
    <section className={styles.createPost}>
      <h2 className={styles.createPost__title}>What’s on your mind?</h2>

      <div className={styles.createPost__form}>
        <div className={styles.createPost__field}>
          <Input
            label="Title"
            placeholder="Hello world"
            inputSize="lg"
            maxLength={MAX_TITLE_LENGTH + 10}
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          {isTitleTooLong && (
            <span className={styles.createPost__error}>
              Title must be under {MAX_TITLE_LENGTH} characters
            </span>
          )}
        </div>

        <Textarea
          label="Content"
          placeholder="Content here"
          textareaSize="lg"
          maxLength={500}
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />

        <div className={styles.createPost__actions}>
          <Button variant="primary" disabled={isDisabled} onClick={handleCreate}>
            Create
          </Button>
        </div>
      </div>
    </section>
  );
};
