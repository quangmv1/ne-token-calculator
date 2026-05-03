// Filename: BoxForm
// Created: ToanPS
// 29.01.2026



import { cn } from "../../lib/utils";

interface BoxFormProps {
  status?: "error" | "success" | "warning" | "info";
  children?: React.ReactNode;
  className?: string;
  label?: string | React.ReactNode;
  id?: string;
  classNameContent?: string;
  statusMess?: string | React.ReactNode;

  isDisabled?: boolean;
  isBorder?: boolean;
}

export const BoxForm = ({
  status,
  children,
  className,
  label,
  id,
  classNameContent,
  statusMess,
  isDisabled,
  isBorder,
}: BoxFormProps) => {
  const statusVariants: Record<NonNullable<BoxFormProps["status"]>, string> = {
    error: "border-input-border-error",
    success: "border-green-500",
    warning: "border-yellow-500",
    info: "border-blue-500",
  };
  const statusTextVariants: {
    [key in NonNullable<BoxFormProps["status"]>]: string;
  } = {
    error: "text-text-error",
    success: "text-green-500",
    warning: "text-yellow-500",
    info: "text-blue-500",
  }
  return (
    <div
      className={cn(isDisabled && "opacity-50 pointer-events-none", className)}
    >
      {label && (
        <label htmlFor={id} className="text-text-label mb-1 block">
          {label}
        </label>
      )}
      <div
        className={cn(
          "bg-input-fill rounded-lg border border-transparent duration-200",
          isBorder && status && statusVariants[status],
          classNameContent
        )}
      >
        {children}
      </div>
      {statusMess && <div className={cn("mt-0.5", status && statusTextVariants[status])
      }>{statusMess}</div>}
    </div>
  );
};
