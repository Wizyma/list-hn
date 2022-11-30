import { useQuery } from "@tanstack/react-query";

import { fetchTopStories } from "$src/api/fetchTopStories";
import { TOP_STORIES_QUERY_KEY } from "$src/constants";
import { sliceToChunks } from "$src/utils";

export function useTopStories() {
  const { data, fetchStatus, status } = useQuery({
    queryKey: [TOP_STORIES_QUERY_KEY],
    queryFn: fetchTopStories,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    cacheTime: 60 * 24 * 1000,
    select: (data) => sliceToChunks(data ?? [], 10),
  });

  return {
    data: data,
    status: status === "error" ? status : fetchStatus,
  };
}
