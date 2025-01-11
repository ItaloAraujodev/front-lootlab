interface IProps extends React.AllHTMLAttributes<HTMLDivElement> {
  title: string;
}

function MarketInfo({ title, children }: IProps) {
  return (
    <div className="flex items-center justify-between border-b border-white/10 py-4 first:pt-0 last:border-none last:pb-0">
      <h3 className="text-base font-medium uppercase tracking-wider text-white">
        {title}
      </h3>
      <span className="text-lg font-semibold text-white">{children}</span>
    </div>
  );
}

export default MarketInfo;
