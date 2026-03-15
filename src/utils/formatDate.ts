export const formatDate = (date: string) => {
  const now = new Date();
  const postDate = new Date(date);

  const diff = Math.floor((now.getTime() - postDate.getTime()) / 1000);

  if (diff < 60) return 'now';

  if (diff < 3600) {
    const minutes = Math.floor(diff / 60);
    return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  }

  if (diff < 86400) {
    const hours = Math.floor(diff / 3600);
    return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  }

  const days = Math.floor(diff / 86400);
  return `${days} day${days > 1 ? 's' : ''} ago`;
};
