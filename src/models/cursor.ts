export type Cursor<T> = {
  nextCursor: number | null;
  currentCursor: number;
  data: T[];
};
