import type { Post } from '@/types/post';

export interface PostListProps {
  posts: Post[];
  username: string;
  onDelete: (id: number) => void;
  onUpdate: (id: number, title: string, content: string) => void;
}
