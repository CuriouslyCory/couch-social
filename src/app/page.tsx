import { HydrateClient } from "~/trpc/server";
import RecentPosts from "./_components/recent-posts";
import MainHeader from "./_components/main-header";

export default async function Home() {
  return (
    <HydrateClient>
      <div className="w-full border-b-1 py-6">
        <MainHeader />
      </div>
      <div className="flex flex-col items-center gap-6 p-6">
        <RecentPosts />
      </div>
    </HydrateClient>
  );
}
