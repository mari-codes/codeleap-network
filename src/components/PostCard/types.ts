import type { Post } from '@/types/post';

export interface PostCardProps extends Post {
  isOwner?: boolean;
  onDelete?: (id: number) => void;
  onUpdate?: (id: number, title: string, content: string) => void;
}
