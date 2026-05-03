// Filename: Input
// Created: ToanPS
// 29.01.2026

import { Check, Search, X } from "lucide-react";
import * as React from "react";
import { NumberFormatValues, NumericFormat } from "react-number-format";
import { cn } from "../../lib/utils"; // or your classNames utility
import { BoxForm } from "./BoxForm";

// Add missing utility
const isEmpty = (obj: object | null | undefined): boolean => {
  return !obj || Object.keys(obj).length === 0;
};

export interface InputProps {
  id?: string;
  type?: string;
  className?: string;
  contentClassName?: string;
  inputClassName?: string;
  sizeInput?: "48" | "40";

  searchBar?: boolean;
  label?: string | React.ReactNode;
  placeholder?: string;
  value?: string | number;

  isDisabled?: boolean;

  coverLeft?: React.ReactNode;
  coverRight?: React.ReactNode;
  validateValue?: Record<string, (value: string) => string>;
  isLineError?: boolean;

  isVerified?: boolean;

  // type area
  row?: number;

  //type format number
  maxDecimal?: number;
  customValidate?: (value: NumberFormatValues) => boolean;

  customMessage?: (type: string) => React.ReactNode;
  onChangeValue?: (value: string) => void;
}

const MAX_NUMBER = 100_000_000_000;

const userLocale = "en-US";

export const handleGetNumber = (
  valueNumber: string,
  thousandSeparator: string
) => {
  let value = valueNumber.replace(
    new RegExp(`\\${thousandSeparator}`, "g"),
    ""
  );
  value =
    value === detectedSeparator ? "0." : value.replace(detectedSeparator, ".");
  return value;
};

export const detectedSeparator = new Intl.NumberFormat(userLocale, {
  style: "decimal",
})
  .format(1.1)
  .substring(1, 2);

export const Input: React.FC<InputProps> = ({
  id,
  className,
  contentClassName,
  inputClassName,
  sizeInput = "40",
  label,
  type = "text",
  placeholder = "Placeholder",
  value,
  isDisabled,
  searchBar,
  validateValue,
  isLineError,
  isVerified,
  coverLeft,
  coverRight,

  // type area
  row,

  //type format number
  maxDecimal = 6,

  customValidate,
  customMessage,
  onChangeValue,
  ...props
}) => {
  // states
  const [errType, setErrType] = React.useState<string>("");

  const sizeVariants = {
    "40": "h-10 text-text-font-size-14",
    "48": "h-12 text-base max-ipad:h-10 max-ipad:text-text-font-size-14",
  };

  const thousandSeparator = React.useMemo(
    () => (detectedSeparator === "," ? "." : ","),
    []
  );

  // functions
  const handleChangeValue = (value: string | NumberFormatValues) => {
    const inputValue = typeof value === "string" ? value : value.formattedValue;
    onChangeValue && onChangeValue(inputValue);
    handleValidate(inputValue);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = handleGetNumber(e.currentTarget.value, thousandSeparator);

    if (Number.isNaN(value)) return;

    e.target.value = value;
    onChangeValue?.(value);
  };

  const handleClearInput = () => {
    onChangeValue && onChangeValue("");
  };

  const handleValidate = React.useCallback(
    (value: string) => {
      if (!validateValue || isEmpty(validateValue)) return;
      for (const callback of Object.values(validateValue)) {
        if (typeof callback === "function") {
          const response = callback(value);
          const isErr = Boolean(response);
          setErrType(response);
          if (isErr) return;
        }
      }
    },
    [validateValue]
  );

  const validateNumber = (value: NumberFormatValues) => {
    const { floatValue = 0, value: inputValue } = value;

    if (inputValue === ".") return false;

    return floatValue < MAX_NUMBER;
  };

  if (type === "format") {
    return (
      <BoxForm
        isDisabled={isDisabled}
        label={label}
        isBorder={isLineError}
        status={"error"}
        classNameContent={cn(
          "flex items-center w-full gap-2 px-3 bg-transparent",
          sizeVariants[sizeInput],
          contentClassName
        )}
        statusMess={customMessage && customMessage(errType)}
        className={className}
      >
        {coverLeft}
        <NumericFormat
          className={cn(
            "w-full h-full outline-none",
            "placeholder:text-input-text-placeholder placeholder:font-weight-regular", // styled placeholder
            inputClassName
          )}
          thousandSeparator=","
          decimalScale={maxDecimal}
          placeholder={placeholder}
          isAllowed={customValidate || validateNumber}
          // onValueChange={handleChange}
          onChange={handleChange}
          allowNegative={false}
          value={value}
          {...props}
        />
        {isVerified && (
          <div className="bg-icon-success size-4 rounded-full flex items-center justify-center shrink-0 text-black">
            <Check size={10} />
          </div>
        )}
        {coverRight}
      </BoxForm>
    );
  }
  if (type === "area") {
    return (
      <BoxForm
        isDisabled={isDisabled}
        label={label}
        isBorder={isLineError}
        status={"error"}
        classNameContent={cn("w-full p-4 py-3.5", contentClassName)}
        statusMess={customMessage && customMessage(errType)}
        className={className}
      >
        <textarea
          rows={row}
          id={id}
          placeholder={placeholder}
          autoComplete="off"
          className={cn(
            "w-full outline-none resize-none no-scrollbar",
            "placeholder:text-input-text-placeholder placeholder:font-weight-regular" // styled placeholder
          )}
          value={value}
          onChange={(event) => handleChangeValue(event.target.value)}
          {...props}
        />
      </BoxForm>
    );
  }

  return (
    <BoxForm
      isDisabled={isDisabled}
      label={label}
      isBorder={isLineError}
      status={"error"}
      classNameContent={cn(
        "flex items-center w-full gap-2 px-3",
        sizeVariants[sizeInput],
        contentClassName
      )}
      className={className}
      statusMess={customMessage && customMessage(errType)}
    >
      {coverLeft}

      {type === "number" ? (
        <NumericFormat
          value={value}
          className={cn(
            "w-full h-full outline-none",
            "placeholder:text-input-text-placeholder placeholder:font-weight-regular" // styled placeholder
          )}
          thousandSeparator=","
          decimalScale={maxDecimal}
          placeholder={placeholder}
          isAllowed={customValidate || validateNumber}
          onValueChange={handleChangeValue}
          allowNegative={false}
          {...props}
        />
      ) : (
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          autoComplete="off"
          className={cn(
            "w-full h-full outline-none ",
            "placeholder:text-input-text-placeholder placeholder:font-weight-regular" // styled placeholder
          )}
          value={value}
          onChange={(event) => handleChangeValue(event.target.value)}
          {...props}
        />
      )}

      {isVerified && (
        <div className="bg-icon-success size-4 rounded-full flex items-center justify-center shrink-0 text-black">
          <Check size={10} />
        </div>
      )}
      {searchBar &&
        (Boolean(value) ? (
          <button
            type="button"
            className="text-icon-secondary"
            onClick={handleClearInput}
          >
            <X size={20} />
          </button>
        ) : (
          <button type="button" className="text-icon-secondary">
            <Search size={20} />
          </button>
        ))}
      {coverRight}
    </BoxForm>
  );
};

Input.displayName = "Input";
