// Filename: Popover
// Created: ToanPS
// 29.01.2026

import { useEffect, useState } from "react";
import { PopoverBase, PopoverContent, PopoverTrigger } from "./PopoverBase";

interface PopoverProps {
  side?: "top" | "bottom" | "left" | "right";
  sideOffset?: number;
  align?: "start" | "center" | "end";
  alignOffset?: number;
  childrenContent?: React.ReactNode;
  children?: React.ReactNode;
  contentClassName?: string;
  isHoverable?: boolean;
}

export const Popover = ({
  side,
  sideOffset,
  align,
  alignOffset,
  children,
  childrenContent,
  contentClassName,
  isHoverable,
}: PopoverProps) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const handleClose = () => {
      const isMobile = window.innerWidth < 768;
      if (isMobile) {
        setOpen(false);
      }
    };

    window.addEventListener("scroll", handleClose, true);
    window.addEventListener("popstate", () => setOpen(false));

    return () => {
      window.removeEventListener("scroll", handleClose, true);
      window.removeEventListener("popstate", () => setOpen(false));
    };
  }, [open]);

  return (
    <PopoverBase open={open} onOpenChange={setOpen}>
      <div
        onMouseEnter={() => isHoverable && setOpen(true)}
        onMouseLeave={() => isHoverable && setOpen(false)}
      >
        <PopoverTrigger className="cursor-pointer">{children}</PopoverTrigger>
        <PopoverContent
          side={side}
          sideOffset={sideOffset}
          align={align}
          alignOffset={alignOffset}
          className={contentClassName}
        >
          {childrenContent || (
            <div className="size-[200px] flex items-center justify-center bg-[#F0C43F]/10 border border-[#F0C43F] rounded-sm">
              {" "}
              Slot
            </div>
          )}
        </PopoverContent>
      </div>
    </PopoverBase>
  );
};
