import type React from "react";

function Tooltip({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative z-50">
      <span className="peer">{children}</span>
      <div className="absolute -bottom-10 left-1/2 hidden peer-hover:block">
        <div className="relative w-fit text-nowrap rounded-lg bg-slate-600 px-2 py-[2px]">
          <div className="absolute -left-[9px] -top-2 -z-10 h-0 w-0 -rotate-[37deg] transform rounded-t-sm border-b-[20px] border-l-[15px] border-r-[15px] border-b-slate-600 border-l-transparent border-r-transparent"></div>
          <span>Em breve</span>
        </div>
      </div>
    </div>
  );
}

export default Tooltip;
