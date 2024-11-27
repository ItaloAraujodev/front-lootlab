import { Common } from "../../Common";

interface IProps {
  sectionTitle: string;
  sectionDescription?: string;
}

export default function SectionHeader({
  sectionTitle,
  sectionDescription,
}: IProps) {
  return (
    <div className="flex flex-col items-start gap-4 xl:w-2/5">
      <Common.Title title={sectionTitle} />
      <p className="w-full text-left text-xl font-light text-lootlab-font-base">
        {sectionDescription}
      </p>
    </div>
  );
}
