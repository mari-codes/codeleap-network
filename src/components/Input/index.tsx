import styles from './Input.module.scss';
import type { InputProps } from './types';

export const Input = ({ label, inputSize = 'sm', className = '', ...props }: InputProps) => {
  const wrapperClasses = `${styles.inputField} ${styles[`inputField--${inputSize}`]}`;

  const inputClasses = `${styles.inputField__control} ${className}`.trim();

  return (
    <div className={wrapperClasses}>
      {label && <label className={styles.inputField__label}>{label}</label>}
      <input className={inputClasses} {...props} />
    </div>
  );
};
