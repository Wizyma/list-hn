import z from "zod";

export const ZTopStoriesResponseSchema = z.array(z.number());
export type TopStoriesResponse = z.infer<typeof ZTopStoriesResponseSchema>;

export const ZStoryResponseSchema = z.object({
  by: z.string(),
  id: z.number(),
  descendants: z.number().optional().nullable(),
  kids: z.array(z.number()).optional().nullable(),
  type: z.union([
    z.literal("job"),
    z.literal("story"),
    z.literal("comment"),
    z.literal("poll"),
    z.literal("pollopt"),
  ]),
  score: z.number(),
  time: z.number(),
  title: z.string(),
  text: z.string().optional().nullable(),
  url: z.string().optional().nullable(),
});
export type StoryResponse = z.infer<typeof ZStoryResponseSchema>;
