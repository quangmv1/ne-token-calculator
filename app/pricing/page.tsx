"use client";

import { Check, Zap, Rocket, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Basic",
    price: "$0",
    description: "Perfect for experimenting and hobby projects.",
    features: ["100k free tokens/mo", "Community support", "Standard processing speed", "1 API Key"],
    icon: Zap,
    color: "zinc"
  },
  {
    name: "Pro",
    price: "$49",
    description: "Ideal for growing apps and serious developers.",
    features: ["5M tokens/mo", "Priority email support", "Fast processing speed", "10 API Keys", "Advanced analytics"],
    icon: Rocket,
    color: "blue",
    popular: true
  },
  {
    name: "Plus",
    price: "$199",
    description: "Built for enterprise-grade performance.",
    features: ["Unlimited tokens (Pay-as-you-go)", "24/7 Dedicated support", "Real-time processing", "Unlimited API Keys", "SLA guarantees"],
    icon: Star,
    color: "indigo"
  },
];

export default function PricingPage() {
  return (
    <div className="space-y-12">
      <header className="text-center max-w-2xl mx-auto">
        <h1 className="text-5xl font-bold mb-4 tracking-tight">Simple, predictable pricing</h1>
        <p className="text-zinc-400 text-lg leading-relaxed">
          Start for free and scale as you grow. No hidden fees, just pure AI power at your fingertips.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div 
            key={plan.name} 
            className={cn(
              "p-8 rounded-[2.5rem] border transition-all duration-300 relative group flex flex-col",
              plan.popular 
                ? "bg-blue-600/5 border-blue-500 shadow-2xl shadow-blue-600/10 scale-105 z-10" 
                : "bg-white/5 border-white/10 hover:border-white/20"
            )}
          >
            {plan.popular && (
              <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full">
                Most Popular
              </span>
            )}
            
            <div className="flex justify-between items-start mb-8">
              <div className={cn(
                "p-4 rounded-2xl",
                plan.color === "blue" ? "bg-blue-600/20 text-blue-400" : 
                plan.color === "indigo" ? "bg-indigo-600/20 text-indigo-400" : "bg-white/10 text-zinc-400"
              )}>
                <plan.icon className="w-8 h-8" />
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
            <div className="flex items-baseline gap-1 mb-4">
              <span className="text-4xl font-black">{plan.price}</span>
              <span className="text-zinc-500 font-medium">/month</span>
            </div>
            <p className="text-zinc-400 text-sm mb-8 leading-relaxed">{plan.description}</p>

            <div className="space-y-4 mb-10 flex-1">
              {plan.features.map((feature) => (
                <div key={feature} className="flex items-center gap-3 text-sm">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center">
                    <Check className="w-3 h-3 text-blue-400" />
                  </div>
                  <span className="text-zinc-300">{feature}</span>
                </div>
              ))}
            </div>

            <button className={cn(
              "w-full py-4 rounded-2xl font-bold transition-all text-sm",
              plan.popular 
                ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20" 
                : "bg-white/10 hover:bg-white/20 text-white border border-white/10"
            )}>
              {plan.name === "Basic" ? "Get Started" : `Upgrade to ${plan.name}`}
            </button>
          </div>
        ))}
      </div>

      <div className="p-12 rounded-[3rem] bg-white/[0.02] border border-white/10 text-center">
        <h3 className="text-2xl font-bold mb-4">Need something custom?</h3>
        <p className="text-zinc-400 mb-8 max-w-lg mx-auto">We offer custom solutions for high-volume users, startups, and enterprise teams.</p>
        <button className="px-8 py-4 bg-white text-black font-bold rounded-2xl hover:bg-zinc-200 transition-colors">
          Contact Sales
        </button>
      </div>
    </div>
  );
}
