import classes from "./loader.module.css";

type Props = {
  size: number;
};

export const Loader = ({ size }: Props) => {
  const items = new Array(size).fill(1, 0, size);

  return (
    <div className={classes["loader-container"]}>
      {items.map((_, index) => (
        <span
          data-testid="skeleton"
          key={index}
          className={classes.skeleton}
        ></span>
      ))}
    </div>
  );
};
