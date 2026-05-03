// Filename: GridItem
// Created: ToanPS
// 29.01.2026



import { cn } from "../../lib/utils";
import { Mail } from "lucide-react";

type GridItemProps = {
  className?: string;
  icon?: React.ReactNode;
  label?: string;
  classNameLabel?: string;

  sizeBox?: string;
};

/** Primary UI component for user interaction */
export const GridItem = ({
  className,
  icon,
  label,
  classNameLabel,
  sizeBox,
}: GridItemProps) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-2 typo-ui-2xsmall",
        className
      )}
    >
      <div
        className={cn(
          "bg-background-alpha rounded-xl flex items-center justify-center p-3",
          sizeBox
        )}
      >
        {icon || <Mail/>}
      </div>
      {label && (
        <div className={cn("text-text-secondary", classNameLabel)}>{label}</div>
      )}
    </div>
  );
};
