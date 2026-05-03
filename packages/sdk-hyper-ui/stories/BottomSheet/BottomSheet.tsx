// Filename: BottomSheet
// Created: ToanPS
// 29.01.2026



import React from "react";
import { cn } from "../../lib/utils";

export interface BottomSheetProps {
  className?: string;
  
  heading?: React.ReactNode;
  content?: React.ReactNode;
  
}

/** Primary UI component for user interaction */
export const BottomSheet = ({
  className,

  heading,
  content,
 
}: BottomSheetProps) => {
  
  return (
    <div
      className={cn(
        "bg-background-cont-blur rounded-[20px] px-6 py-4 shadow-md w-screen",
        className
      )}
    >
      <div className="typo-title-xsmall text-center">
        {heading}
      </div>
      <div className="mt-4">
        {content || <div className="w-full border border-[#F0C43F] bg-[#F0C43F]/10 rounded-md h-[200px]">
          </div>}
      </div>
    </div>
  );
};
