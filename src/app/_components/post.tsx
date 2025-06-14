import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import type { Post } from "~/types/posts";
import type { ProfileData } from "~/types/profiles";
import UserTag from "./user-tag";
import { Button } from "~/components/ui/button";
import { Heart, MessageCircle } from "lucide-react";
import Link from "next/link";
import { cn } from "~/lib/utils";

export default function Post({
  post,
}: {
  post: Post & { authorProfile: ProfileData };
}) {
  const userId = 1; // TODO: get user id from session

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex flex-row items-center gap-2">
          <UserTag user={post.authorProfile} />
          <p className="text-muted-foreground text-sm">
            {post.createdAt.toLocaleDateString()}
          </p>
        </CardTitle>
      </CardHeader>
      <CardContent>{post.content}</CardContent>
      <CardFooter>
        <Link href={`/post-details/${post.id}`}>
          <Button variant="ghost">
            <MessageCircle />
            {post.commentCount}
          </Button>
        </Link>
        <Button variant="ghost">
          <Heart
            className={cn(post.likeIds.includes(userId) && "fill-red-500")}
          />
          {post.likeCount}
        </Button>
      </CardFooter>
    </Card>
  );
}
