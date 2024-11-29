"use client";
import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import LayoutCard from "../CardLayout";
import { Textarea } from "@/components/ui/textarea";
import { useFormContext } from "react-hook-form";
import type { FormData } from "../schemas";
import { Form } from "@/components/Form";
import classNames from "classnames";

function CommentCard() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useFormContext<FormData>();

  const onsubmit = () => {};
  return (
    <LayoutCard>
      <CardHeader>
        <CardTitle className="text-lg sm:text-xl">Links e Parcerias</CardTitle>
        <CardDescription className="text-base text-[#8d8d8d]">
          Links importantes e parcerias do jogo.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <Form.Label htmlFor="comment" title="Comentário">
          <Textarea
            className={classNames({
              "border-red-500": errors.comment_author?.message,
            })}
            id="comment"
            {...register("comment_author")}
          />
          <Form.ErrorMessage error={errors.comment_author?.message} />
        </Form.Label>
      </CardContent>
      <CardFooter className="flex w-full justify-between">
        <Button
          variant="link"
          className="text-lootlab-font-base hover:bg-slate-700 hover:no-underline"
        >
          <ArrowLeft />
          Anterior
        </Button>
        <form onSubmit={handleSubmit(onsubmit)}>
          <Button
            type="submit"
            variant="default"
            className="bg-lootlab-color-highlight text-lootlab-font-base hover:bg-lootlab-hover-highlight hover:no-underline"
          >
            Publicar
          </Button>
        </form>
      </CardFooter>
    </LayoutCard>
  );
}

export default CommentCard;
