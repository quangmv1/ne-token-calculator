"use client";

import React from "react";
import { DocsContent } from "@/views/Homepage/components/DocsContent";

export default function DocsPage() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-10 space-y-8 w-full">
      <header>
        <h1 className="text-4xl font-black text-gray-900 mb-2">SDK & Documentation</h1>
        <p className="text-gray-500 font-medium">Hướng dẫn tích hợp và tài liệu API chi tiết.</p>
      </header>

      <DocsContent />
    </div>
  );
}
