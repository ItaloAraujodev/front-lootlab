import { FaBullhorn } from "react-icons/fa6";

function News() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-3 text-pretty rounded-lg border-[#1c2f4a] bg-[#132238] p-4 font-russo-one text-3xl italic md:col-span-2 md:text-5xl">
      <h1 className="flex items-center gap-2">
        <FaBullhorn />
        NEWS
      </h1>
      <h1 className="text-pretty">Em breve!</h1>
    </div>
  );
}

export default News;
