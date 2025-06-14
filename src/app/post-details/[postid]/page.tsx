import { api, HydrateClient } from "~/trpc/server";
import Post from "~/app/_components/post";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Heart } from "lucide-react";
import { Button } from "~/components/ui/button";

export default async function PostDetails({
  params,
}: {
  params: Promise<{ postid: string }>;
}) {
  const { postid } = await params;
  const post = await api.post.getPost({ id: parseInt(postid) });
  void api.post.getPost.prefetch({ id: parseInt(postid) });

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <HydrateClient>
      <div className="flex flex-col items-start justify-center gap-4">
        <Post post={post} />
        <div className="flex flex-col items-start justify-center gap-4">
          {[1, 2, 3, 4].map((comment) => (
            <Card key={comment} className="w-full">
              <CardHeader>
                <CardTitle>SomeUser</CardTitle>
              </CardHeader>
              <CardContent>Comment {comment}</CardContent>
              <Button variant="ghost">
                <Heart />0
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </HydrateClient>
  );
}
