import type { TextareaHTMLAttributes } from 'react';

export type TextareaSize = 'md' | 'lg';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  textareaSize?: TextareaSize;
}
