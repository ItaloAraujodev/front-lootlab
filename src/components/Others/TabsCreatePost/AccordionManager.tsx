import { Accordion, AccordionItem } from "@/components/ui/accordion";
import classNames from "classnames";

interface IProps {
  children: React.ReactNode;
  error?: string;
}

function AccordionManager({ children, error }: IProps) {
  return (
    <Accordion type="single" collapsible className="space-y-4">
      <AccordionItem
        value="link"
        className={classNames(
          "max-h-96 overflow-y-auto rounded-lg border border-lootlab-font-highlight",
          {
            "border-red-500": error,
          },
        )}
      >
        {children}
      </AccordionItem>
    </Accordion>
  );
}

export default AccordionManager;
