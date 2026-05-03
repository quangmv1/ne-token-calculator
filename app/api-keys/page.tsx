"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Card, Button } from "sdk-hyper-ui";
import { Icon, type IconType } from "@/components/Icon";

interface APIKey {
  id: string;
  name: string;
  key: string;
  created: string;
  lastUsed: string;
}

const ICONS: Record<string, IconType> = {
  plus: "ne-ic-plus",
  search: "ne-ic-search",
  eye: "ne-ic-eye",
  eyeOff: "ne-ic-eye-off",
  copy: "ne-ic-copy",
  delete: "ne-ic-delete",
  more: "ne-ic-more-vertical",
  warning: "ne-ic-warning-triangle"
};

export default function APIKeysPage() {
  const [keys, setKeys] = useState<APIKey[]>([
    { id: "1", name: "Development Key", key: "ne_live_51PqZ...3x2a", created: "Oct 24, 2025", lastUsed: "2 hours ago" },
    { id: "2", name: "Production App", key: "ne_live_92kd...8s1w", created: "Nov 12, 2025", lastUsed: "Just now" },
  ]);
  const [showKey, setShowKey] = useState<string | null>(null);

  return (
    <div className="space-y-10">
      <div className="flex justify-between items-end">
        <header>
          <h1 className="text-4xl font-black text-gray-900 mb-2">API Keys</h1>
          <p className="text-gray-500 font-medium">Quản lý các khóa bí mật để xác thực với API ne-token-calculator.</p>
        </header>
        <Button type="primary" size="lg" className="px-8 !rounded-2xl shadow-lg shadow-blue-600/20 flex items-center gap-2">
          <Icon name={ICONS.plus} /> Tạo API Key mới
        </Button>
      </div>

      <Card className="p-8 bg-white border-gray-200 shadow-sm rounded-[2rem] overflow-hidden">
        <div className="flex items-center gap-4 mb-8 bg-gray-50 border border-gray-100 rounded-2xl px-6 py-3 w-full max-w-md focus-within:ring-4 focus-within:ring-blue-500/5 focus-within:border-blue-500 transition-all">
          <Icon name={ICONS.search} className="text-gray-400 text-lg" />
          <input 
            type="text" 
            placeholder="Tìm kiếm khóa..." 
            className="bg-transparent border-none outline-none text-gray-900 w-full font-medium"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-400 text-xs uppercase tracking-widest border-b border-gray-100">
                <th className="pb-6 font-black">Tên khóa</th>
                <th className="pb-6 font-black">Khóa bí mật</th>
                <th className="pb-6 font-black">Ngày tạo</th>
                <th className="pb-6 font-black">Sử dụng gần nhất</th>
                <th className="pb-6 text-right font-black">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {keys.map((k) => (
                <tr key={k.id} className="group hover:bg-gray-50/50 transition-colors">
                  <td className="py-8 font-black text-gray-900 text-lg">{k.name}</td>
                  <td className="py-8">
                    <div className="flex items-center gap-3">
                      <code className="text-sm bg-gray-100 px-3 py-1.5 rounded-xl text-gray-500 font-mono font-bold">
                        {showKey === k.id ? k.key : "••••••••••••••••"}
                      </code>
                      <Button 
                        type="ghostSecondary" 
                        onClick={() => setShowKey(showKey === k.id ? null : k.id)}
                        className="text-gray-400 hover:text-blue-600 transition-colors !p-2 !rounded-lg hover:bg-white !min-h-0 !bg-transparent !border-0"
                      >
                        <Icon name={showKey === k.id ? ICONS.eyeOff : ICONS.eye} className="text-lg" />
                      </Button>
                      <Button 
                        type="ghostSecondary"
                        className="text-gray-400 hover:text-blue-600 transition-colors !p-2 !rounded-lg hover:bg-white !min-h-0 !bg-transparent !border-0"
                      >
                        <Icon name={ICONS.copy} className="text-lg" />
                      </Button>
                    </div>
                  </td>
                  <td className="py-8 text-gray-500 font-bold">{k.created}</td>
                  <td className="py-8 text-gray-500 font-bold">{k.lastUsed}</td>
                  <td className="py-8 text-right">
                    <div className="flex justify-end gap-3">
                      <Button 
                        type="ghostSecondary"
                        className="!p-3 text-gray-300 hover:text-red-500 hover:bg-red-50 !rounded-2xl transition-all !min-h-0 !bg-transparent !border-0"
                      >
                        <Icon name={ICONS.delete} className="text-xl" />
                      </Button>
                      <Button 
                        type="ghostSecondary"
                        className="!p-3 text-gray-300 hover:text-gray-900 hover:bg-gray-100 !rounded-2xl transition-all !min-h-0 !bg-transparent !border-0"
                      >
                        <Icon name={ICONS.more} className="text-xl" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <div className="p-8 bg-amber-50 border border-amber-100 rounded-[2rem]">
        <h4 className="text-amber-700 font-black mb-2 flex items-center gap-2">
          <Icon name={ICONS.warning} className="text-xl" /> Cảnh báo bảo mật
        </h4>
        <p className="text-sm text-amber-600/80 leading-relaxed font-bold">
          Các API key của bạn mang các đặc quyền quan trọng. Đừng chia sẻ các khóa bí mật của bạn ở những nơi công cộng như GitHub, code phía client hoặc các khu vực khác nơi chúng có thể bị lộ.
        </p>
      </div>
    </div>
  );
}
