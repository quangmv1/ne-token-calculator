// Filename: Card
// Created: ToanPS
// 29.01.2026

import { cn } from "../../lib/utils";

export interface BadgeProps { 
  className?: string;
  children?: React.ReactNode;
  isSelected?: boolean;
}

export const Card = ({
  className,
  children,
  isSelected
  
}: BadgeProps) => {

  return (
    <div className={cn(
      'bg-card-fill rounded-xl p-4 border border-transparent',
      isSelected && 'border-border-active',
      className
    )}>
      {children || <div className="block h-[200px] w-[300px] flex items-center justify-center text-[#f0c43f] border-[#f0c43f] bg-[#f0c43f]/10 rounded-sm">
        Main Content
        </div>}
    </div>
  );
};