"use client";
import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import URLQuery from "@/tools/urlQuery";
import { useRouter } from "next/navigation";
import { formFields } from "../schemas/formFields";
import classNames from "classnames";

type TValue = "basic" | "financial" | "links" | "comment";

const triggers: { value: TValue; text: string }[] = [
  {
    value: "basic",
    text: "Básico",
  },
  {
    value: "financial",
    text: "Financeiro",
  },
  {
    value: "links",
    text: "Links",
  },
  {
    value: "comment",
    text: "Comentário",
  },
];

interface ITabsTriggersProps {
  methods: any; // FormProvider methods
}

function TabsTriggers({ methods }: ITabsTriggersProps) {
  const router = useRouter();
  return (
    <TabsList className="grid w-full grid-cols-4 bg-[#172944]">
      {triggers.map(({ value, text }) => {
        const IsErrorInCard = formFields[value].some((field) =>
          Object.keys(methods.formState.errors).includes(field),
        );
        return (
          <TabsTrigger
            onClick={() =>
              router.push(URLQuery.addQuery([{ key: "activatedTab", value }]))
            }
            key={value}
            value={value}
            className={classNames(
              "space-x-2 bg-[#172944] data-[state=active]:bg-lootlab-color-highlight",
              {
                "text-red-500 data-[state=active]:bg-red-500 data-[state=active]:text-lootlab-font-base":
                  IsErrorInCard,
              },
            )}
          >
            {text}
            {IsErrorInCard && " !"}
          </TabsTrigger>
        );
      })}
    </TabsList>
  );
}

export default TabsTriggers;
