import { Cursor } from "$src/models/cursor";

export function sliceToChunks<T>(arr: T[], chunkSize: number) {
  const res = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    res.push(chunk);
  }

  return res.reduce<Cursor<T>[]>((prev, next, index, original) => {
    return prev.concat({
      nextCursor: original[index + 1]?.length ? index + 1 : null,
      currentCursor: index,
      data: next,
    });
  }, []);
}
