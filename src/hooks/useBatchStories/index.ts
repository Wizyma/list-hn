import { useQuery, useQueryClient } from "@tanstack/react-query";

import { fetchStory } from "$src/api/fetchStory";
import { STORY_QUERY_KEY } from "$src/constants";
import { StoryResponse } from "$src/models/api";

export function useBatchStories(ids?: number[]) {
  const { data, fetchStatus, status } = useQuery({
    queryKey: [STORY_QUERY_KEY, ids],
    queryFn: async (ctx) => {
      const keys = ctx.queryKey[1] as number[];
      return Promise.all(keys.map(fetchStory));
    },
    staleTime: 600000,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    cacheTime: 600000,
    enabled: Boolean(ids),
  });

  return {
    data: data,
    status: status === "error" ? status : fetchStatus,
  };
}

export function useBatchStoriesFromCache(ids?: number[]) {
  const client = useQueryClient();

  const stories = client.getQueryData<StoryResponse[]>([STORY_QUERY_KEY, ids]);

  if (stories?.length) {
    return stories;
  }

  return [];
}
