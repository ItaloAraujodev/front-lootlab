import { Accordion, AccordionItem } from "@/components/ui/accordion";

interface IProps {
  children: React.ReactNode;
}

function LinkManager({ children }: IProps) {
  return (
    <Accordion type="single" collapsible className="space-y-4">
      <AccordionItem
        value="link"
        className="max-h-96 overflow-y-auto rounded-lg border border-lootlab-font-highlight"
      >
        {children}
      </AccordionItem>
    </Accordion>
  );
}

export default LinkManager;
