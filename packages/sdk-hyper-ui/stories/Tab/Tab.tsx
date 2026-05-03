// Filename: Tab
// Created: ToanPS
// 29.01.2026


import { Tabs, TabsContent, TabsContents, TabsList, TabsTrigger } from '../../components/animate-ui/components/radix/tabs';
import { cn } from '../../lib/utils';


export interface TabProps {
  tabs: Array<{ value: string; label: React.ReactNode; content: React.ReactNode, count?: number }>;
  type?: 'default' | 'title';
  className?: string;
  currentTab?: string;
  onChangeTab?: (value: string) => void;
  contentClassName?: string;
  renderRightContent?: React.ReactNode | null;
  isAnimation?: boolean;
}

/** Primary UI component for user interaction */
export const Tab = ({
  tabs,
  type = 'default',
  className,
  currentTab,
  onChangeTab,
  renderRightContent,
  contentClassName,
  isAnimation = true,
}: TabProps) => {
  const isTitle = type === 'title';
  const styleType = {
    default: 'typo-ui-xlarge-strong max-ipad:typo-ui-medium-strong',
    title: 'typo-title-medium max-ipad:typo-title-small',
  }
  return (
    <div className={cn("flex w-full flex-col gap-4", className)}>
      <Tabs
        defaultValue={tabs[0]?.value}
        value={currentTab}
        onValueChange={onChangeTab}
        isAnimation={isAnimation}
      >

        <div className={cn('flex flex-col gap-3 md:flex-row md:items-center md:justify-between')}>
          <TabsList typeTitle={isTitle}>
            {tabs.map((tab, index) => (
              <TabsTrigger className={cn(styleType[type])} key={index} value={tab.value}>
                {tab.label}
                {Boolean(tab?.count) &&
                  <span className='flex items-start gap-0.5'>
                    {`(${tab.count})`}
                    <span className='text-static-brand text-[6px]'>
                      &#9679;
                    </span>
                  </span>}

              </TabsTrigger>
            ))}
          </TabsList>

          {renderRightContent}
        </div>

        <div className="shadow-none py-0">
          <TabsContents className={cn("py-4 text-tab-text-active", contentClassName)}>
            {tabs.map((tab, index) => (
              <TabsContent key={index} value={tab.value} className="flex flex-col gap-6">
                {tab.content}
              </TabsContent>
            ))}
          </TabsContents>
        </div>
      </Tabs>
    </div>

  );
};
