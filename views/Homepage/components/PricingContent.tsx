"use client";

import React from "react";
import { Button, Card } from "sdk-hyper-ui";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/Icon";

export function PricingContent() {
  const plans = [
    {
      name: "Basic",
      price: "99,000đ",
      tokens: "100,000 tokens",
      features: ["100,000 tokens/tháng", "Truy cập API cơ bản", "2 models", "Community support"],
      current: true,
    },
    {
      name: "Pro",
      price: "299,000đ",
      tokens: "500,000 tokens",
      features: ["500,000 tokens/tháng", "Truy cập tất cả API", "Tất cả models", "Priority support", "Advanced analytics"],
      highlight: "Phổ biến nhất",
      current: false,
    },
    {
      name: "Plus",
      price: "799,000đ",
      tokens: "2,000,000 tokens",
      features: ["2,000,000 tokens/tháng", "Unlimited API access", "Tất cả models + Beta", "24/7 dedicated support", "Custom integrations", "SLA guarantee"],
      current: false,
    }
  ];

  return (
    <div className="space-y-10">
      {/* Banner */}
      <div className="bg-[#FFFCEB] border border-[#FFD60A] p-6 rounded-[1.5rem] space-y-2">
        <h3 className="text-xl font-black text-gray-900">Gói hiện tại: BASIC</h3>
        <p className="text-gray-500 font-medium">Chọn gói phù hợp với nhu cầu của bạn</p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div 
            key={plan.name}
            className={cn(
              "relative bg-white border border-gray-100 rounded-[2rem] p-8 flex flex-col shadow-sm transition-all hover:shadow-md",
              plan.highlight && "border-[#FFD60A] ring-2 ring-[#FFD60A]/10 scale-105 z-10"
            )}
          >
            {plan.highlight && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FFD60A] text-gray-900 text-[10px] font-black uppercase px-4 py-1.5 rounded-full whitespace-nowrap shadow-sm">
                {plan.highlight}
              </div>
            )}
            
            <div className="mb-8">
              <h4 className="text-2xl font-black text-gray-900 mb-4">{plan.name}</h4>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black text-gray-900">{plan.price}</span>
                <span className="text-gray-400 font-bold">/tháng</span>
              </div>
              <p className="text-gray-500 font-bold mt-2 uppercase tracking-wide text-xs">{plan.tokens}</p>
            </div>

            <ul className="space-y-4 mb-10 flex-grow">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Icon name="ne-ic-check" className="text-[#00C076] mt-1 shrink-0" />
                  <span className="text-sm font-bold text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <Button 
              type={plan.current ? "secondary" : (plan.highlight ? "primary" : "secondary")}
              className={cn(
                "w-full !rounded-2xl !min-h-[3.5rem] font-black flex items-center justify-center gap-2",
                plan.current && "!bg-gray-100 !text-gray-400 border-0"
              )}
              isDisabled={plan.current}
            >
              <Icon name="ne-ic-card" />
              {plan.current ? "Gói hiện tại" : "Chọn gói"}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
