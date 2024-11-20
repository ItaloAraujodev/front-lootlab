import { Check, X } from "lucide-react";

interface IProps {
  check?: boolean;
  info: string;
}
function FeatureItem({ check, info }: IProps) {
  return (
    <div className="flex items-center gap-2 text-lg">
      {check ? (
        <Check className="text-green-500" />
      ) : (
        <X className="text-red-500" />
      )}
      <span>{info}</span>
    </div>
  );
}

export default FeatureItem;
