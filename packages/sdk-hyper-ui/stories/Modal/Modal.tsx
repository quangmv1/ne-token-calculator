// Filename: Modal
// Created: ToanPS
// 29.01.2026

import React, { useCallback, useEffect } from 'react'
import { Button } from '../Button/Button'
import { cn } from '../../lib/utils'

// ─── Icon Components ────────────────────────────────────────────────────────────

interface IconButtonProps {
  onClick?: () => void
  'aria-label': string
  children: React.ReactNode
}

const IconButton = ({ onClick, 'aria-label': ariaLabel, children }: IconButtonProps) => (
  <button
    type="button"
    onClick={onClick}
    aria-label={ariaLabel}
    className="cursor-pointer bg-transparent border-none p-0 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-border-alpha-subtle"
  >
    {children}
  </button>
)

const ArrowBackIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M20.9999 12.0038C20.9999 12.418 20.6642 12.7538 20.2499 12.7538L5.26681 12.7538L9.80112 17.7445C10.0815 18.0485 10.0631 18.523 9.76003 18.8043C9.45696 19.0856 8.98398 19.0672 8.7036 18.7631L3.33129 12.8526C2.88958 12.3736 2.88948 11.6343 3.33106 11.1551L8.70347 5.24084C8.98376 4.9367 9.45674 4.91812 9.75988 5.19932C10.063 5.48053 10.0816 5.95504 9.80126 6.25917L5.26624 11.2538L20.2499 11.2538C20.6642 11.2538 20.9999 11.5896 20.9999 12.0038Z"
      fill="var(--button-ghost-secondary-icon)"
    />
  </svg>
)

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M4.21869 18.7205C3.9258 19.0134 3.9258 19.4882 4.21869 19.7811C4.51159 20.074 4.98646 20.074 5.27935 19.7811L11.9999 13.0605L18.7205 19.7811C19.0134 20.074 19.4883 20.074 19.7812 19.7811C20.0741 19.4882 20.0741 19.0134 19.7812 18.7205L13.0606 11.9999L19.7811 5.27935C20.074 4.98646 20.074 4.51159 19.7811 4.21869C19.4882 3.9258 19.0134 3.9258 18.7205 4.21869L11.9999 10.9392L5.27941 4.21869C4.98651 3.9258 4.51164 3.9258 4.21875 4.21869C3.92585 4.51159 3.92585 4.98646 4.21875 5.27935L10.9393 11.9999L4.21869 18.7205Z"
      fill="var(--button-ghost-secondary-icon)"
    />
  </svg>
)

// ─── Constants ──────────────────────────────────────────────────────────────────

const SIZE_CLASSES = {
  small: 'max-w-[384px]',
  base: 'max-w-[512px]',
  large: 'max-w-[1200px]',
} as const

// ─── Types ──────────────────────────────────────────────────────────────────────

export interface ModalProps {
  size?: 'small' | 'base' | 'large'
  className?: string

  heading?: React.ReactNode
  description?: React.ReactNode
  content?: React.ReactNode
  onClickBack?: () => void
  onClickClose?: () => void
  onClickSecondary?: () => void
  onClickPrimary?: () => void

  prefix?: React.ReactNode
  suffix?: React.ReactNode
  titleSecondary?: string
  titlePrimary?: string
  isShowPrefix?: boolean
  isShowSuffix?: boolean
}

// ─── Component ──────────────────────────────────────────────────────────────────

/** Primary UI component for user interaction */
export const Modal = ({
  size = 'base',
  className,

  heading,
  description,
  content,

  // Deprecated props (backward compatibility)
  prefix,
  suffix,
  titleSecondary,
  titlePrimary,
  isShowPrefix = false,
  isShowSuffix = false,

  onClickBack,
  onClickClose,
  onClickSecondary,
  onClickPrimary,
}: ModalProps) => {
  // Resolve deprecated → new props
  const resolvedHeaderLeft =  prefix
  const resolvedHeaderRight =  suffix
  const resolvedSecondaryLabel = titleSecondary
  const resolvedPrimaryLabel = titlePrimary
  const showBackButton =  isShowPrefix
  const showCloseButton =  isShowSuffix

  const isHeaderVisible = showBackButton || showCloseButton || Boolean(heading)
  const isFooterVisible = Boolean(resolvedSecondaryLabel) || Boolean(resolvedPrimaryLabel)

  // Close on Escape key
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClickClose?.()
      }
    },
    [onClickClose],
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={typeof heading === 'string' ? heading : undefined}
      className={cn(
        'bg-background-alpha blur-thin p-6 rounded-2lg shadow-md border-[1.5px] border-border-alpha-subtle',
        SIZE_CLASSES[size],
        className,
      )}
    >
      {/* Header */}
      {isHeaderVisible && (
        <div className="flex items-center justify-between gap-2 mb-4">
          {showBackButton &&
            (resolvedHeaderLeft || (
              <IconButton onClick={onClickBack} aria-label="Go back">
                <ArrowBackIcon />
              </IconButton>
            ))}

          {heading && <div className="text-xl">{heading}</div>}

          <div>
            {showCloseButton &&
              (resolvedHeaderRight || (
                <IconButton onClick={onClickClose} aria-label="Close modal">
                  <CloseIcon />
                </IconButton>
              ))}
          </div>
        </div>
      )}

      {/* Description */}
      {description && (
        <div className="text-sm text-text-secondary">{description}</div>
      )}

      {/* Content */}
      <div className="mt-5">
        {content || (
          <div className="h-40 border-[#f0c43f] border bg-[#f0c43f]/10 w-full rounded-lg flex items-center justify-center text-brand">
            Custom Content
          </div>
        )}
      </div>

      {/* Footer */}
      {isFooterVisible && (
        <div className="mt-auto pt-8 flex items-center gap-2 w-full">
          {resolvedSecondaryLabel && (
            <Button onClick={onClickSecondary} isFullWidth type="secondary" size="lg">
              {resolvedSecondaryLabel}
            </Button>
          )}
          {resolvedPrimaryLabel && (
            <Button onClick={onClickPrimary} isFullWidth size="lg">
              {resolvedPrimaryLabel}
            </Button>
          )}
        </div>
      )}
    </div>
  )
}
