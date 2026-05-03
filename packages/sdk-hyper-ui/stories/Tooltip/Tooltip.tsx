
// Filename: Tooltip
// Created: ToanPS
// 29.01.2026

import React, { useCallback, useRef, useState } from 'react';
import {
  TooltipBase,
  TooltipContent,
  TooltipTrigger,
} from "./TooltipBase";

interface BaseTooltipDemoProps {
  side?: 'left' | 'right' | 'top' | 'bottom';
  align?: 'start' | 'center' | 'end';
  sideOffset?: number;
  alignOffset?: number;
  collisionPadding?: number | Partial<Record<'top' | 'right' | 'bottom' | 'left', number>>;
  avoidCollisions?: boolean;
  delayDuration?: number;
  followCursor?: boolean;
  children?: React.ReactNode;
  childrenContent?: React.ReactNode;
  className?: string;
}

export function Tooltip({
  side,
  align,
  sideOffset,
  alignOffset,
  collisionPadding = 16, // Default padding away from screen edge
  avoidCollisions = true,
  delayDuration,
  followCursor = false,
  children,
  childrenContent,
  className
}: BaseTooltipDemoProps) {
  const [open, setOpen] = useState(false);
  const touchedRef = useRef(false);

  const handleTriggerClick = useCallback(() => {
    // Only toggle on touch/tap devices — skip if it was a mouse hover
    if (touchedRef.current) {
      setOpen((prev) => !prev);
      touchedRef.current = false;
    }
  }, []);

  const handleTouchStart = useCallback(() => {
    touchedRef.current = true;
  }, []);

  const handleOpenChange = useCallback((nextOpen: boolean) => {
    setOpen(nextOpen);
  }, []);

  return (
    <TooltipBase followCursor={followCursor} delayDuration={delayDuration} open={open} onOpenChange={handleOpenChange}>
      <TooltipTrigger asChild onClick={handleTriggerClick} onTouchStart={handleTouchStart}>
        {children}
      </TooltipTrigger>

      {childrenContent && (
        <TooltipContent
          side={side}
          align={align}
          sideOffset={sideOffset}
          alignOffset={alignOffset}
          collisionPadding={collisionPadding}
          avoidCollisions={avoidCollisions}
          className={className}
        >
          {childrenContent}
        </TooltipContent>
      )}
    </TooltipBase>
  );
}

