interface IProps {
  title: string;
  info: string;
}
function MarketInfo({ title, info }: IProps) {
  return (
    <div className="flex justify-between text-lg">
      <span>{title}</span>
      <span>{info}</span>
    </div>
  );
}

export default MarketInfo;
