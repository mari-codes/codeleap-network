import { api } from './client';
import type { Post } from '@/types/post';

interface PostsResponse {
  results: Post[];
}

export const fetchPosts = async (): Promise<Post[]> => {
  const response = await api.get<PostsResponse>('/');

  return response.data.results;
};

interface CreatePostPayload {
  username: string;
  title: string;
  content: string;
}

export const createPost = async (payload: CreatePostPayload) => {
  const response = await api.post('/', payload);
  return response.data;
};

export const deletePost = async (id: number) => {
  await api.delete(`${id}/`);
};

interface UpdatePostPayload {
  id: number;
  title: string;
  content: string;
}

export const updatePost = async ({ id, title, content }: UpdatePostPayload) => {
  const response = await api.patch(`${id}/`, {
    title,
    content,
  });

  return response.data;
};
