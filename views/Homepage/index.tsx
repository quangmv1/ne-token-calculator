"use client";

import React, { useState } from "react";
import {
  Button,
  Tab
} from "sdk-hyper-ui";
import { Icon } from "@/components/Icon";
import { OverviewContent } from "./components/OverviewContent";
import { PricingContent } from "./components/PricingContent";

export default function HomePage() {
  const [currentTab, setCurrentTab] = useState("overview");

  const dashboardTabs = [
    {
      label: <div className="flex items-center gap-2 px-2"><Icon name="ne-ic-chart-pie" className="text-lg" /> Tổng quan</div>,
      content: <OverviewContent />,
      value: 'overview'
    },
    {
      value: "pricing",
      label: <div className="flex items-center gap-2 px-2"><Icon name="ne-ic-card" className="text-lg" /> Pricing</div>,
      content: <PricingContent />,
    },
  ];

  return (
    <div className="w-full">
      {/* Top Header - Simplified */}
      <header className="bg-white border-b border-gray-200 px-8 py-5 flex justify-between items-center sticky top-0 z-10">
        <div>
          <h2 className="text-xl font-black text-gray-900">Dashboard</h2>
        </div>
        <Button
          type="secondary"
          className="!min-h-0 !py-2.5 !px-6 !rounded-xl"
        >
          <Icon name="ne-ic-logout" />
          <span className="ml-3 font-bold">Đăng xuất</span>
        </Button>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-8 py-10 space-y-8">
        <div>
          <h1 className="text-4xl font-black text-gray-900 mb-1">Chào mừng trở lại!</h1>
          <p className="text-gray-500 font-medium font-bold">Quản lý API keys, quota và theo dõi mức độ sử dụng của bạn.</p>
        </div>

        {/* Tabs */}
        <Tab
          tabs={dashboardTabs as any}
          currentTab={currentTab}
          onChangeTab={setCurrentTab}
          className="mt-6"
          contentClassName="py-8"
        />
      </main>

      {/* Floating help button using Button component */}
      <Button
        type="secondaryStatic"
        className="fixed bottom-6 right-6 !w-12 !h-12 !min-h-0 !p-0 shadow-xl !rounded-full text-xl font-bold"
      >
        ?
      </Button>
    </div>
  );
}
