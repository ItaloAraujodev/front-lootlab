import classNames from "classnames";

interface IProps {
  title: string;
  className?: string;
}

export default function CommonTitle({ title, className, ...props }: IProps) {
  return (
    <h1
      className={classNames(
        className,
        "text-7xl font-black capitalize text-lootlab-font-base",
      )}
      {...props}
    >
      {title}
    </h1>
  );
}
