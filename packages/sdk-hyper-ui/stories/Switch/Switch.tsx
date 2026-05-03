// Filename: Switch
// Created: ToanPS
// 29.01.2026


import {
  Switch as SwitchPrimitive,
  SwitchThumb as SwitchThumbPrimitive,
  type SwitchProps as SwitchPrimitiveProps,
} from '../../components/animate-ui/primitives/base/switch';
import { cn } from '../../lib/utils';

type SwitchProps = SwitchPrimitiveProps & {
  pressedWidth?: number;
  isDisabled?: boolean;
  size?: 'md' | 'sm';
};

export const Switch = ({
  className,
  pressedWidth = 19,
  isDisabled,
  size = 'md',
  ...props
}: SwitchProps) => {
  const variantsSize = {
    sm: 'h-4 w-7',
    md: 'h-5 w-[34px]',
  }
  const variantsThumbSize = {
    sm: 'size-3',
    md: 'size-3.5',
  }
  return (
    <SwitchPrimitive
      className={cn(
        'relative peer flex px-px shrink-0 items-center justify-start rounded-full outline-none 0',
        'data-[checked]:bg-selection-fill-active data-[unchecked]:bg-selection-switch-fill data-[checked]:justify-end',
        'cursor-pointer duration-300',
        variantsSize[size],
        isDisabled && 'opacity-50 pointer-events-none',
        className,
      )}
      {...props}
    >
      <SwitchThumbPrimitive
        className={cn(
          'relative z-10 mx-0.5 bg-selection-switch-thumb pointer-events-none block rounded-full ring-0',
          variantsThumbSize[size],
        )}
        pressedAnimation={{ width: pressedWidth }}
      >
      </SwitchThumbPrimitive>
    </SwitchPrimitive>
  );
}
