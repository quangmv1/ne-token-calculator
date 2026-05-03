// Filename: ListGroup
// Created: ToanPS
// 29.01.2026

import { cn } from "../../lib/utils";
import { ListItem } from "../ListItem/ListItem";
// @ts-expect-error abc
import { FixedSizeList } from "react-window";

const listDemo = [
  {
    prefix: "prefix",
    suffix: "suffix",
    title: "List Item 1",
    sub: "This is the first item",
  },
  {
    prefix: "prefix",
    suffix: "suffix",
    title: "List Item 1",
    sub: "This is the first item",
  },
  {
    prefix: "prefix",
    suffix: "suffix",
    title: "List Item 1",
    sub: "This is the first item",
  },
  {
    prefix: "prefix",
    suffix: "suffix",
    title: "List Item 1",
    sub: "This is the first item",
  },
];

type ListProps = {
  className?: string;
  classNameItem?: string;
  list?: {
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    title?: string | React.ReactNode;
    sub?: string | React.ReactNode;
    id?: string;
  }[];
  isLoading?: boolean;
};

/** Primary UI component for user interaction */
export const ListGroup = ({
  className,
  classNameItem,
  isLoading,
  list = listDemo,
}: ListProps) => {
  const Row = ({
    index,
    style,
  }: {
    index: number;
    style: Record<string, string>;
  }) => {
    const item = list[index];

    if (!item) {
      return null;
    }

    return (
      <div key={index} style={style} className="list-item">
        <ListItem
          item={isLoading ? {} : item}
          isLoading={isLoading}
          key={index}
          className={classNameItem}
        />
      </div>
    );
  };

  return (
    <div className={cn("", className)}>
      <FixedSizeList
        height={544}
        width="100%"
        itemCount={list.length}
        itemSize={68}
        className="no-scrollbar"
      >
        {Row}
      </FixedSizeList>
      {/* {renderedList()} */}
    </div>
  );
};
