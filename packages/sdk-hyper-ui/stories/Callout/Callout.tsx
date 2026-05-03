// Filename: Callout
// Created: ToanPS
// 29.01.2026

import { cn } from '../../lib/utils'
import { AlertCircle, Info, AlertTriangle, X } from 'lucide-react'
import { Button } from '../Button/Button'
import { ReactNode } from 'react'

export interface CalloutProps {
  className?: string
  variant?: 'neutral' | 'information' | 'warning' | 'error'
  title?: string
  description: string | ReactNode
  titleButton?: string
  type?: 'vertical' | 'horizontal'
  icon?: React.ReactNode
  contentClassName?: string
  isCenter?: boolean
  onClick?: () => void
}

/** Primary UI component for user interaction */
export const Callout = ({
  className,
  variant = 'neutral',
  title,
  description = 'Description',
  titleButton,
  type = 'horizontal',
  icon,
  contentClassName,
  isCenter,
  onClick,
}: CalloutProps) => {
  const iconVariants = {
    neutral: AlertCircle,
    information: Info,
    warning: AlertTriangle,
    error: AlertTriangle,
  }
  const bgVariants = {
    neutral: 'bg-callout-fill',
    information: 'bg-background-information',
    warning: 'bg-background-warning',
    error: 'bg-background-error',
  }
  const iconColorVariants = {
    neutral: 'text-text-secondary',
    information: 'text-icon-information',
    warning: 'text-icon-warning',
    error: 'text-icon-error',
  }

  const Icon = iconVariants[variant]

  return (
    <div
      className={cn(
        'px-4 py-3 rounded-lg bg-callout-fill min-w-[350px] max-w-[400px] flex  gap-3',
        bgVariants[variant],
        type === 'horizontal' ? 'flex-col' : 'items-center',
        className
      )}
    >
      <div className={cn('flex gap-2', contentClassName)}>
        <div className={cn(iconColorVariants[variant], isCenter ? 'leading-none' : 'shrink-0 mt-0.5')}>
          {icon ? icon : <Icon size={16} />}
        </div>
        <div className="w-full overflow-hidden">
          {title && (
            <div className="block mb-1 typo-ui-large-strong max-ipad:typo-ui-medium-strong truncate">
              {title}
            </div>
          )}
          <div className="typo-ui-medium max-ipad:typo-ui-small line-clamp-3">{description}</div>
        </div>
      </div>
      {titleButton && (
        <Button onClick={onClick} type="secondary" size="sm" className="ml-auto">
          {titleButton}
        </Button>
      )}
    </div>
  )
}
