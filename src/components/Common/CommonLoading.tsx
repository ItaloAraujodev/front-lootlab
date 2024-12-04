function CommonLoading({
  title,
  isLoading,
}: {
  title: string;
  isLoading: boolean;
}) {
  return isLoading ? (
    <span className="h-4 w-4 animate-spin rounded-full border-4 border-lootlab-bg-main border-b-transparent" />
  ) : (
    title
  );
}

export default CommonLoading;
