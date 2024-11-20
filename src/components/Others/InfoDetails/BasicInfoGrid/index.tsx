import BasicInfo from "../BasicInfo";

export default function BasicInfoGrid() {
  return (
    <div className="space-y-6 md:col-span-1">
      <BasicInfo info="ANALISTA" title="Adão e trainees" />
      <div className="grid grid-cols-2 gap-4">
        <BasicInfo title="NOTA" info="8" />
        <BasicInfo title="REDE" info="ETH" />
        <BasicInfo title="INVESTIMENTO" info="FREE" />
        <BasicInfo title="TOKEN" info="$GQ" />
      </div>
    </div>
  );
}
