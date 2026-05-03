// Filename: ProgressBar
// Created: ToanPS
// 29.01.2026



import {
  Progress as ProgressPrimitive,
  ProgressIndicator as ProgressIndicatorPrimitive,
  type ProgressProps as ProgressPrimitiveProps,
} from '../../components/animate-ui/primitives/radix/progress';
import { cn } from '../../lib/utils';

import { motion } from 'motion/react';


type ProgressProps = ProgressPrimitiveProps & {
  isIndeterminate?: boolean;
};

/** Primary UI component for user interaction */
export const ProgressBar = ({ className, isIndeterminate, ...props}: ProgressProps) => {
  if(isIndeterminate) {
    return (
      <ProgressPrimitive
      className={cn(
        'bg-progress-fill relative h-1 w-full overflow-hidden rounded-full',
        className,
      )}
      {...props}
    >
      <motion.div
        className="bg-progress-indicator absolute left-0 top-0 h-full w-1/4"
        initial={{ x: '-100%' }}
        animate={{ x: '1000%' }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </ProgressPrimitive>
    )
  }

  return (
    <ProgressPrimitive
      className={cn(
        'bg-progress-fill relative h-1 w-full overflow-hidden rounded-full',
        className,
      )}
      {...props}
    >
      <ProgressIndicatorPrimitive className="bg-progress-indicator rounded-full h-full w-full flex-1" />
    </ProgressPrimitive>
  );
};
