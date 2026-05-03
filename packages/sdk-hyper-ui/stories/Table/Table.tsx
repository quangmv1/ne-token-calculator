// Filename: Table
// Created: ToanPS
// 29.01.2026

"use client";

import { Empty } from "../Empty/Empty";
import { cn } from "../../lib/utils";
import get from "lodash/get";

export type ColumnType = {
  title: React.ReactNode;
  key: string;
  width?: number;
  align?: string;
  hide?: boolean;
  loading?: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render?: (value?: any, item?: any) => React.ReactNode;
};

interface TableProps {
  columns?: ColumnType[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dataSource?: any[];
  className?: string;
  classNameRow?: string;
  classNameItem?: string;
  classNameTogether?: string;
  classNameHeader?: string;
  isLoading?: boolean;
  isEmpty?: boolean;
  titleEmpty?: string;
  subEmpty?: string;
  classNameTable?: string;
  onClickRow?: (row: any) => void;
}

const columnsDefault: ColumnType[] = [
  {
    title: "Title",
    key: "price",
  },
  {
    title: "Title",
    key: "floorDiffer",
  },
  {
    title: "Title",
    key: "exp",
  },
  {
    title: "Title",
    key: "from",
  },
  {
    title: "Title",
    key: "action",
  },
];

const dataSourceDefault = Array.from({ length: 5 }).map((_, idx) => ({
  price: "-",
  floorDiffer: "-",
  exp: "-",
  from: "-",
  action: "-",
}));

export const Table = ({
  columns = columnsDefault,
  dataSource = dataSourceDefault,
  classNameRow,
  classNameItem,
  classNameTogether,
  classNameHeader,
  isLoading,
  className,
  isEmpty,
  titleEmpty,
  subEmpty,
  classNameTable,
  onClickRow,
}: TableProps) => {

  if (isLoading) {
    const skeletonRows = Array.from({ length: 4 });
    return (
      <table className={cn("w-full relative table-fixed max-phone:table-auto", className)}>
        <thead>
          <tr>
            {columns.map((col) => {
              if (col?.hide) return null;
              return (
                <th
                  key={col.key}
                  style={{ width: `${col.width}%` }}
                  className={cn(
                    "pb-4 pt-0 first:pl-0 last:pr-0 px-3 text-left text-text-tertiary text-sm font-light",
                    classNameTogether,
                    classNameHeader,
                    isLoading && "first:ps-0 last:pe-0"
                  )}
                >
                  <div className={cn(col.align && `justify-${col.align}`, "flex items-center")}>
                    {col.title}
                  </div>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {skeletonRows.map((_, rowIdx) => (
            <tr key={rowIdx} className={classNameRow}>
              {columns.map((col, colIdx) => {
                if (col?.hide) return null;
                return (
                  <td
                    className={cn(
                      "py-4 first:pl-0 last:pr-0 px-3 text-font-size-15 font-light",
                      classNameTogether,
                      classNameItem
                    )}
                    key={col.key}
                  >
                    <div
                      className={cn(
                        col.align && `justify-${col.align}`,
                        'flex items-center w-full'
                      )}
                    >
                      {col?.loading ? (
                        col?.loading
                      ) : (
                        <div className="h-3 bg-card-fill animate-pulse rounded-full w-16" />
                      )}
                    </div>
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  if (!isLoading && isEmpty) {
    return (
      <div
        className={cn(className, "w-full flex items-center justify-center p-4")}
      >
        <Empty isSection title={titleEmpty} description={subEmpty} />
      </div>
    );
  }

  return (
    <div className={cn("w-full", className)}>
      <table
        className={cn(
          "w-full relative table-fixed max-phone:table-auto",
          classNameTable
        )}
      >
        <thead>
          <tr>
            {columns.map((col) => {
              if (col?.hide) return null;
              return (
                <th
                  key={col.key}
                  style={{ width: `${col.width}%` }}
                  className={cn(
                    "pb-4 pt-0 first:pl-0 last:pr-0 px-3 text-left text-text-tertiary text-sm font-light",
                    classNameTogether,
                    classNameHeader,
                    isLoading && "first:ps-0 last:pe-0"
                  )}
                >
                  {isLoading ? (
                    "hehe"
                  ) : (
                    <div
                      className={cn(
                        col.align === "center"
                          ? "justify-center"
                          : col.align === "end"
                            ? "justify-end"
                            : "justify-start",
                        "flex items-center"
                      )}
                    >
                      {col.title}
                    </div>
                  )}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {dataSource.map((data, idx) => (
            <tr className={cn("group/table", classNameRow)} key={data.id != null ? `${data.id}-${idx}` : idx} onClick={() => onClickRow?.(data)}>
              {columns.map((col) => {
                if (col?.hide) return null;
                const lastRow = dataSource.length - 1 === idx;
                return (
                  <td
                    className={cn(
                      "py-4 first:pl-0 last:pr-0 px-3 text-font-size-15 font-light",
                      lastRow && "pb-0",
                      classNameTogether,
                      classNameItem
                    )}
                    key={col.key}
                  >
                    <div
                      className={cn(
                        col.align && `justify-${col.align}`,
                        "flex items-center w-full"
                      )}
                    >
                      {col.render
                        ? col.render(get(data, col.key), data)
                        : get(data, col.key)}
                    </div>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
