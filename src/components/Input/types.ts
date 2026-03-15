import type { InputHTMLAttributes } from 'react';

type InputSize = 'sm' | 'md' | 'lg';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  inputSize?: InputSize;
}
