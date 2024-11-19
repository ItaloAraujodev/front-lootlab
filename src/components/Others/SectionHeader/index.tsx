import { Common } from "../../Common";

interface IProps {
  sectionTitle: string;
  sectionDescription: string;
}

export default function SectionHeader({
  sectionTitle,
  sectionDescription,
}: IProps) {
  return (
    <div className="flex w-2/5 flex-col items-start gap-4">
      <Common.CommonTitle title={sectionTitle} />
      <p className="text-left text-xl font-light text-lootlab-font-base">
        {sectionDescription}
      </p>
    </div>
  );
}
