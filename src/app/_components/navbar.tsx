import { Bell, HomeIcon, MessageCircle, Settings, User } from "lucide-react";
import Link from "next/link";

import { api, HydrateClient } from "~/trpc/server";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default async function Navbar() {
  const profile = await api.profile.getProfile({ id: 1 });
  void api.profile.getProfile.prefetch({ id: 1 });

  return (
    <HydrateClient>
      <nav className="ml-auto flex w-fit flex-col gap-6">
        <Link href="/">
          <Avatar className="h-12 w-12">
            <AvatarImage
              src={profile ? profile?.profilePicture : ""}
              alt={profile ? profile?.name : ""}
            />
            <AvatarFallback>CS</AvatarFallback>
          </Avatar>
        </Link>
        <Link href="/" className="flex w-fit items-center gap-2">
          <HomeIcon />
          <span className="hidden lg:block">Home</span>
        </Link>
        <Link
          href={`/profile/${profile ? profile?.id : ""}`}
          className="flex w-fit items-center gap-2"
        >
          <User />
          <span className="hidden lg:block">Profile</span>
        </Link>
        <Link href="/" className="flex w-fit items-center gap-2">
          <MessageCircle />
          <span className="hidden lg:block">Messages</span>
        </Link>
        <Link href="/" className="flex w-fit items-center gap-2">
          <Bell />
          <span className="hidden lg:block">Notifications</span>
        </Link>
        <Link href="/" className="flex w-fit items-center gap-2">
          <Settings />
          <span className="hidden lg:block">Settings</span>
        </Link>
      </nav>
    </HydrateClient>
  );
}
