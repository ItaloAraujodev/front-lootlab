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
    <div className="relative flex h-full max-w-[800px] flex-col items-start gap-16 pl-[5%] pt-[86px]">
      <Image src={sectionTitle} alt="asdf" className="h-20 w-fit" />

      <div className="flex w-full flex-col gap-4 text-left font-normal leading-[130%]">
        <span className="text-5xl font-bold leading-[90%] text-lootlab-font-base 2xl:text-6xl">
          {sectionDescriptionTitle}
        </span>
        <h1 className="text-xl text-[#cecece] 2xl:text-2xl">
          {sectionDescription}
        </h1>
      </div>
    </div>
  );
}
