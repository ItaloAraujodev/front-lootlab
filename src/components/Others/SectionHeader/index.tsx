import Image from "next/image";

interface IProps {
  sectionTitle: any;
  sectionDescription?: string;
  sectionDescriptionTitle?: string;
}

export default function SectionHeader({
  sectionTitle,
  sectionDescription,
  sectionDescriptionTitle,
}: IProps) {
  return (
    <div className="relative flex h-full max-w-[700px] flex-col items-start gap-16 pl-[5%] pt-[86px]">
      <Image src={sectionTitle} alt="asdf" className="h-20 w-fit" />

      <div className="w-full text-left text-xl font-normal leading-[130%] text-lootlab-font-highlight">
        <span className="text-5xl font-bold leading-[90%] text-lootlab-font-base">
          {sectionDescriptionTitle}
        </span>
        <h1>{sectionDescription}</h1>
      </div>
    </div>
  );
}
