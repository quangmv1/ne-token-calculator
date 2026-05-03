// Filename: Badge
// Created: ToanPS
// 29.01.2026


import { cn } from "../../lib/utils";



export interface BadgeProps { 
  className?: string;

  children?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  variant?: "default" | 'hightlight' | "neutral" | "positive" | "danger" | "informative" | "warning" | "inverse";
}

export const Badge = ({
  children,
  size = "md",
  className,
  variant = "default",
}: BadgeProps) => {
  
  const sizeVariants = {
    sm: "min-w-4 h-4 typo-ui-3xsmall-strong px-1 py-0.5", 
    md: "min-w-5 h-5 typo-ui-2xsmall-strong px-1.5 py-0.5", 
    lg: "min-w-6 h-6 typo-ui-small-strong px-2 py-1",
  };
  const variantStyles = {
    hightlight: "bg-background-brand text-text-primary-ist",
    default: "bg-[#6F35D4] text-text-primary-sta",
    neutral: "bg-background-alpha text-text-primary",
    positive: "bg-background-success text-text-success",
    danger: "bg-background-error text-text-error",
    informative: "bg-background-information text-text-information",
    warning: "bg-background-warning text-text-warning",
    inverse: "bg-background-primary-inv text-text-primary-inv",
  };

  return (
    <div 
      className={cn(
        "inline-flex items-center justify-center rounded-full",
        variantStyles[variant],
        sizeVariants[size],
        !children && 'size-[6px] min-w-0 p-0',
        className
      )}
    >
      {children}
    </div>
  );
};