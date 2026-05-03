"use client";

import { useState } from "react";
import { 
  Send, 
  Bot, 
  User, 
  ShieldAlert, 
  Settings2,
  Sparkles,
  Command
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const models = [
  { id: "gpt-4", name: "GPT-4 (Standard)", description: "Best for complex reasoning" },
  { id: "gpt-3.5", name: "GPT-3.5 Turbo", description: "Fastest for simple tasks" },
];

export default function ChatPage() {
  const [apiKey, setApiKey] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hello! Please enter your API key to start chatting." }
  ]);
  const [input, setInput] = useState("");
  const [selectedModel, setSelectedModel] = useState(models[0]);

  const handleVerify = () => {
    if (apiKey.startsWith("ne_live_")) {
      setIsVerified(true);
      setMessages([...messages, { role: "assistant", content: "API Key verified. How can I help you today?" }]);
    } else {
      alert("Invalid API Key format. Must start with ne_live_");
    }
  };

  const handleSend = () => {
    if (!input.trim() || !isVerified) return;
    
    const newMessages: Message[] = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");

    // Mock assistant response
    setTimeout(() => {
      setMessages([...newMessages, { 
        role: "assistant", 
        content: `I'm an AI assistant using ${selectedModel.name}. This is a mock response because I'm in "vibe code" mode!` 
      }]);
    }, 1000);
  };

  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col">
      <header className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
            Playground <Sparkles className="w-6 h-6 text-blue-400" />
          </h1>
          <p className="text-zinc-400 text-sm">Test your models in real-time.</p>
        </div>

        <div className="flex gap-4">
          <div className="relative group">
            <button className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm hover:bg-white/10 transition-colors">
              <Command className="w-4 h-4 text-zinc-500" />
              {selectedModel.name}
              <Settings2 className="w-4 h-4 text-zinc-500" />
            </button>
            <div className="absolute right-0 top-full mt-2 w-64 bg-[#1a1a1a] border border-white/10 rounded-2xl shadow-2xl p-2 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all transform translate-y-2 group-hover:translate-y-0 z-50">
              {models.map((m) => (
                <button
                  key={m.id}
                  onClick={() => setSelectedModel(m)}
                  className={cn(
                    "w-full text-left p-3 rounded-xl transition-colors",
                    selectedModel.id === m.id ? "bg-blue-600/10 text-blue-400" : "hover:bg-white/5"
                  )}
                >
                  <p className="font-bold text-sm">{m.name}</p>
                  <p className="text-[10px] text-zinc-500">{m.description}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {!isVerified ? (
        <div className="flex-1 flex items-center justify-center">
          <div className="max-w-md w-full p-10 rounded-[3rem] bg-white/5 border border-white/10 text-center space-y-6">
            <div className="w-20 h-20 bg-blue-600/10 rounded-full flex items-center justify-center mx-auto">
              <ShieldAlert className="w-10 h-10 text-blue-400" />
            </div>
            <h2 className="text-2xl font-bold">Authentication Required</h2>
            <p className="text-zinc-400 text-sm">Please enter your API Key from the dashboard to enable the playground.</p>
            <input 
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="ne_live_..."
              className="w-full bg-black/40 border border-white/10 rounded-2xl p-4 text-center font-mono text-sm focus:border-blue-500 outline-none transition-all"
            />
            <button 
              onClick={handleVerify}
              className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-lg shadow-blue-600/20 transition-all"
            >
              Verify & Start
            </button>
          </div>
        </div>
      ) : (
        <div className="flex-1 flex flex-col bg-white/5 border border-white/10 rounded-[3rem] overflow-hidden">
          <div className="flex-1 overflow-y-auto p-8 space-y-6">
            {messages.map((m, i) => (
              <div key={i} className={cn(
                "flex gap-4 max-w-3xl",
                m.role === "user" ? "ml-auto flex-row-reverse" : "mr-auto"
              )}>
                <div className={cn(
                  "w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0",
                  m.role === "assistant" ? "bg-blue-600/20 text-blue-400" : "bg-white/10 text-zinc-400"
                )}>
                  {m.role === "assistant" ? <Bot className="w-6 h-6" /> : <User className="w-6 h-6" />}
                </div>
                <div className={cn(
                  "p-5 rounded-[1.5rem] leading-relaxed text-sm shadow-sm",
                  m.role === "assistant" ? "bg-white/[0.03] text-zinc-300 border border-white/5" : "bg-blue-600 text-white"
                )}>
                  {m.content}
                </div>
              </div>
            ))}
          </div>

          <div className="p-8 bg-black/40 border-t border-white/10">
            <div className="relative max-w-4xl mx-auto">
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Message AI Studio..."
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-6 pr-16 text-white focus:outline-none focus:border-blue-500 transition-all shadow-2xl"
              />
              <button 
                onClick={handleSend}
                className="absolute right-2 top-2 bottom-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all shadow-lg"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
