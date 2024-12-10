function CommonLoading({
  title,
  isLoading,
}: {
  title: string;
  isLoading: boolean;
}) {
  return isLoading ? (
    <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#0e192a75] border-b-lootlab-bg-main border-l-lootlab-bg-main ease-in-out" />
  ) : (
    title
  );
}

export default CommonLoading;
