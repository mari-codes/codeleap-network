import { useState } from 'react';
import styles from './CreatePost.module.scss';
import { Input } from '@/components/Input';
import { Textarea } from '@/components/TextArea';
import Button from '@/components/Button';
import type { CreatePostProps } from './types';

const MAX_TITLE_LENGTH = 60;
const MAX_CONTENT_LENGTH = 500;
const TITLE_INPUT_MAX_LENGTH = MAX_TITLE_LENGTH + 10;

export const CreatePost = ({ onCreate }: CreatePostProps) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const trimmedTitle = title.trim();
  const trimmedContent = content.trim();

  const isTitleTooLong = title.length > MAX_TITLE_LENGTH;
  const isDisabled = !trimmedTitle || !trimmedContent || isTitleTooLong;

  const handleCreate = () => {
    if (!trimmedTitle || !trimmedContent || isTitleTooLong) {
      return;
    }

    onCreate(trimmedTitle, trimmedContent);

    setTitle('');
    setContent('');
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      event.preventDefault();
      handleCreate();
    }
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
            maxLength={TITLE_INPUT_MAX_LENGTH}
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
          maxLength={MAX_CONTENT_LENGTH}
          value={content}
          onChange={(event) => setContent(event.target.value)}
          onKeyDown={handleKeyDown}
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
