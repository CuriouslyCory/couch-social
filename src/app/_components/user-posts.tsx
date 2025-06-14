import { api, HydrateClient } from "~/trpc/server";
import Post from "./post";

export default async function UserPosts({ userId }: { userId: number }) {
  const posts = await api.post.getUserPosts({ userId });
  void api.post.getUserPosts.prefetch({ userId });

  return (
    <HydrateClient>
      <div className="flex flex-col gap-4">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </HydrateClient>
  );
}
