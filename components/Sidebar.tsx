"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/Icon";

const menuItems = [
  { icon: "ne-ic-home", label: "Home", href: "/" },
  { icon: "ne-ic-asset-statistics", label: "Calculator", href: "/calculator" },
  { icon: "ne-ic-library", label: "Documents", href: "/docs" },
  { icon: "ne-ic-badge-progress", label: "Playground", href: "/chat" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 border-r border-gray-200 bg-white flex flex-col h-full sticky top-0">
      <div className="p-8 flex items-center gap-3">
        <div className="text-primary">
          <Icon name="ne-ic-terminal" className="text-3xl font-bold" />
        </div>
        <span className="text-2xl font-black tracking-tight text-gray-900">NE Console</span>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-4 px-6 py-4 rounded-2xl transition-all duration-300 group",
                isActive
                  ? "bg-primary/10 text-gray-900 shadow-sm"
                  : "text-gray-400 hover:bg-gray-50 hover:text-gray-900"
              )}
            >
              <Icon
                name={item.icon as any}
                className={cn(
                  "text-xl",
                  isActive ? "text-primary" : "text-gray-300 group-hover:text-gray-900"
                )}
              />
              <span className="font-black text-lg">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-6 mt-auto">
        <div className="p-6 rounded-[2rem] bg-gray-50 border border-gray-100 space-y-4">
          <div>
            <p className="text-sm font-black text-gray-900 mb-1">BASIC Plan</p>
            <p className="text-xs text-gray-400 font-bold leading-relaxed">65.0% tokens used this month.</p>
          </div>
          <Link
            href="/billing"
            className="block text-center py-3 bg-primary hover:bg-[#ebbc00] text-gray-900 text-sm font-black rounded-xl transition-colors shadow-lg shadow-primary/20"
          >
            Nâng cấp ngay
          </Link>
        </div>
      </div>
    </aside>
  );
}
