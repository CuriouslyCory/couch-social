import { z } from "zod";
import { simulatedPosts } from "~/data/posts";
import { profiles } from "~/data/profiles";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const postRouter = createTRPCRouter({
  // Get a single post by id
  getPost: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(({ input }) => {
      const post = simulatedPosts.find((post) => post.id === input.id);
      const author = profiles.find((profile) => profile.id === post?.authorId);
      if (!author) {
        throw new Error("Author not found");
      }
      if (!post) {
        throw new Error("Post not found");
      }
      return {
        ...post,
        authorProfile: author,
      };
    }),

  // Get recent posts from the user's following list
  getRecentPosts: publicProcedure.query(() => {
    // Normally we would get the user id from the session
    const userId = 1;

    // Get the user's following list
    const userFollows = profiles.find(
      (profile) => profile.id === userId,
    )?.following;

    // Add the user to their own following list to see their own posts in the feed
    userFollows?.push(userId);

    // Filter posts by the user's following list
    const posts = simulatedPosts.filter((post) =>
      userFollows?.includes(post.authorId),
    );

    // Sort posts by createdAt
    const sortedPosts = posts.sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime(),
    );

    // Add author profile to each post, normally this would be joined at the query level
    const postsWithAuthor = sortedPosts.map((post) => {
      const author = profiles.find((profile) => profile.id === post.authorId);
      if (!author) {
        throw new Error("Author not found");
      }
      return {
        ...post,
        authorProfile: author ?? {},
      };
    });
    return postsWithAuthor;
  }),

  getUserPosts: publicProcedure
    .input(z.object({ userId: z.number() }))
    .query(({ input }) => {
      const posts = simulatedPosts.filter(
        (post) => post.authorId === input.userId,
      );
      const postsWithAuthor = posts.map((post) => {
        const author = profiles.find((profile) => profile.id === post.authorId);
        if (!author) {
          throw new Error("Author not found");
        }
        return { ...post, authorProfile: author };
      });
      return postsWithAuthor;
    }),
});
