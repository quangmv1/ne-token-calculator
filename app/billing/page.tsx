"use client";

import { 
  CreditCard, 
  Plus, 
  ShieldCheck, 
  ArrowUpRight,
  Download,
  MoreHorizontal
} from "lucide-react";
import { cn } from "@/lib/utils";

const cards = [
  { last4: "4242", brand: "Visa", expiry: "12/28", primary: true },
  { last4: "9876", brand: "Mastercard", expiry: "05/26", primary: false },
];

const invoices = [
  { id: "INV-2025-001", date: "Oct 24, 2025", amount: "$49.00", status: "Paid" },
  { id: "INV-2025-002", date: "Nov 24, 2025", amount: "$49.00", status: "Paid" },
];

export default function BillingPage() {
  return (
    <div className="space-y-12">
      <header>
        <h1 className="text-4xl font-bold mb-2">Billing & Subscription</h1>
        <p className="text-zinc-400">Manage your payment methods and view transaction history.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-blue-400" /> Payment Methods
          </h2>
          
          <div className="space-y-4">
            {cards.map((card) => (
              <div key={card.last4} className="p-6 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-between group hover:border-white/20 transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-8 bg-black/40 rounded-lg flex items-center justify-center border border-white/10">
                    <span className="text-[10px] font-black italic">{card.brand}</span>
                  </div>
                  <div>
                    <p className="font-bold">•••• •••• •••• {card.last4}</p>
                    <p className="text-xs text-zinc-500">Expires {card.expiry}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  {card.primary && <span className="text-[10px] font-bold text-blue-400 bg-blue-400/10 px-2 py-1 rounded-full uppercase tracking-wider">Primary</span>}
                  <button className="text-zinc-500 hover:text-white transition-colors">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
            
            <button className="w-full py-4 border-2 border-dashed border-white/10 rounded-3xl text-zinc-500 font-bold hover:text-white hover:border-white/20 transition-all flex items-center justify-center gap-2 group">
              <Plus className="w-5 h-5 group-hover:scale-110 transition-transform" /> Add Payment Method
            </button>
          </div>
        </div>

        <div className="p-8 rounded-[3rem] bg-gradient-to-br from-blue-600 to-indigo-700 relative overflow-hidden">
          <div className="relative z-10">
            <p className="text-blue-100 text-sm font-bold uppercase tracking-widest mb-2">Current Plan</p>
            <h3 className="text-4xl font-black mb-1">Pro Plan</h3>
            <p className="text-blue-200 text-sm mb-8">$49.00 billed monthly</p>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center text-sm">
                <span className="text-blue-100">Tokens used</span>
                <span className="font-bold">3.2M / 5M</span>
              </div>
              <div className="h-2 bg-black/20 rounded-full overflow-hidden">
                <div className="h-full bg-white w-[64%]" />
              </div>
            </div>

            <button className="px-6 py-3 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-colors flex items-center gap-2">
              Upgrade Plan <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
          <ShieldCheck className="absolute bottom-0 right-0 w-48 h-48 text-white/10 -mb-10 -mr-10" />
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-xl font-bold">Billing History</h2>
        <div className="rounded-3xl bg-white/5 border border-white/10 overflow-hidden">
          <table className="w-full">
            <thead className="bg-white/5">
              <tr className="text-left text-xs font-bold text-zinc-500 uppercase tracking-widest">
                <th className="px-6 py-4">Invoice ID</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Amount</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Receipt</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {invoices.map((inv) => (
                <tr key={inv.id} className="text-sm">
                  <td className="px-6 py-4 font-mono font-medium">{inv.id}</td>
                  <td className="px-6 py-4 text-zinc-400">{inv.date}</td>
                  <td className="px-6 py-4 font-bold">{inv.amount}</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-bold uppercase">
                      {inv.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-blue-400 hover:text-blue-300 transition-colors">
                      <Download className="w-4 h-4 inline" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
