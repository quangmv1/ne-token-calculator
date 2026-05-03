// Filename:  Toast
// Created: ToanPS
// 29.01.2026


import { cn } from "../../lib/utils";

export interface CalloutProps {
  className?: string;

  heading?: string;
  description?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  below?: React.ReactNode;
}

/** Primary UI component for user interaction */
export const Toast = ({
  className,
  suffix,
  prefix,
  below,
  heading,
  description,
}: CalloutProps) => {

  return (
    <div className={cn('w-auto md:w-[390px] p-3 rounded-xl shadow-md bg-toast-fill',
      className,
    )}>
      <div className="flex gap-3">
        {prefix}
        <div>
          {heading &&
            <div className="text-font-size-15">
              {heading}
            </div>
          }
          {description &&
            <div className="max-w-full line-clamp-2 typo-ui-xsmall text-text-secondary mt-0.5">
              {description}
            </div>}
        </div>
        {suffix}
      </div>
      {below &&
        <div className="mt-1.5">
          {below}
        </div>
      }
    </div>
  );
};
