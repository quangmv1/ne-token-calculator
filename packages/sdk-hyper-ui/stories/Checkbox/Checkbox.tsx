// Filename: Checkbox
// Created: ToanPS
// 29.01.2026

import {
  Checkbox as CheckboxPrimitive,
  CheckboxIndicator as CheckboxIndicatorPrimitive,
  type CheckboxProps as CheckboxPrimitiveProps,
} from '../../components/animate-ui/primitives/base/checkbox';
import { cn } from '../../lib/utils';


type CheckboxProps = CheckboxPrimitiveProps &
  {
    className?: string;
    size?: 'md' | 'sm';
    sizeMark?: string;
    isDisabled?: boolean;
  };

export const Checkbox = ({
  className,
  size = 'md' ,
  sizeMark,
  isDisabled,
  ...props
}: CheckboxProps) => {

  const variantsSize ={
    md: 'size-6',
    sm: 'size-4 rounded-[5px]',
  }
const variantSizeMark = {
    md: 'size-4.5',
    sm: 'size-3',
}

  return (
    <CheckboxPrimitive
      className={cn(
        'peer cursor-pointer border border-[1.5px] border-selection-border-sta rounded-md shrink-0 bg-selection-fill flex items-center justify-center outline-none focus-visible:ring-0  transition-colors duration-500 [&[data-checked],&[data-indeterminate]]:bg-selection-fill-active [&[data-checked],&[data-indeterminate]]:text-selection-mark [&[data-checked],&[data-indeterminate]]:border-none',
        isDisabled && 'pointer-events-none opacity-50',
        variantsSize[size],
        className
      )}
      {...props}
    >
      <CheckboxIndicatorPrimitive
        className={cn(variantSizeMark[size], sizeMark)}
      />
    </CheckboxPrimitive>
  );
}
