interface IProps {
  title: string;
  info: string;
}
export default function BasicInfo({ info, title }: IProps) {
  return (
    <div className="rounded-lg border-[#1c2f4a] bg-[#132238] p-6">
      <h2 className="mb-4 font-semibold">{title}</h2>
      <div className="mb-4 text-2xl">{info}</div>
    </div>
  );
}
