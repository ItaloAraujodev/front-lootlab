import { Common } from "@/components/Common";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import useDeletePost from "@/hooks/useDeletePost";
import usePostStore from "@/stores/post.store";
import Toast from "@/tools/toast.tool";
import URLQuery from "@/tools/urlQuery";
import { useRouter, useSearchParams } from "next/navigation";
import { FaTrash } from "react-icons/fa6";

function ModalDeletePost() {
  const { post } = usePostStore();
  const searchParams = useSearchParams();
  const router = useRouter();
  const openModalDeletePost = searchParams.get("openModalDeletePost") as
    | "true"
    | "false";
  const { onDeletePost, status } = useDeletePost();

  return (
    <Dialog
      open={status === "pending" ? true : openModalDeletePost === "true"}
      onOpenChange={() => {
        router.push(
          URLQuery.addQuery([
            {
              key: "openModalDeletePost",
              value: openModalDeletePost !== "true",
            },
          ]),
        );
      }}
    >
      <DialogTrigger asChild>
        <Button className="bg-[#283563] font-bold text-white transition-all hover:bg-[#283563]/60">
          <FaTrash className="text-gray-400" />
        </Button>
      </DialogTrigger>
      <DialogContent className="border-none bg-lootlab-bg-main sm:max-w-[350px]">
        <DialogHeader className="">
          <DialogTitle className="text-3xl text-white">
            <span>{post?.title}</span>
          </DialogTitle>
          <DialogDescription className="text-base text-white">
            Você tem certeza que deseja deletar esse post? Essa ação é{" "}
            <span className="font-bold">IRREVERSÍVEL!</span>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              if (status !== "pending") {
                onDeletePost(post?.id);
              } else {
                Toast.info(
                  "Aguarde! Já existe uma exclusão de post em andamento.",
                );
              }
            }}
          >
            <Button
              disabled={status === "pending"}
              variant="link"
              type="submit"
              className="group flex gap-2 border-none shadow-none"
            >
              <Common.CommonLoading
                borderColor="lootlab-color-highlight"
                isLoading={status === "pending"}
              />
              {status === "pending" ? (
                <span className="text-white">Excluindo post...</span>
              ) : (
                <span className="text-red-500 group-hover:underline">
                  Deletar
                </span>
              )}
            </Button>
          </form>
          <Button
            // disabled={status === "pending"}
            onClick={() => {
              router.push(
                URLQuery.addQuery([
                  {
                    key: "openModalDeletePost",
                    value: openModalDeletePost !== "true",
                  },
                ]),
              );
            }}
            type="submit"
            className="bg-lootlab-color-highlight hover:bg-lootlab-hover-highlight"
          >
            Cancelar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ModalDeletePost;
