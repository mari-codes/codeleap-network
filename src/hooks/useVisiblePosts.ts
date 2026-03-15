import { useMemo } from 'react';
import type { Post, SortBy, FilterBy } from '@/types/post';

type UseVisiblePostsParams = {
  posts: Post[];
  username: string;
  sortBy: SortBy;
  filterBy: FilterBy;
};

export const useVisiblePosts = ({ posts, username, sortBy, filterBy }: UseVisiblePostsParams) => {
  const visiblePosts = useMemo(() => {
    const filteredPosts =
      filterBy === 'mine' ? posts.filter((post) => post.username === username) : posts;

    return [...filteredPosts].sort((a, b) => {
      const dateA = new Date(a.created_datetime).getTime();
      const dateB = new Date(b.created_datetime).getTime();

      return sortBy === 'newest' ? dateB - dateA : dateA - dateB;
    });
  }, [posts, username, sortBy, filterBy]);

  return visiblePosts;
};
