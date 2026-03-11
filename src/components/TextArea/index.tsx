import styles from './Textarea.module.scss';
import type { TextareaProps } from './types';

export const Textarea = ({
  label,
  textareaSize = 'lg',
  className = '',
  ...props
}: TextareaProps) => {
  const wrapperClasses = `${styles.textareaField} ${styles[`textareaField--${textareaSize}`]}`;

  const textareaClasses = `${styles.textareaField__control} ${className}`.trim();

  return (
    <div className={wrapperClasses}>
      {label && <label className={styles.textareaField__label}>{label}</label>}
      <textarea className={textareaClasses} {...props} />
    </div>
  );
};
