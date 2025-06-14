import { AvatarImage } from "@radix-ui/react-avatar";
import Link from "next/link";
import { Avatar, AvatarFallback } from "~/components/ui/avatar";
import type { ProfileData } from "~/types/profiles";

export default function UserTag({ user }: { user: ProfileData }) {
  return (
    <Link href={`/profile/${user.id}`} className="flex items-center gap-2">
      <Avatar>
        <AvatarImage src={user.profilePicture} alt={user.name} />
        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
      </Avatar>
      <p>{user.name}</p>
    </Link>
  );
}
