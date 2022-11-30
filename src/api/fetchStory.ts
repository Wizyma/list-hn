import { client } from "./client";

import { StoryResponse, ZStoryResponseSchema } from "$models/api";

export async function fetchStory(id: number) {
  try {
    const response = await client.get<StoryResponse>(
      `/item/${id}.json?print=pretty`
    );

    return ZStoryResponseSchema.parse(response.data);
  } catch (err) {
    console.log(`Something went wrong: ${err}`);
  }
}
