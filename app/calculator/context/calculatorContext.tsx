"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { type IconType } from "@/components/Icon";

export type Tab = "text" | "image" | "video";

interface Token {
  text: string;
  id: number;
}

interface CalculatorContextType {
  activeTab: Tab;
  inputValue: string;
  selectedFile: File | null;
  tokenCount: number;
  charCount: number;
  tokens: Token[];
  isLoading: boolean;
  setInputValue: (value: string) => void;
  setSelectedFile: (file: File | null) => void;
  handleTabChange: (tab: Tab) => void;
  calculateTokens: () => Promise<void>;
  resetData: () => void;
  tabIcons: Record<Tab, IconType>;
}

const CalculatorContext = createContext<CalculatorContextType | undefined>(undefined);

export const CalculatorProvider = ({ children }: { children: ReactNode }) => {
  const [activeTab, setActiveTab] = useState<Tab>("text");
  const [inputValue, setInputValue] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [tokenCount, setTokenCount] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [tokens, setTokens] = useState<Token[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const calculateTokens = async () => {
    if (activeTab === "text") {
      setIsLoading(true);
      try {
        const response = await fetch("/api/tokenize", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text: inputValue }),
        });
        const data = await response.json();
        setTokenCount(data.tokenCount);
        setCharCount(data.charCount);
        setTokens(data.tokens);
      } catch (error) {
        console.error("Tokenization failed", error);
      } finally {
        setIsLoading(false);
      }
    } else if (activeTab === "image" && selectedFile) {
      setTokenCount(Math.ceil((selectedFile.size / 1024) * 1.5));
      setCharCount(0);
      setTokens([]);
    } else if (activeTab === "video" && selectedFile) {
      setTokenCount(Math.ceil((selectedFile.size / (1024 * 1024)) * 100));
      setCharCount(0);
      setTokens([]);
    }
  };

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
    setSelectedFile(null);
    setTokenCount(0);
    setCharCount(0);
    setTokens([]);
  };

  const resetData = () => {
    setInputValue("");
    setSelectedFile(null);
    setTokenCount(0);
    setCharCount(0);
    setTokens([]);
  };

  const tabIcons: Record<Tab, IconType> = {
    text: "ne-ic-tool-text",
    image: "ne-ic-camera",
    video: "ne-ic-play"
  };

  return (
    <CalculatorContext.Provider
      value={{
        activeTab,
        inputValue,
        selectedFile,
        tokenCount,
        charCount,
        tokens,
        isLoading,
        setInputValue,
        setSelectedFile,
        handleTabChange,
        calculateTokens,
        resetData,
        tabIcons,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};

export const useTokenCalculator = () => {
  const context = useContext(CalculatorContext);
  if (context === undefined) {
    throw new Error("useCalculator must be used within a CalculatorProvider");
  }
  return context;
};
