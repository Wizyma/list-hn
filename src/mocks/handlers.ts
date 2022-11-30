import { rest } from "msw";

import { BASE_URL } from "$src/constants";
import { StoryResponse, TopStoriesResponse } from "$src/models/api";

export const handlers = [
  rest.get<TopStoriesResponse>(
    `${BASE_URL}/topstories.json?print=pretty`,
    (req, res, ctx) => {
      return res(
        // Respond with a 200 status code
        ctx.status(200),
        ctx.json([
          33786474, 33787218, 33785631, 33786773, 33783504, 33785904, 33784549,
          33773135, 33785614, 33775052, 33782010, 33785870, 33774770, 33782585,
          33782946, 33763127, 33784271, 33762239, 33774514, 33784432,
        ])
      );
    }
  ),

  rest.get<StoryResponse, { id: string }>(
    `${BASE_URL}/item/:id`,
    (req, res, ctx) => {
      const { id } = req.params;
      const numberId = parseInt(id.split(".")[0]);

      if (numberId) {
        return res(
          ctx.status(200),
          ctx.json({
            by: "dhouston",
            descendants: 71,
            id: numberId,
            kids: [9224],
            score: 104,
            time: 1175714200,
            title: "My YC app: Dropbox - Throw away your USB drive",
            type: "story",
            url: "http://www.getdropbox.com/u/2/screencast.html",
          })
        );
      }
    }
  ),
];
