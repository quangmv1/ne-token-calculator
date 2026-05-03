"use client";

import React from "react";
import { Card } from "sdk-hyper-ui";
import { Icon } from "@/components/Icon";
import { useTokenCalculator } from "../context/calculatorContext";

export function ResultsCard() {
  const { tokenCount, charCount } = useTokenCalculator();

  return (
    <div className="space-y-8">
      <Card className="p-8 bg-white border-gray-200 shadow-sm rounded-[2rem]">
        <h3 className="text-xl font-black text-gray-900 mb-8 flex items-center gap-3">
          <Icon name="ne-ic-24h-history" className="text-primary" /> Tóm tắt
        </h3>

        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <span className="text-gray-500 font-bold">Token dự kiến</span>
            <span className="text-gray-900 font-black text-2xl">{tokenCount.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-500 font-bold">Ký tự</span>
            <span className="text-gray-900 font-black text-lg">{charCount.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-500 font-bold">Chi phí / 1K</span>
            <span className="text-gray-900 font-black text-lg">0.075đ</span>
          </div>
          <div className="h-px bg-gray-100 my-2" />
          <div className="flex justify-between items-center">
            <span className="text-gray-500 font-bold">Tổng chi phí</span>
            <span className="text-primary font-black text-3xl">{((tokenCount / 1000) * 0.075).toFixed(4)}đ</span>
          </div>
        </div>
      </Card>

      <div className="p-8 bg-gray-50 border border-gray-100 rounded-[2rem]">
        <h4 className="text-gray-900 font-black mb-3 flex items-center gap-3 uppercase tracking-wider text-sm">
          <Icon name="ne-ic-doc-settings" className="text-primary" /> Mẹo nhỏ
        </h4>
        <p className="text-sm text-gray-500 leading-relaxed font-bold">
          Số lượng token có thể thay đổi tùy theo model. Chúng tôi sử dụng thuật toán split chuẩn để ước tính.
        </p>
      </div>
    </div>
  );
}
