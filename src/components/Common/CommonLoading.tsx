function CommonLoading({
  title,
  isLoading,
}: {
  title: string;
  isLoading: boolean;
}) {
  return isLoading ? (
    <span className="h-4 w-4 animate-spin rounded-full border-4 border-transparent border-b-lootlab-bg-main" />
  ) : (
    title
  );
}

export default CommonLoading;
