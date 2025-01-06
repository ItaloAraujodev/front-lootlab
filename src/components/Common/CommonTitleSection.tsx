function CommonTitleSection({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="flex items-center gap-2 text-2xl font-bold text-lootlab-font-base">
      {children}
    </h1>
  );
}

export default CommonTitleSection;
