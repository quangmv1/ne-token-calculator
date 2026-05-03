
// Filename: GridItemGroup
// Created: ToanPS
// 29.01.2026


import { Mail } from "lucide-react";

import { cn } from "../../lib/utils";
import { GridItem } from "../GridItem/GridItem";

// Mock data for demonstration purposes
const GirdItemFake = [
  { icon: <Mail size={16} />, label: "Item 1" },
  { icon: <Mail size={16} />, label: "Item 2" },
  { icon: <Mail size={16} />, label: "Item 3" },
  { icon: <Mail size={16} />, label: "Item 4" },
];

interface GridItemGroupProps{
  className?: string;
  classNameGridItem?: string;
  group?: { icon?: React.ReactNode; label?: string }[];
}

/** Primary UI component for user interaction */
export const GridItemGroup = ({className, classNameGridItem, group = GirdItemFake} : GridItemGroupProps) => {
  return (
    <div className={cn("grid grid-cols-4 gap-4", className)}>
      {group.map((item, index) => (
        <GridItem icon={item?.icon} label={item?.label} key={index} className={classNameGridItem} />
      ))}
    </div>
  );
};
