import React from 'react'
import { IconClassList } from '@/constants/icon-name-list'
import { cn } from 'sdk-hyper-ui/lib/utils'
export type IconType = (typeof IconClassList)[number]

export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  name: (typeof IconClassList)[number]
}

const prefix = 'icon-'

export const Icon: React.FC<IconProps> = ({ name, className, ...rest }) => {
  return (
    <span
      className={cn(
        prefix + name,
        'leading-none inline-flex h-[1em] w-[1em] shrink-0 items-center justify-center align-middle',
        className
      )}
      {...rest}
    ></span>
  )
}
