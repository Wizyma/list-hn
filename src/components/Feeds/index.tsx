import { Feed } from "$components/Feed";
import { Loader } from "$components/Loader";
import { useBatchStoriesFromCache } from "$src/hooks/useBatchStories";

type Props = {
  ids: number[];
  isLoading?: boolean;
  currentCursor: number;
};

export const Feeds = ({ ids, isLoading, currentCursor }: Props) => {
  const stories = useBatchStoriesFromCache(ids);

  if (isLoading) {
    return <Loader size={10} />;
  }

  return (
    <div className="feeds">
      {stories?.map((story, index) => (
        <Feed
          rating={
            currentCursor === 0 ? index + 1 : currentCursor * 10 + (index + 1)
          }
          key={story!.id}
          feed={story!}
        />
      ))}
    </div>
  );
};
