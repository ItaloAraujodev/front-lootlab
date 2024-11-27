import classNames from "classnames";

interface IProps {
  title: string;
  className?: string;
}

export default function Title({ title, className, ...props }: IProps) {
  return (
    <h1
      className={classNames(
        className,
        "text-5xl font-black capitalize text-lootlab-font-base sm:text-6xl md:text-7xl",
      )}
      {...props}
    >
      {title}
    </h1>
  );
}
