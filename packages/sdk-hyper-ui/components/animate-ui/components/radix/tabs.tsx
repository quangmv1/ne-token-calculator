import * as React from 'react';

import {
  Tabs as TabsPrimitive,
  TabsList as TabsListPrimitive,
  TabsTrigger as TabsTriggerPrimitive,
  TabsContent as TabsContentPrimitive,
  TabsContents as TabsContentsPrimitive,
  TabsHighlight as TabsHighlightPrimitive,
  TabsHighlightItem as TabsHighlightItemPrimitive,
  type TabsProps as TabsPrimitiveProps,
  type TabsListProps as TabsListPrimitiveProps,
  type TabsTriggerProps as TabsTriggerPrimitiveProps,
  type TabsContentProps as TabsContentPrimitiveProps,
  type TabsContentsProps as TabsContentsPrimitiveProps,
} from '../../../../components/animate-ui/primitives/radix/tabs';
import { cn } from '../../../../lib/utils';

type TabsProps = TabsPrimitiveProps;

function Tabs({ className, ...props }: TabsProps) {
  return (
    <TabsPrimitive
      className={cn('flex flex-col gap-2', className)}
      {...props}
    />
  );
}

type TabsListProps = TabsListPrimitiveProps & {
  typeTitle?: boolean;
};

function TabsList({ className, typeTitle, ...props }: TabsListProps) {
  return (
    <TabsHighlightPrimitive className={cn(!typeTitle && "absolute z-0 inset-0 border-b-2 bottom-0 border-tab-indicator-active")}>
      <TabsListPrimitive
        className={cn(
          'inline-flex h-9 w-fit items-center gap-4 justify-center',
          className,
        )}
        {...props}
      />
    </TabsHighlightPrimitive>
  );
}

type TabsTriggerProps = TabsTriggerPrimitiveProps;

function TabsTrigger({ className, ...props }: TabsTriggerProps) {
  return (
    <TabsHighlightItemPrimitive value={props.value} className="flex-1">
      <TabsTriggerPrimitive
        className={cn(
          "data-[state=active]:text-tab-text-active cursor-pointer hover:text-tab-text-active pb-1.5 text-tab-text-inactive inline-flex flex-1 items-center justify-center gap-1.5 whitespace-nowrap  duration-500 ease-in-out disabled:pointer-events-none disabled:opacity-50",
          className,
        )}
        {...props}
      />
    </TabsHighlightItemPrimitive>
  );
}

type TabsContentsProps = TabsContentsPrimitiveProps & {
  className?: string;
};

function TabsContents({ className, ...props }: TabsContentsProps) {
  return <TabsContentsPrimitive className={cn(className)} {...props} />;
}

type TabsContentProps = TabsContentPrimitiveProps;

function TabsContent({ className, ...props }: TabsContentProps) {
  return (
    <TabsContentPrimitive
      className={cn('flex-1 outline-none', className)}
      {...props}
    />
  );
}

export {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContents,
  TabsContent,
  type TabsProps,
  type TabsListProps,
  type TabsTriggerProps,
  type TabsContentsProps,
  type TabsContentProps,
};
