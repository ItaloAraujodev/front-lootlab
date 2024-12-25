"use client";
import usePostStore from "@/stores/post.store";

function Commentary() {
  const { post } = usePostStore();
  return (
    <div className="h-[23rem] overflow-y-auto rounded-lg border-[#1c2f4a] bg-[#132238] p-6 md:col-span-2">
      <div className="h-full">
        <h2 className="mb-4 font-semibold">COMENTÁRIO</h2>
        <p className="text-lg italic leading-relaxed">
          {post?.comment_author || "Sem comentários"}
        </p>
      </div>
    </div>
  );
}

export default Commentary;
