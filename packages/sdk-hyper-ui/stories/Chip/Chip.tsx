// Filename: Chip
// Created: ToanPS
// 29.01.2026



import { cn } from "../../lib/utils";
import { ChevronDown } from 'lucide-react';

/**
 * Props for the Chip component
 * @property {string} [className] - Additional CSS classes to apply
 * @property {React.ReactNode} [children] - Content to display inside the chip
 * @property {'enabled' | 'lv1' | 'lv2' | 'lv3'} [type] - Visual style variant of the chip
 *   - enabled: bg: transparent, color: #0F0F0F, border: #0000000d
 *   - lv1: bg: transparent, color: #0F0F0F, border: #1A1A1A
 *   - lv2: bg: #0000001a, border: transparent, color: #0F0F0F
 *   - lv3: bg: #383838, color: #FFD60A, border: #383838,
 *   - alpha: bg: #0000000d, color: #0F0F0F, border: #0000000d
 * @property {"24" | "32" | "40" | "48"} [size] - Height size of the chip in pixels
 * @property {boolean} [isIconDown] - Whether to show a chevron down icon
 * @property {() => void} [onClick] - Click handler function
 */
export interface BadgeProps {
  className?: string;
  children?: React.ReactNode;
  type?: 'enabled' | 'lv1' | 'lv2' | 'lv3' | 'alpha';
  size?: "16" | "24" | "32" | "40" | "48";
  isIconDown?: boolean;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const Chip = ({
  className,
  size = "32",
  type = 'enabled',
  children,
  isIconDown,
  onClick,
  ...props

}: BadgeProps) => {

  const sizeVariants = {
    "16": "h-4 px-1.5 typo-ui-3xsmall-strong",
    "24": "h-6 px-1.5 py-1 typo-ui-xsmall-strong",
    "32": "h-8 px-2 typo-ui-small-strong",
    "40": "h-10 px-2 typo-ui-medium-strong",
    "48": "h-12 px-3 typo-ui-lg-strong",
  };

  const typeVariants = {
    enabled: "border-border-alpha-bold text-chip-text hover:bg-misc-hover-subtle",
    lv1: "border-chip-border-active text-chip-text hover:bg-misc-hover-subtle",
    lv2: "bg-chip-fill",
    lv3: 'border-background-tertiary-active text-text-brand bg-background-tertiary-active hover:bg-misc-hover-base',
    alpha: "border-0 text-chip-text bg-background-alpha hover:bg-misc-hover-subtle",
  };

  return (
    <div
      className={cn(
        'flex items-center border border-transparent rounded-full duration-300',
        typeVariants[type],
        sizeVariants[size],
        className
      )}
      onClick={onClick}
      {...props}
    >
      {children || 'Label Chip Demo'}
      {isIconDown &&
        <ChevronDown className="w-4 h-4 text-icon-secondary" />
      }
    </div>
  );
};