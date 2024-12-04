"use client";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import LayoutCard from "../CardLayout";
import { Textarea } from "@/components/ui/textarea";
import { useFormContext } from "react-hook-form";
import type { FormData } from "../schemas";
import { Form } from "@/components/Form";
import classNames from "classnames";
import ButtonPrevTab from "../Buttons/ButtonTab/buttonPrevTab";
import PublicButton from "../Buttons/PublicButton";

function CommentCard() {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormData>();

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
        <ButtonPrevTab />
        <PublicButton>Publicar</PublicButton>
      </CardFooter>
    </LayoutCard>
  );
}

export default CommentCard;
