"use client";
import { Form } from "@/components/Form";
import { CardContent } from "@/components/ui/card";
import { AccordionContent, AccordionTrigger } from "@/components/ui/accordion";
import FieldListLinks from "./FieldListLinks";
import FieldListPartnership from "./FieldListPartnership";
import MarketCapAddresForm from "./MarketCapAddressForm";
import { useFormContext } from "react-hook-form";
import type { FormData } from "../schemas";
import AccordionManager from "../AccordionManager";

function LinksContent() {
  const {
    formState: { errors },
  } = useFormContext<FormData>();
  return (
    <CardContent className="space-y-2">
      <Form.Label>
        <AccordionManager error={errors?.links?.message}>
          <AccordionTrigger className="px-4">Links</AccordionTrigger>
          <AccordionContent>
            <FieldListLinks />
          </AccordionContent>
        </AccordionManager>
        <Form.ErrorMessage error={errors?.links?.message} />
      </Form.Label>
      <Form.Label>
        <AccordionManager error={errors?.partnership?.message}>
          <AccordionTrigger className="px-4">Parcerias</AccordionTrigger>
          <AccordionContent>
            <FieldListPartnership />
          </AccordionContent>
        </AccordionManager>
        <Form.ErrorMessage error={errors?.partnership?.message} />
      </Form.Label>
      <Form.Label>
        <AccordionManager error={errors?.market_link?.message}>
          <AccordionTrigger className="px-4">MarketCap Adress</AccordionTrigger>
          <AccordionContent>
            <MarketCapAddresForm />
          </AccordionContent>
        </AccordionManager>
        <Form.ErrorMessage error={errors?.market_link?.message} />
      </Form.Label>
    </CardContent>
  );
}

export default LinksContent;
