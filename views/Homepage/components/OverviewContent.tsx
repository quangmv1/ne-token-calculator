"use client";

import React from "react";
import { Card, ProgressBar, Button } from "sdk-hyper-ui";
import { Icon } from "@/components/Icon";

export function OverviewContent() {
  return (
    <div className="space-y-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Token Quota Card */}
        <Card className="bg-white border-gray-200 shadow-sm p-8 rounded-[1.5rem]">
          <div className="flex items-center gap-3 mb-8">
            <Icon name="ne-ic-rate" className="text-primary text-2xl" />
            <h2 className="text-2xl font-bold text-gray-900">Token Quota</h2>
          </div>

          <div className="space-y-6">
            <div className="flex justify-between items-end">
              <span className="text-gray-500 font-bold">Đã sử dụng</span>
              <span className="text-3xl font-black text-gray-900">65,000 / 100,000</span>
            </div>

            <div className="space-y-2">
              <ProgressBar value={65} className="h-3 bg-gray-100 rounded-full overflow-hidden">
                <div className="bg-primary h-full rounded-full transition-all duration-500" style={{ width: '65%' }} />
              </ProgressBar>
              <p className="text-gray-400 text-sm font-bold">65.0% sử dụng</p>
            </div>

            <div className="pt-6 border-t border-gray-100">
              <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">Thống kê tháng này</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-6 rounded-2xl">
                  <p className="text-xs text-gray-500 font-bold mb-1">Tổng requests</p>
                  <p className="text-2xl font-black text-gray-900">12,847</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl">
                  <p className="text-xs text-gray-500 font-bold mb-1">Avg tokens/request</p>
                  <p className="text-2xl font-black text-gray-900">506</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Model Selection Card */}
        <Card className="bg-white border-gray-200 shadow-sm p-8 rounded-[1.5rem]">
          <div className="flex items-center gap-3 mb-8">
            <Icon name="ne-ic-terminal" className="text-primary text-2xl" />
            <h2 className="text-2xl font-bold text-gray-900">Model Selection</h2>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-900">Chọn model</label>
              <Button
                type="secondary"
                size="lg"
                isFullWidth
                className="!bg-white !border border-gray-200 !rounded-2xl !p-6 flex justify-between items-center hover:!border-blue-400 transition-all !text-left !min-h-0"
              >
                <span className="font-bold text-gray-900">Gemini 2.0 Flash</span>
                <Icon name="ne-ic-arrow-down" className="text-gray-400" />
              </Button>
            </div>

            <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 space-y-4">
              <h3 className="text-2xl font-black text-gray-900">Gemini 2.0 Flash</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-medium">
                Model nhanh nhất, phù hợp cho các tác vụ thông thường
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div>
                  <p className="text-xs text-gray-400 font-bold mb-1 uppercase">Context Window:</p>
                  <p className="font-black text-gray-900">1M tokens</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-bold mb-1 uppercase">Giá:</p>
                  <p className="font-black text-gray-900">0.075đ/1K tokens</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* API Keys Section */}
      <Card className="bg-white border-gray-200 shadow-sm p-8 rounded-[1.5rem] space-y-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Icon name="ne-ic-lighting" className="text-primary text-2xl" />
            <h2 className="text-2xl font-bold text-gray-900">API Keys</h2>
          </div>
          <Button type="primary" size="lg" className="px-8 !rounded-2xl shadow-lg shadow-blue-600/20 flex items-center gap-2">
            <Icon name="ne-ic-plus" /> Tạo API Key mới
          </Button>
        </div>

        <div className="border border-gray-100 rounded-[2rem] overflow-hidden">
          <div className="p-8 flex justify-between items-center group hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
            <div>
              <h4 className="text-xl font-black text-gray-900 mb-1">Production Key</h4>
              <p className="text-xs font-mono text-gray-400">ne_live_••••••••••••••••••••••••••••</p>
            </div>
            <Button
              type="ghostSecondary"
              className="p-3 text-gray-300 hover:text-red-500 transition-colors !bg-transparent !border-0 !p-0"
            >
              <Icon name="ne-ic-delete" className="text-xl" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
