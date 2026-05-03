"use client";

import React, { useState } from "react";
import { Card, Button } from "sdk-hyper-ui";
import { cn } from "@/lib/utils";
import { Icon, type IconType } from "@/components/Icon";

export function CalculatorContent() {
  const [activeInput, setActiveInput] = useState("text");

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Left Column: Calculator */}
      <Card className="bg-white border-gray-200 shadow-sm p-8 rounded-[1.5rem] space-y-8">
        <div className="flex items-center gap-3">
          <Icon name="ne-ic-asset-statistics" className="text-primary text-3xl" />
          <h2 className="text-2xl font-black text-gray-900">Token Calculator</h2>
        </div>

        <div className="space-y-6">
          <div className="space-y-4">
            <label className="text-sm font-bold text-gray-900">Loại input</label>
            <div className="flex gap-4">
              {[
                { id: "text", label: "Text", icon: "ne-ic-tool-text" },
                { id: "image", label: "Image", icon: "ne-ic-camera" },
                { id: "video", label: "Video", icon: "ne-ic-play" },
              ].map((item) => (
                <Button
                  key={item.id}
                  type="secondary"
                  onClick={() => setActiveInput(item.id)}
                  className={cn(
                    "flex-1 !rounded-2xl !py-4 flex items-center justify-center gap-3 font-black transition-all",
                    activeInput === item.id 
                      ? "border-[#FFD60A] ring-2 ring-[#FFD60A]/10 text-gray-900" 
                      : "border-gray-100 text-gray-400"
                  )}
                >
                  <Icon name={item.icon as IconType} className="text-xl" />
                  {item.label}
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <label className="text-sm font-bold text-gray-900">Input</label>
            <textarea
              placeholder="Nhập văn bản để tính token..."
              className="w-full h-48 bg-white border border-gray-100 rounded-2xl p-6 text-gray-900 focus:outline-none focus:border-[#FFD60A] focus:ring-4 focus:ring-[#FFD60A]/5 transition-all resize-none font-medium text-lg"
            />
          </div>

          <Button 
            type="primary" 
            size="lg" 
            isFullWidth
            className="!rounded-2xl !min-h-[4rem] text-lg font-black"
          >
            Tính toán
          </Button>
        </div>
      </Card>

      {/* Right Column: About */}
      <Card className="bg-white border-gray-200 shadow-sm p-8 rounded-[1.5rem] space-y-8">
        <h2 className="text-2xl font-black text-gray-900">Về Token Calculator</h2>
        <div className="space-y-6 text-gray-500 font-medium leading-relaxed">
          <p>
            Token calculator giúp bạn ước tính số lượng token sẽ được sử dụng cho các loại input khác nhau.
          </p>
          <div className="space-y-4">
            <p className="text-gray-900 font-black">Công thức tính:</p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-900" />
                <span className="font-bold text-gray-700">Text:</span> ~4 ký tự = 1 token
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-900" />
                <span className="font-bold text-gray-700">Image:</span> ~1.5 token/KB
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-900" />
                <span className="font-bold text-gray-700">Video:</span> ~100 token/giây
              </li>
            </ul>
          </div>
          <p className="text-xs text-gray-400 italic mt-8 border-t border-gray-50 pt-6">
            * Đây là ước tính. Số lượng token thực tế có thể khác nhau tùy theo model và nội dung.
          </p>
        </div>
      </Card>
    </div>
  );
}
