import { api, HydrateClient } from "~/trpc/server";
import Post from "./post";

export default async function RecentPosts() {
  const posts = await api.post.getRecentPosts();
  void api.post.getRecentPosts.prefetch();

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
