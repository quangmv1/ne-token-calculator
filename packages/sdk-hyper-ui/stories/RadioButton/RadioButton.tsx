// Filename: RadioButton
// Created: ToanPS
// 29.01.2026



"use client";

import React, { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export interface RadioButtonProps extends HTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  isChecked?: boolean;
  labelClassName?: string;
  isDisabled?: boolean;
  size?: "sm" | "md"
}

export const RadioButton = ({
  id,
  label,
  isChecked,
  labelClassName,
  isDisabled,
  size = "md",
  ...props
}: RadioButtonProps) => {
  const sizes = {
    sm: "size-4",
    md: "size-5",
  };
  return (
    <label
      htmlFor={id}
      className={twMerge(
        "flex items-center gap-2 cursor-pointer select-none group/radio",
        labelClassName,
        isDisabled && "pointer-events-none opacity-50"
      )}
    >
      <input type="radio" id={id} className="hidden" {...props} />
      <div
        className={twMerge(
          "size-6 shrink-0 flex justify-center items-center box-border rounded-full border-[1.5px] border-selection-border bg-selection-fill transition cursor-pointer",
          size && sizes[size],
          isChecked && "border-selection-fill-active bg-transparent p-0.5",
        )}
      >
        {isChecked && (
          <div
            className={twMerge(
              "size-full bg-static-brand border border-transparent rounded-full",
            )}
          />
        )}
      </div>
      {label && typeof label === "string" ? (
        <span className="capitalize">{label}</span>
      ) : (
        label
      )}
    </label>
  );
};

