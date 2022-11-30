import { client } from "./client";

import { TopStoriesResponse, ZTopStoriesResponseSchema } from "$models/api";

export async function fetchTopStories() {
  try {
    const response = await client.get<TopStoriesResponse>(
      "/topstories.json?print=pretty"
    );

    return ZTopStoriesResponseSchema.parse(response.data);
  } catch (err) {
    console.log(`Something went wrong: ${err}`);
  }
}
