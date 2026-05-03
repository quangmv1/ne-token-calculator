
// Filename: Empty
// Created: ToanPS
// 29.01.2026



import { cn } from "../../lib/utils";
import Image from "next/image";
// import EmptyState from 'public/empty-state.png';
import { Button } from "../Button/Button";


export interface EmptyProps {
  className?: string;

  title?: string;
  isSection?: boolean; 
  description?: string;
  isBackground?: boolean;
  titleButton?: string;
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Empty = ({
  className,
  isBackground=false,
  title,
  isSection = false,
  description = 'Empty state description',
  titleButton,
  onClick
}: EmptyProps) => {
  return (
   <div className={cn('flex items-center flex-col w-full', isBackground && 'bg-background-base', className)}>
     <figure className={cn("mb-6", isSection && 'mb-4')}>
      <Image 
          width={0}
          height={0}
          src={"public/empty-state.png"} 
          className={cn("size-[160px] max-ipad:size-[120px]", isSection && 'size-[112px] max-ipad:size-[80px]')}
          alt="empty state image"
        />
     </figure>
      {title && 
      <span className={cn("typo-title-medium font-medium", isSection && 'typo-ui-large',
        'max-ipad:typo-title-xsmall'
      )}>
        {title}
      </span>
      }
      <div className={cn("typo-ui-large  mt-2", isSection && 'mt-1 typo-ui-medium', 
        'max-ipad:text-xsmall',
        'text-text-secondary')}>
        {description}
      </div>
      {titleButton && <Button size={isSection ? 'base' : 'lg'} className="mt-6" onClick={onClick}>
          {titleButton}
        </Button>
      }
   </div>
  );
};
