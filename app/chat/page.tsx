"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  Send, 
  Settings2, 
  Code2, 
  ChevronRight, 
  Trash2, 
  Plus, 
  Terminal,
  Cpu,
  Sparkles,
  Copy,
  Check,
  ChevronDown,
  Eye,
  EyeOff,
  User,
  Bot
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "sdk-hyper-ui";
import { motion, AnimatePresence } from "framer-motion";

const GROQ_API_KEY = process.env.NEXT_PUBLIC_GROQ_API_KEY || "";

interface Message {
  id: string;
  role: "system" | "user" | "assistant";
  content: string;
}

const MODELS = [
  { id: "llama-3.3-70b-versatile", name: "Llama 3.3 70B", provider: "Meta" },
  { id: "llama-3.1-8b-instant", name: "Llama 3.1 8B", provider: "Meta" },
];

export default function PlaygroundPage() {
  const [messages, setMessages] = useState<Message[]>([
    { id: "1", role: "system", content: "You are a helpful AI assistant specialized in token calculation and API management." },
    { id: "2", role: "user", content: "" }
  ]);
  const [selectedModel, setSelectedModel] = useState(MODELS[0].id);
  const [temperature, setTemperature] = useState(0.7);
  const [maxTokens, setMaxTokens] = useState(2048);
  const [isCodeVisible, setIsCodeVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  
  const chatEndRef = useRef<HTMLDivElement>(null);

  const addMessage = (role: "user" | "assistant") => {
    setMessages([...messages, { id: Math.random().toString(36).substr(2, 9), role, content: "" }]);
  };

  const updateMessage = (id: string, content: string) => {
    setMessages(messages.map(m => m.id === id ? { ...m, content } : m));
  };

  const removeMessage = (id: string) => {
    if (messages.length > 2) {
      setMessages(messages.filter(m => m.id !== id));
    }
  };

  const handleRun = async () => {
    if (isLoading) return;
    setIsLoading(true);

    try {
      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${GROQ_API_KEY}`
        },
        body: JSON.stringify({
          model: selectedModel,
          messages: messages.filter(m => m.content.trim() !== "").map(({ role, content }) => ({ role, content })),
          temperature,
          max_tokens: maxTokens,
          stream: false
        })
      });

      const data = await response.json();
      if (data.choices && data.choices[0]) {
        const aiContent = data.choices[0].message.content;
        setMessages(prev => [...prev, { id: Math.random().toString(36).substr(2, 9), role: "assistant", content: aiContent }]);
      }
    } catch (error) {
      console.error("Error fetching from Groq:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const copyCode = () => {
    const code = `import OpenAI from "openai";
const client = new OpenAI({
    apiKey: process.env.GROQ_API_KEY,
    baseURL: "https://api.groq.com/openai/v1",
});

const response = await client.responses.create({
    model: "${selectedModel}",
    input: "${messages.filter(m => m.role === 'user').pop()?.content || "Explain the importance of fast language models"}",
});
console.log(response.output_text);`;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="h-screen flex flex-col bg-white text-gray-900 font-sans">
      {/* Top Header Section */}
      <div className="max-w-7xl mx-auto px-8 py-10 w-full">
        <header className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-4xl font-black text-gray-900 mb-2">Groq Playground</h1>
            <p className="text-gray-500 font-medium">Thử nghiệm và tối ưu hóa các mô hình AI trực tiếp với Groq LPU.</p>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative group">
              <button className="flex items-center gap-3 px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-2xl hover:bg-gray-100 transition-all font-bold">
                <Cpu className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-700">{MODELS.find(m => m.id === selectedModel)?.name}</span>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </button>
              <div className="absolute right-0 top-full mt-2 w-72 bg-white border border-gray-100 rounded-3xl shadow-2xl p-2 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all transform translate-y-2 group-hover:translate-y-0 z-50 overflow-hidden">
                <div className="px-3 py-2 text-[10px] font-black text-gray-400 uppercase tracking-widest border-b border-gray-50 mb-2">Chọn mô hình</div>
                {MODELS.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setSelectedModel(m.id)}
                    className={cn(
                      "w-full text-left p-3 rounded-2xl transition-all flex flex-col gap-0.5",
                      selectedModel === m.id ? "bg-yellow-400/10 text-yellow-600 ring-1 ring-yellow-400/20" : "hover:bg-gray-50"
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm">{m.name}</span>
                      <span className="text-[9px] px-1.5 py-0.5 bg-gray-100 rounded text-gray-500 uppercase">{m.provider}</span>
                    </div>
                    <span className="text-[10px] opacity-50 truncate">{m.id}</span>
                  </button>
                ))}
              </div>
            </div>

            <Button 
              type="secondary"
              onClick={() => setIsCodeVisible(!isCodeVisible)}
              className="!min-h-0 !py-2.5 !px-5 !rounded-2xl !border-gray-200 hover:!bg-gray-50"
            >
              <div className="flex items-center gap-2">
                {isCodeVisible ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                <span className="font-bold text-sm">{isCodeVisible ? "Ẩn code" : "Hiện code"}</span>
              </div>
            </Button>

            <Button 
              onClick={handleRun}
              isDisabled={isLoading}
              className="!min-h-0 !py-2.5 !px-8 !rounded-2xl shadow-xl shadow-yellow-400/20 !bg-yellow-400 !text-black hover:!bg-yellow-500 border-none"
            >
              <div className="flex items-center gap-2">
                {isLoading ? <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" /> : <Send className="w-4 h-4" />}
                <span className="font-black text-sm uppercase tracking-wider">Chạy</span>
              </div>
            </Button>
          </div>
        </header>

        {/* Main Split Content */}
        <div className="flex bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden h-[calc(100vh-18rem)]">
          {/* Left Panel: Chat Input */}
          <div className={cn(
            "flex-1 flex flex-col overflow-y-auto custom-scrollbar transition-all duration-300",
            isCodeVisible ? "border-r border-gray-100" : ""
          )}>
            <div className="p-10 space-y-12">
              {/* System Message */}
              <section className="space-y-4">
                <div className="flex items-center gap-3 text-gray-400">
                  <Terminal className="w-4 h-4" />
                  <h3 className="text-[10px] font-black uppercase tracking-[0.2em]">System</h3>
                </div>
                <div className="group relative">
                  <textarea
                    value={messages.find(m => m.role === "system")?.content}
                    onChange={(e) => updateMessage(messages.find(m => m.role === "system")!.id, e.target.value)}
                    placeholder="Nhập prompt hệ thống..."
                    className="w-full bg-gray-50/50 border border-gray-100 rounded-[2rem] p-6 min-h-[100px] text-gray-800 focus:outline-none focus:border-yellow-400/50 transition-all resize-none font-medium leading-relaxed"
                  />
                </div>
              </section>

              {/* Chat Messages */}
              <section className="space-y-8">
                <AnimatePresence initial={false}>
                  {messages.filter(m => m.role !== "system").map((m) => (
                    <motion.div 
                      key={m.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-4 group"
                    >
                      <div className="flex items-center justify-between text-gray-400 px-1">
                        <div className="flex items-center gap-3">
                          {m.role === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                          <h3 className="text-[10px] font-black uppercase tracking-[0.2em]">{m.role}</h3>
                        </div>
                        <button 
                          onClick={() => removeMessage(m.id)}
                          className="opacity-0 group-hover:opacity-100 p-1.5 hover:bg-red-50 hover:text-red-500 rounded-xl transition-all"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      {m.role === "assistant" ? (
                        <div
                          className={cn(
                            "w-full rounded-[2rem] p-6 focus:outline-none transition-all font-medium leading-relaxed shadow-sm bg-yellow-400/5 border border-yellow-400/20 text-gray-900 whitespace-pre-wrap"
                          )}
                          contentEditable
                          onBlur={(e) => updateMessage(m.id, e.currentTarget.innerText)}
                          suppressContentEditableWarning
                        >
                          {m.content}
                        </div>
                      ) : (
                        <textarea
                          value={m.content}
                          onChange={(e) => updateMessage(m.id, e.target.value)}
                          placeholder={`Nhập tin nhắn của ${m.role}...`}
                          className={cn(
                            "w-full rounded-[2rem] p-6 focus:outline-none transition-all resize-none font-medium leading-relaxed shadow-sm bg-white border border-gray-100 focus:border-yellow-400/50 text-gray-800"
                          )}
                          rows={Math.max(1, m.content.split('\n').length)}
                        />
                      )}
                    </motion.div>
                  ))}
                </AnimatePresence>

                <div className="flex justify-center pt-4">
                  <button 
                    onClick={() => addMessage("user")}
                    className="flex items-center gap-2 px-6 py-3 bg-gray-50 border border-gray-100 rounded-2xl text-sm font-black text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-all group"
                  >
                    <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform" />
                    Thêm tin nhắn
                  </button>
                </div>
              </section>
              <div ref={chatEndRef} />
            </div>
          </div>

          {/* Right Panel: Code Preview & Settings */}
          <AnimatePresence>
            {isCodeVisible && (
              <motion.div 
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 450, opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                className="bg-gray-50/30 flex flex-col"
              >
                <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-yellow-400/10 rounded-xl">
                      <Code2 className="w-4 h-4 text-yellow-600" />
                    </div>
                    <h3 className="font-black text-gray-900 text-sm uppercase tracking-widest">Code Preview</h3>
                  </div>
                  <button 
                    onClick={copyCode}
                    className="p-2 hover:bg-gray-100 rounded-xl transition-all text-gray-400 hover:text-gray-900"
                  >
                    {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto p-8 space-y-10">
                  {/* Code Block */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-gray-400">
                      <div className="w-2 h-2 rounded-full bg-yellow-400" />
                      <span className="text-[10px] font-black uppercase">Javascript (Node.js)</span>
                    </div>
                    <pre className="bg-white border border-gray-100 rounded-[2rem] p-6 text-[12px] font-mono leading-relaxed overflow-x-auto text-gray-600 shadow-sm">
                      <code className="block whitespace-pre-wrap">
                        <span className="text-purple-500">import</span> OpenAI <span className="text-purple-500">from</span> <span className="text-green-600">"openai"</span>;{"\n"}
                        <span className="text-purple-500">const</span> client = <span className="text-purple-500">new</span> OpenAI({"{"}{"\n"}
                        {"    "}apiKey: process.env.GROQ_API_KEY,{"\n"}
                        {"    "}baseURL: <span className="text-green-600">"https://api.groq.com/openai/v1"</span>,{"\n"}
                        {"}"});{"\n\n"}
                        <span className="text-purple-500">const</span> response = <span className="text-purple-500">await</span> client.responses.create({"{"}{"\n"}
                        {"    "}model: <span className="text-green-600">"{selectedModel}"</span>,{"\n"}
                        {"    "}input: <span className="text-green-600">"{messages.filter(m => m.role === 'user').pop()?.content || "Giải thích tầm quan trọng của các mô hình ngôn ngữ tốc độ cao"}"</span>,{"\n"}
                        {"}"});{"\n"}
                        console.log(response.output_text);
                      </code>
                    </pre>
                  </div>

                  {/* Parameters */}
                  <div className="space-y-6 pt-10 border-t border-gray-100">
                    <div className="flex items-center gap-3 text-gray-400">
                      <Settings2 className="w-4 h-4" />
                      <h3 className="text-[10px] font-black uppercase tracking-widest">Parameters</h3>
                    </div>

                    <div className="space-y-6">
                      <div className="space-y-3">
                        <div className="flex justify-between text-[11px] font-black">
                          <span className="text-gray-500">Temperature</span>
                          <span className="text-yellow-600">{temperature}</span>
                        </div>
                        <input 
                          type="range" min="0" max="2" step="0.1" 
                          value={temperature} 
                          onChange={(e) => setTemperature(parseFloat(e.target.value))}
                          className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-yellow-400"
                        />
                      </div>

                      <div className="space-y-3">
                        <div className="flex justify-between text-[11px] font-black">
                          <span className="text-gray-500">Max Tokens</span>
                          <span className="text-yellow-600">{maxTokens}</span>
                        </div>
                        <input 
                          type="range" min="1" max="4096" step="1" 
                          value={maxTokens} 
                          onChange={(e) => setMaxTokens(parseInt(e.target.value))}
                          className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-yellow-400"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #e5e5e5;
        }
      `}</style>
    </div>
  );
}
