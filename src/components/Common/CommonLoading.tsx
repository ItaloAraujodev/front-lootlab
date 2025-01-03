import classNames from "classnames";

function CommonLoading({
  title,
  isLoading,
  className,
  borderColor = "lootlab-bg-main",
}: {
  title?: string;
  isLoading: boolean;
  className?: string;
  borderColor?: "lootlab-bg-main" | "lootlab-color-highlight";
}) {
  return isLoading ? (
    <span
      className={classNames(
        "h-4 w-4 animate-spin rounded-full border-2 border-[#0e192a75] border-b-lootlab-bg-main border-l-lootlab-bg-main ease-in-out",
        {
          "border-[#193555] border-b-lootlab-color-highlight border-l-lootlab-color-highlight":
            borderColor === "lootlab-color-highlight",
        },
      )}
    />
  ) : (
    <span className={className}>{title}</span>
  );
}

export default CommonLoading;
