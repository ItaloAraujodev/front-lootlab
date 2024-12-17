interface IProps extends React.AllHTMLAttributes<HTMLDivElement> {
  title: string;
}
function MarketInfo({ title, children }: IProps) {
  return (
    <div className="flex justify-between text-lg">
      <span>{title}</span>
      {children}
    </div>
  );
}

export default MarketInfo;
