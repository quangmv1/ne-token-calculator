// Filename: ThumbSymbol
// Created: ToanPS
// 29.01.2026

import { HTMLAttributes, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import Image from 'next/image'
import { cn } from '../../lib/utils'

export type TokenImageSize =
  | '12'
  | '16'
  | '20'
  | '24'
  | '32'
  | '40'
  | '48'
  | '56'
  | '64'
  | '80'
  | '96'

export interface ThumbSymbolProps extends HTMLAttributes<HTMLImageElement> {
  src?: string
  srcChain?: string
  alt?: string
  size?: TokenImageSize
  isCircle?: boolean
  icon?: React.ReactNode
  wrapperClassName?: string
  chainClassName?: string
  fetchPriority?: 'high' | 'low' | 'auto'
  loading?: 'eager' | 'lazy'
  decoding?: 'async' | 'auto' | 'sync'
}

export const ThumbSymbol = ({
  src,
  srcChain,
  alt,
  size = '20',
  className,
  isCircle,
  icon,
  wrapperClassName,
  chainClassName,
  ...props
}: ThumbSymbolProps) => {
  const [isUsingFallback, setIsUsingFallback] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isChainLoading, setIsChainLoading] = useState(true)

  const sizeMap = {
    '12': 12,
    '16': 16,
    '20': 20,
    '24': 24,
    '32': 32,
    '40': 40,
    '48': 48,
    '56': 56,
    '64': 64,
    '80': 80,
    '96': 96,
  }

  const sizes = {
    '12': 'size-3 thumb-name-12 rounded-[3px]',
    '16': 'size-4 max-ipad:size-3 thumb-name-16 rounded-[4px]',
    '20': 'size-5 max-ipad:size-4 thumb-name-20 rounded-[5px]',
    '24': 'size-6 max-ipad:size-5 thumb-name-24 rounded-[6px]',
    '32': 'size-8 max-ipad:size-6 thumb-name-32 rounded-[8px]',
    '40': 'size-10 max-ipad:size-8 thumb-name-40 rounded-[10px]',
    '48': 'size-12 max-ipad:size-10 thumb-name-48 rounded-[12px]',
    '56': 'size-14 max-ipad:size-12 thumb-name-56 rounded-[14px]',
    '64': 'size-16 max-ipad:size-14 thumb-name-64 rounded-[16px]',
    '80': 'size-[80px] max-ipad:size-16 thumb-name-80 rounded-[16px]',
    '96': 'size-[96px] max-ipad:size-[80px] thumb-name-96 rounded-[16px]',
  }

  const sizeChain = {
    '12': 'size-1.5 outline ',
    '16': 'size-2 max-ipad:size-1.5 outline-[1.5px]',
    '20': 'size-2.5 max-ipad:size-2 outline-[1.5px]',
    '24': 'size-3 max-ipad:size-2.5 outline-[2px]',
    '32': 'size-3 max-ipad:size-2.5 outline-[2px]',
    '40': 'size-4 max-ipad:size-3 outline-[2px]',
    '48': 'size-4 max-ipad:size-3 outline-[2px]',
    '56': 'size-5 max-ipad:size-4 outline-[2px]',
    '64': 'size-5 max-ipad:size-4 outline-[2px]',
    '80': 'size-6 max-ipad:size-5 outline-[2px]',
    '96': 'size-8 max-ipad:size-5 outline-[2px]',
  }

  const handleImageError = () => {
    setIsUsingFallback(true)
    setIsLoading(false)
  }

  const handleImageLoad = () => {
    setIsLoading(false)
  }

  const handleChainImageError = () => {
    setIsChainLoading(false)
    srcChain = '_'
  }

  const handleChainImageLoad = () => {
    setIsChainLoading(false)
  }

  const renderType = () => {
    if (isUsingFallback || !src || icon) {
      const firstChar = alt ? alt.charAt(0).toUpperCase() : '!'
      return (
        <div
          className={twMerge(
            'inline-block rounded-full object-cover bg-avatar-fill-yellow text-text-primary-inv pointer-events-none select-none',
            sizes[size],
            isCircle && 'rounded-full',
            className
          )}
        >
          <span className="flex items-center justify-center w-full h-full font-medium">
            {icon || firstChar}
          </span>
        </div>
      )
    }
    return (
      <>
        {isLoading && (
          <div
            className={twMerge(
              'absolute z-10 animate-pulse bg-background-alpha-bold',
              sizes[size],
              isCircle ? 'rounded-full' : '',
              className
            )}
          />
        )}
        <Image
          height={sizeMap[size]}
          width={sizeMap[size]}
          src={src}
          onError={handleImageError}
          onLoad={handleImageLoad}
          alt={alt || 'Token image'}
          className={twMerge(
            'inline-block object-cover transition-opacity duration-300',
            isLoading ? 'opacity-0' : 'opacity-100',
            sizes[size],
            isCircle && 'rounded-full',
            className
          )}
          {...props}
        />
      </>
    )
  }

  return (
    <div className={cn('relative', wrapperClassName)}>
      {renderType()}
      {srcChain && (
        <>
          {isChainLoading && (
            <div
              className={twMerge(
                'absolute -bottom-0.5 -right-0.5 z-10 animate-pulse bg-background-alpha-bold rounded-full outline outline-background-base',
                sizeChain[size],
                chainClassName
              )}
            />
          )}
          <Image
            height={sizeMap[size]}
            width={sizeMap[size]}
            src={srcChain}
            onError={handleChainImageError}
            onLoad={handleChainImageLoad}
            alt={alt || 'Chain image'}
            className={twMerge(
              'inline-block absolute -bottom-0.5 -right-0.5 rounded-full object-cover outline outline-background-base transition-opacity duration-300',
              isChainLoading ? 'opacity-0' : 'opacity-100',
              sizeChain[size],
              chainClassName
            )}
          />
        </>
      )}
    </div>
  )
}
