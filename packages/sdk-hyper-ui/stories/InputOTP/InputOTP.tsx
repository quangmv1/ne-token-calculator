// Filename: InputOTP
// Created: ToanPS
// 29.01.2026



import { cn } from "../../lib/utils";
import { BoxForm } from "../Input/BoxForm";
import { InputOTPBase, InputOTPGroup, InputOTPSlot } from "./InputOTPBase";
import { REGEXP_ONLY_DIGITS } from "input-otp";


interface InputOTPProps {
  className?: string;
  error?: string | React.ReactNode;
  onlyNumber?: boolean;
}

export function InputOTP( { className, error, onlyNumber }: InputOTPProps) {
  return (
    <BoxForm isBorder={false} className={cn(className)} classNameContent={cn('bg-transparent')} statusMess={error} status={'error'}>
      <InputOTPBase maxLength={6} pattern={onlyNumber ? REGEXP_ONLY_DIGITS : undefined}>
      <InputOTPGroup className="flex items-center gap-2">
        <InputOTPSlot index={0} aria-invalid={Boolean(error)}/>
        <InputOTPSlot index={1} aria-invalid={Boolean(error)}/>
        <InputOTPSlot index={2} aria-invalid={Boolean(error)}/>
        <InputOTPSlot index={3} aria-invalid={Boolean(error)}/>
        <InputOTPSlot index={4} aria-invalid={Boolean(error)}/>
        <InputOTPSlot index={5} aria-invalid={Boolean(error)}/>
      </InputOTPGroup>
      </InputOTPBase>
    </BoxForm>
  )
}
