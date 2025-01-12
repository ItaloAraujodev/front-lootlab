import type { IPost } from "@/interfaces/interfaces";
import CardGames from "../CardPost";
import SkeletonPost from "@/components/Skeletons/SkeletonPost";

interface INFTPostListProps {
  posts?: IPost[];
  isLoading: boolean;
}

function NFTPostList({ isLoading, posts }: INFTPostListProps) {
  return (
    <div className="flex h-full w-full flex-wrap justify-center gap-4 md:justify-start">
      {!isLoading &&
        posts?.map((post) => <CardGames key={post.title} post={post} />)}
      {isLoading &&
        Array.from({ length: 20 }, (_, index) => index + 1).map((key) => (
          <SkeletonPost key={key} />
        ))}
    </div>
  );
}

export default NFTPostList;
