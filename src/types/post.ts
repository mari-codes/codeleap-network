export type SortBy = 'newest' | 'oldest';

export type FilterBy = 'all' | 'mine';

export interface Post {
  id: number;
  username: string;
  title: string;
  content: string;
  created_datetime: string;
}
