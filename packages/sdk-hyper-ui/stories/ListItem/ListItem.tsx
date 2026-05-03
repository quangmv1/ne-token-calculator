// Filename: ListItem
// Created: ToanPS
// 29.01.2026

import { cn } from "../../lib/utils";

type GridItemProps = {
  className?: string;
  item: {
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    title?: string | React.ReactNode;
    sub?: string | React.ReactNode;
    onClick?: () => void;
  };
  isLoading?: boolean;
};

/** Primary UI component for user interaction */
export const ListItem = ({
  className,
  item: {
    prefix,
    suffix,
    title = (
      <div className="flex items-center justify-between gap-2">
        <span>Text</span> <span> Text 2</span>
      </div>
    ),
    sub = (
      <div className="flex items-center justify-between gap-2">
        <span>Text</span> <span> Text 2</span>
      </div>
    ),
    onClick = () => {},
  },
  isLoading = false,
}: GridItemProps) => {
  if (isLoading) {
    return (
      <div className={cn("flex items-center gap-4", className)}>
        <div className="animate-pulse bg-background-alpha rounded-full h-10 w-10 shrink-0" />
        <div className="w-full">
          <div className="h-4 bg-background-alpha rounded w-3/4" />
          <div className="h-3 bg-background-alpha rounded w-1/2 mt-1" />
        </div>
        <div className="animate-pulse bg-background-alpha rounded-md h-5 w-10 shrink-0" />
      </div>
    );
  }
  return (
    <div className={cn("flex items-center gap-4", className)} onClick={onClick}>
      {prefix}
      <div className="w-full">
        <div className="block typo-ui-large-strong">{title}</div>
        <div className="block typo-ui-small text-text-secondary mt-0.5">
          {sub}
        </div>
      </div>
      {suffix}
    </div>
  );
};
