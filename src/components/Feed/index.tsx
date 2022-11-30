import classes from "./feed.module.css";

import { StoryResponse } from "$src/models/api";
import { dayjs } from "$src/utils/date";

type Props = {
  feed: StoryResponse;
  rating: number;
};

export const Feed = ({ feed, rating }: Props) => {
  const feedUrl = feed.url?.split("/")[2];

  return (
    <a
      href={feed.url ?? "#"}
      target="_blank"
      className={classes["feed__container"]}
    >
      <div className={classes["feed__header"]}>
        <span className={classes["feed__header-score"]}>{rating}</span>
        <p className={classes["feed__header-title"]}>{feed.title}</p>
        {feedUrl?.trim() && <span>({feedUrl})</span>}
      </div>
      <div className={classes["feed__content"]}>
        <span>{feed.score} points</span>
        <span>|</span>
        <span>by {feed.by}</span>
        <span>|</span>
        <span>{dayjs?.(dayjs?.(feed.time * 1000))?.fromNow()}</span>
        <span>|</span>
        <span>{feed.descendants} comments</span>
      </div>
    </a>
  );
};
