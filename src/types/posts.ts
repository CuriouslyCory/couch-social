export type Post = {
  id: number;
  content: string; // Content of the post
  createdAt: Date; // Date the post was created
  authorId: number; // UserID of the author
  likeCount: number; // Count of likes
  likeIds: number[]; // UserIDs of users who liked the post, only returned when needed as it could be a lot of data
  commentCount: number; // Count of comments
  commentIds: number[]; // UserIDs of users who commented on the post, only returned when needed as it could be a lot of data
};
