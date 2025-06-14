import Image from "next/image";
import UserPosts from "~/app/_components/user-posts";
import UserTag from "~/app/_components/user-tag";
import { api, HydrateClient } from "~/trpc/server";

export default async function Profile({
  params,
}: {
  params: Promise<{ userid: string }>;
}) {
  const { userid } = await params;
  const profile = await api.profile.getProfile({ id: parseInt(userid) });
  void api.profile.getProfile.prefetch({ id: parseInt(userid) });

  if (!profile) {
    return <div>Profile not found</div>;
  }

  return (
    <HydrateClient>
      <div className="flex flex-col items-start justify-center gap-4">
        <Image
          src={profile.bannerPicture}
          alt={profile.name}
          width={800}
          height={500}
          className="object-cover"
        />
        <div className="flex w-full flex-col items-start justify-start gap-4 border-b-1 px-6 py-4">
          <UserTag user={profile} />
          <p className="text-sm text-gray-200">{profile.bio}</p>
          <div className="flex items-start justify-center gap-4">
            <p className="text-sm text-gray-200">
              {profile.followers.length} followers
            </p>
            <p className="text-sm text-gray-200">
              {profile.following.length} following
            </p>
            <p className="text-sm text-gray-200">{profile.postCount} posts</p>
          </div>
        </div>
        <div className="px-6">
          <UserPosts userId={profile.id} />
        </div>
      </div>
    </HydrateClient>
  );
}
