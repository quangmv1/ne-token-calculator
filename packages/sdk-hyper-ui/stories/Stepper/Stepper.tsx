// Filename: Stepper
// Created: ToanPS
// 29.01.2026



import { cn } from "../../lib/utils";
import { Check } from "lucide-react";
import { ProgressCircle } from "../ProgressCircle/ProgressCircle";

export const Demo = [
  {
    title: "Step 1",
    description: "This is the first step.",
  },
  {
    title: "Step 2",
    description: "This is the second step.",
  },
  {
    title: "Step 3",
    description: "This is the thirst step.",
  },
];

export interface StepperProps {
  className?: string;
  content?: {
    title?: string;
    description?: string;
  }[];
  currentStep?: number;
  toStep?: boolean;
  wasActive?: boolean;
}

/** Primary UI component for user interaction */
export const Stepper = ({ className, content = Demo, currentStep= 0, toStep }: StepperProps) => {

  const renderStatus = (index: number) => {
    if (currentStep > index) return <Check size={16} />;
    if (currentStep === index) return <ProgressCircle size={38} value={100} strokeWidth={2}/>;
    return index + 1;
  };
  
  
  if(toStep) return (
    <div className={cn( className)}>
      {content.map((step, index) => {
        return (
          <div key={index} className={cn("pb-5 last:pb-0 flex items-start gap-3 relative group/step")}>
            <div className={cn(
              "flex size-8 items-center justify-center bg-background-alpha-bold rounded-full typo-ui-small-strong relative",
             )}>
              {renderStatus(index)}
            </div>
            <span className={cn(
              "absolute top-2 left-4  w-[1px] bg-border-alpha group-last/step:hidden",
             'h-[calc(100%-32px)] top-[32px]',
            )}></span>
            <div className="pt-1.5">
              <div className="block typo-ui-small-strong">
                {step.title}
              </div>
              <p className="typo-ui-medium text-text-secondary mt-1.5">
                {step.description}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
  return (
    <div className={cn(className)}>
      {content.map((step, index) => {
        const isActive = index === currentStep
        return (
          <div key={index} className={cn("pb-5 last:pb-0 flex items-start gap-3 relative group/step", isActive && 'pb-9')}>
            <div className={cn(
              "flex w-8 items-center justify-center bg-background-alpha-bold rounded-full typo-ui-small-strong relative",
              !isActive ? 'bg-transparent' : ' h-8'
             )}>
              {isActive ? '#': <span className="size-2 bg-background-alpha rounded-full"></span>}
            </div>
            <span className={cn(
              "absolute top-2 left-4  w-[1px] bg-border-alpha group-last/step:hidden",
              isActive ?  'h-[calc(100%-32px)] top-[32px]' : 'h-[calc(100%-8px)]',
            )}></span>
            <div className={cn(!isActive ? '-mt-1': 'pt-1')}>
              <div className="block typo-ui-small-strong">
                {step.title}
              </div>
              <p className="typo-ui-medium text-text-secondary mt-1.5">
                {step.description}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  );
};
