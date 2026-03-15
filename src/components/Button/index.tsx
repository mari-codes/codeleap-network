import styles from './Button.module.scss';
import type { ButtonProps } from './types';

const Button = ({
  children,
  variant = 'primary',
  size = 'default',
  className = '',
  ...props
}: ButtonProps) => {
  const classes = [
    styles.button,
    styles[`button--${variant}`],
    styles[`button--${size}`],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
