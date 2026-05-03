// Filename: Slider
// Created: ToanPS
// 29.01.2026



"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "../../lib/utils";

interface SliderProps
  extends React.ComponentProps<typeof SliderPrimitive.Root> {
  percentMarks?: number[];
  customMark?: string;
  isShowThumb?: boolean;
}

export function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  percentMarks = [],
  customMark,
  isShowThumb = true,
  onValueChange,
  ...props
}: SliderProps) {
  const _values = Array.isArray(value)
    ? value
    : Array.isArray(defaultValue)
      ? defaultValue
      : [min];

  return (
    <SliderPrimitive.Root
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      onValueChange={onValueChange}
      className={cn(
        "relative flex w-full touch-none items-center select-none ",
        "data-[disabled]:opacity-50",
        "data-[orientation=vertical]:h-full data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
        className
      )}
      {...props}
    >
      {/* Track + Range */}
      <SliderPrimitive.Track
        className={cn(
          "relative grow overflow-visible bg-slider-fill-inactive rounded-xs",
          "data-[orientation=horizontal]:h-1.5 data-[orientation=vertical]:w-1.5"
        )}
      >
        <SliderPrimitive.Range className="absolute rounded-l-xs bg-slider-fill-active data-[orientation=horizontal]:h-1.5 data-[orientation=vertical]:w-full" />

        {percentMarks.length > 0 && (
          <div className="cursor-pointer absolute top-1/2 inset-x-[0px] -translate-y-1/2 flex justify-between">
            {percentMarks.map((m, i) => (
              <button
                key={i}
                className={cn('first:opacity-0 last:opacity-0 size-1 rounded-full cursor-pointer transition bg-slider-tick-mark-active', customMark  )}
              />
            ))}
          </div>
        )}
      </SliderPrimitive.Track>

      {isShowThumb &&
        Array.from({ length: _values.length }, (_, i) => (
          <SliderPrimitive.Thumb
            key={i}
            className={cn(
              "cursor-pointer relative z-[10] block size-4 rounded-full border border-white bg-slider-fill-active",
              "shadow-sm transition hover:ring-4 hover:ring-slider-fill-active/30 focus-visible:ring-4 focus-visible:ring-slider-fill-active/40 focus-visible:outline-none",
            "disabled:pointer-events-none disabled:opacity-50"
          )}
        />
      ))}
    </SliderPrimitive.Root>
  );
}
