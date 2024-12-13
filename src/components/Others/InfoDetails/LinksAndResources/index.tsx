"use client";
import useCurrentPost from "@/hooks/useCurrentPost";
import LinkGame from "../LinkGame";
import getPlataformByUrl from "@/tools/getPlataformByUrl";

function LinksAndResources() {
  const { post } = useCurrentPost();
  return (
    <div className="rounded-lg border-[#1c2f4a] bg-[#132238] p-6">
      <h2 className="mb-6 font-semibold">DOCUMENTAÇÃO E LINKS</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {post?.links.map((link) => {
          return (
            <LinkGame
              link={link.url}
              key={link.url}
              plataform={getPlataformByUrl(link.url)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default LinksAndResources;
