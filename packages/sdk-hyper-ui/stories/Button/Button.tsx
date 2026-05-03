// Filename: Button
// Created: ToanPS
// 29.01.2026

import { cn } from "../../lib/utils";
import { Loading } from "./Loading";

export interface ButtonProps {
  size?: "sm" | "md" | "base" | "lg" | "xl";
  type?:
    | "primary"
    | "secondary"
    | "secondaryStatic"
    | "ghostPrimary"
    | "ghostSecondary"
    | "inverseSecondary"
    | "inverseSecondaryStatic"
    | "long"
    | "short";
  children: React.ReactNode;
  className?: string;
  isFullWidth?: boolean;
  isLoading?: boolean;
  isDisabled?: boolean;
  isDisabledHover?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

/** Primary UI component for user interaction */
export const Button = ({
  size = "base",
  type = "primary",
  children,
  className,
  isFullWidth = false,
  isLoading,
  isDisabled,
  isDisabledHover,
  onClick,
  ...props
}: ButtonProps) => {
  const sizeButton = {
    sm: "min-h-6 py-0.5 px-2 typo-ui-xsmall-strong",
    md: "min-h-8 py-1.5 px-4 typo-ui-small-strong max-ipad:typo-ui-xsmall-strong min-h-6",
    base: "min-h-10 py-2 px-4 typo-ui-medium-strong max-ipad:typo-ui-small-strong min-h-8",
    lg: "min-h-12 py-3 px-5 typo-ui-large-strong max-ipad:typo-ui-medium-strong min-h-10",
    xl: "min-h-14 py-4 px-6 typo-ui-xlarge-strong max-ipad:typo-ui-large-strong min-h-12",
  };
  const typeButton = {
    primary: "bg-button-primary-fill text-button-primary-text",
    secondary: "bg-button-secondary-fill text-button-secondary-text",
    secondaryStatic: "bg-button-secondary-sta-fill text-button-secondary-sta-text",
    inverseSecondary:
      "bg-button-secondary-inv-fill text-button-secondary-inv-text",
    inverseSecondaryStatic:
      "bg-button-secondary-ist-fill text-button-secondary-ist-text",
    ghostPrimary: "text-button-ghost-primary-text",
    ghostSecondary:
      "hover:bg-misc-hover-base text-button-ghost-secondary-text hover:bg-misc-hover-base",
    long: "bg-button-long-fill text-button-long-text",
    short: "bg-button-short-fill text-button-short-text",
  };

  const hoverButton = {
    primary: "group-hover/btn:bg-misc-hover-bold",
    secondary: "group-hover/btn:bg-misc-hover-base",
    secondaryStatic: "group-hover/btn:bg-misc-hover-base",
    inverseSecondary: "group-hover/btn:bg-misc-hover-bold-sta",
    inverseSecondaryStatic: "group-hover/btn:bg-misc-hover-bold-sta",
    ghostPrimary: "group-hover/btn:bg-misc-hover-base",
    ghostSecondary: "group-hover/btn:bg-misc-hover-base",
    long: "bg-button-long-fill text-button-long-text",
    short: "bg-button-short-fill text-button-short-text",
  };

  const sizeLoading = {
    sm: 16,
    md: 16,
    base: 24,
    lg: 24,
    xl: 24,
  };
  return (
    <button
      onClick={onClick}
      type="button"
      className={cn(
        "rounded-full group/btn relative duration-300 cursor-pointer items-center justify-center font-medium transition-colors focus:outline-none",
        "overflow-hidden",
        sizeButton[size],
        typeButton[type],
        isFullWidth ? "w-full flex" : "inline-flex",
        isDisabled && "opacity-50 cursor-not-allowed",
        isLoading && "cursor-wait bg-button-disabled-fill",
        className
      )}
      disabled={isDisabled}
      {...props}
    >
      <div className={cn("relative z-20", isLoading ? "invisible" : "visible")}>
        {children || "Button"}
      </div>
      {isLoading ? (
        <div className="absolute top-0 left-0 right-0 bottom-0 z-1 size-full flex justify-center items-center">
          <Loading size={sizeLoading[size]} />
        </div>
      ) : (
        !isDisabledHover ? <span
          className={cn(
            "absolute top-0 left-0 right-0 bottom-0 duration-300",
            hoverButton[type]
          )}
        ></span> : null
      )}
    </button>
  );
};
