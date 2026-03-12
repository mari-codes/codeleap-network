import { useRef } from 'react';
import styles from './Textarea.module.scss';
import type { TextareaProps } from './types';

export const Textarea = ({
  label,
  textareaSize = 'lg',
  className = '',
  maxLength,
  ...props
}: TextareaProps) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleInput = (event: React.FormEvent<HTMLTextAreaElement>) => {
    const element = event.currentTarget;

    element.style.height = 'auto';
    element.style.height = `${element.scrollHeight}px`;
  };

  const wrapperClasses = `${styles.textareaField} ${styles[`textareaField--${textareaSize}`]}`;

  const textareaClasses = `${styles.textareaField__control} ${className}`.trim();

  return (
    <div className={wrapperClasses}>
      {label && <label className={styles.textareaField__label}>{label}</label>}

      <textarea
        ref={textareaRef}
        className={textareaClasses}
        maxLength={maxLength}
        onInput={handleInput}
        {...props}
      />
    </div>
  );
};
