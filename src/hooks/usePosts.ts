import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchPosts, createPost, deletePost, updatePost } from '@/api/posts';

export const usePosts = (username: string) => {
  const queryClient = useQueryClient();

  const {
    data: posts = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

  const invalidatePosts = () => {
    queryClient.invalidateQueries({ queryKey: ['posts'] });
  };

  const createPostMutation = useMutation({
    mutationFn: createPost,
    onSuccess: invalidatePosts,
  });

  const deletePostMutation = useMutation({
    mutationFn: deletePost,
    onSuccess: invalidatePosts,
  });

  const updatePostMutation = useMutation({
    mutationFn: updatePost,
    onSuccess: invalidatePosts,
  });

  const handleCreatePost = (title: string, content: string) => {
    createPostMutation.mutate({
      username,
      title,
      content,
    });
  };

  const handleDeletePost = (id: number) => {
    deletePostMutation.mutate(id);
  };

  const handleUpdatePost = (id: number, title: string, content: string) => {
    updatePostMutation.mutate({ id, title, content });
  };

  return {
    posts,
    isLoading,
    isError,
    handleCreatePost,
    handleDeletePost,
    handleUpdatePost,
  };
};
