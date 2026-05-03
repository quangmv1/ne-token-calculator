"use client";

import React, { useState } from "react";
import { Card, Button } from "sdk-hyper-ui";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/Icon";

export function DocsContent() {
  const [lang, setLang] = useState("python");

  const codeExamples: Record<string, string> = {
    python: `# Cài đặt\npip install google-generativeai\n\n# Sử dụng\nimport google.generativeai as genai\n\ngenai.configure(api_key="YOUR_API_KEY")\nmodel = genai.GenerativeModel('gemini-2.0-flash')\n\nresponse = model.generate_content("Hello, world!")\nprint(response.text)`,
    javascript: `// Cài đặt\nnpm install @google/generative-ai\n\n// Sử dụng\nconst { GoogleGenerativeAI } = require("@google/generative-ai");\n\nconst genAI = new GoogleGenerativeAI("YOUR_API_KEY");\nconst model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });\n\nconst prompt = "Hello, world!";\nconst result = await model.generateContent(prompt);\nconsole.log(result.response.text());`,
    curl: `curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=YOUR_API_KEY" \\\n    -H 'Content-Type: application/json' \\\n    -X POST \\\n    -d '{ "contents": [{ "parts":[{ "text": "Hello, world!" }] }] }'`
  };

  return (
    <Card className="bg-white border-gray-200 shadow-sm p-8 rounded-[1.5rem] space-y-10">
      <div className="flex items-center gap-3">
        <Icon name="ne-ic-library" className="text-primary text-3xl" />
        <h2 className="text-2xl font-black text-gray-900">SDK & Documentation</h2>
      </div>

      <div className="space-y-6">
        <div className="flex gap-4">
          {["python", "javascript", "curl"].map((l) => (
            <Button
              key={l}
              type={lang === l ? "primary" : "secondary"}
              onClick={() => setLang(l)}
              className={cn(
                "!rounded-xl !py-2.5 !px-6 font-black capitalize !min-h-0",
                lang !== l && "text-gray-500 bg-gray-50 border-gray-100"
              )}
            >
              {l === "curl" ? "cURL" : l}
            </Button>
          ))}
        </div>

        <div className="relative group">
          <pre className="bg-[#0F172A] text-gray-300 p-8 rounded-[1.5rem] font-mono text-sm leading-relaxed overflow-x-auto whitespace-pre">
            {codeExamples[lang]}
          </pre>
          <button className="absolute top-4 right-4 p-3 bg-white/5 hover:bg-white/10 rounded-xl text-gray-400 transition-all opacity-0 group-hover:opacity-100">
            <Icon name="ne-ic-copy" className="text-lg" />
          </button>
        </div>
      </div>

      <div className="space-y-6 pt-6 border-t border-gray-50">
        <h3 className="text-xl font-black text-gray-900">Tài liệu tham khảo</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-center gap-6 p-6 border border-gray-50 rounded-[1.5rem] hover:bg-gray-50 transition-all cursor-pointer group">
            <div className="p-4 bg-gray-50 group-hover:bg-white rounded-2xl transition-all">
              <Icon name="ne-ic-terminal" className="text-2xl text-primary" />
            </div>
            <div>
              <p className="font-black text-gray-900 text-lg">API Reference</p>
              <p className="text-sm text-gray-400 font-bold">Chi tiết về tất cả endpoints và parameters</p>
            </div>
          </div>
          <div className="flex items-center gap-6 p-6 border border-gray-50 rounded-[1.5rem] hover:bg-gray-50 transition-all cursor-pointer group">
            <div className="p-4 bg-gray-50 group-hover:bg-white rounded-2xl transition-all">
              <Icon name="ne-ic-library" className="text-2xl text-primary" />
            </div>
            <div>
              <p className="font-black text-gray-900 text-lg">Quickstart Guide</p>
              <p className="text-sm text-gray-400 font-bold">Hướng dẫn bắt đầu nhanh chóng</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
