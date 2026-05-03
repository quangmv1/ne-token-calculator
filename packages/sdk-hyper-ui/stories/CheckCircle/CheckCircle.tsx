// Filename: CheckCircle
// Created: ToanPS
// 29.01.2026

import {
  Checkbox as CheckboxPrimitive,
  CheckboxIndicator as CheckboxIndicatorPrimitive,
  type CheckboxProps as CheckboxPrimitiveProps,
} from "../../components/animate-ui/primitives/base/checkbox";
import { cn } from "../../lib/utils";

type CheckboxProps = CheckboxPrimitiveProps & {
  children?: React.ReactNode;
  className?: string;
  size?: 'md' | 'sm';
  sizeMark?: string;
  isDisabled?: boolean;
};

export const CheckCircle = ({
  className,
  children,
  size = 'md' ,
  sizeMark,
  isDisabled,
  ...props
}: CheckboxProps) => {


  const variantsSize ={
    md: 'size-6 typo-ui-2xsmall-strong',
    sm: 'size-4 typo-ui-3xsmall-strong',
  }
const variantSizeMark = {
    md: 'size-4.5',
    sm: 'size-3',
}

  return (
    <CheckboxPrimitive
      className={cn(
        "peer cursor-pointer border border-[1.5px] border-selection-border-sta rounded-full shrink-0 bg-selection-fill-sta flex items-center justify-center outline-none focus-visible:ring-0  transition-colors duration-500 [&[data-checked],&[data-indeterminate]]:bg-selection-fill-active [&[data-checked],&[data-indeterminate]]:text-selection-mark [&[data-checked],&[data-indeterminate]]:border-none ",
        "[&>*]:hidden [&[data-checked],&[data-indeterminate]]:[&>*]:block",
        isDisabled && "pointer-events-none opacity-50",
        variantsSize[size],
        className
      )}
      {...props}
    >
      {children ? (
        <span>{children}</span>
      ) : (
        <CheckboxIndicatorPrimitive
          className={cn(variantSizeMark[size], sizeMark)}
        />
      )}
    </CheckboxPrimitive>
  );
};
