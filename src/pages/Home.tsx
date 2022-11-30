import { useCallback, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

import "./home.css";
import { Feeds } from "$components/Feeds";
import { useBatchStories } from "$hooks/useBatchStories";
import { useTopStories } from "$hooks/useTopStories";
import { Cursor } from "$models/cursor";

function Home() {
  const [cursor, setCursor] = useState<Cursor<number> | null>(null);
  const { data, status } = useTopStories();
  const { status: batchStoriesStatus } = useBatchStories(cursor?.data);

  const onPageChange = useCallback(
    ({ selected }: { selected: number }) => {
      if (data) {
        setCursor(data[selected]);
      }
    },
    [data]
  );

  useEffect(() => {
    if (!cursor && data?.length) {
      setCursor(data[0]);
    }
  }, [data]);

  return (
    <div className="App">
      <h1 className="title">HackerNews List</h1>
      <Feeds
        currentCursor={cursor?.currentCursor ?? 0}
        isLoading={status === "fetching" || batchStoriesStatus === "fetching"}
        ids={cursor?.data as number[]}
      />
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={onPageChange}
        pageRangeDisplayed={5}
        pageCount={data?.length ?? 0}
        previousLabel="<"
      />
    </div>
  );
}

export default Home;
