"use client";

import { cn } from "@/lib/utils";
import { Card, Button } from "sdk-hyper-ui";
import { Icon } from "@/components/Icon";
import { FileUpload } from "@/components/FileUpload";
import { CalculatorProvider, useTokenCalculator } from "./context/calculatorContext";
import { ResultsCard } from "./components/ResultsCard";

function CalculatorContent() {
  const {
    activeTab,
    inputValue,
    setInputValue,
    selectedFile,
    setSelectedFile,
    tokens,
    isLoading,
    handleTabChange,
    calculateTokens,
    resetData,
    tabIcons,
  } = useTokenCalculator();

  const tokenColors = [
    "bg-blue-100 text-blue-800",
    "bg-purple-100 text-purple-800",
    "bg-pink-100 text-pink-800",
    "bg-yellow-100 text-yellow-800",
    "bg-green-100 text-green-800",
    "bg-indigo-100 text-indigo-800",
  ];

  return (
    <div className="max-w-7xl mx-auto px-8 py-10 space-y-10 w-full">
      <header>
        <h1 className="text-4xl font-black text-gray-900 mb-2">Token Calculator</h1>
        <p className="text-gray-500 font-medium">Ước tính chi phí sử dụng cho các loại dữ liệu khác nhau.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="flex justify-between items-center bg-gray-100 rounded-2xl p-1.5 border border-gray-200">
            <div className="flex">
              {(["text", "image", "video"] as const).map((tab) => (
                <Button
                  key={tab}
                  type={activeTab === tab ? "secondary" : "ghostSecondary"}
                  onClick={() => handleTabChange(tab)}
                  className={cn(
                    "mr-2 last:mr-0 px-8 py-2.5 !rounded-xl text-sm font-bold transition-all flex items-center gap-2 border border-transparent shadow-none",
                    activeTab === tab && "!bg-white text-gray-900 shadow-sm !border-gray-100"
                  )}
                >
                  <Icon name={tabIcons[tab]} className={cn("text-lg mr-2", activeTab === tab ? "text-primary" : "text-gray-400")} />
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </Button>
              ))}
            </div>
            <Button
              type="ghostSecondary"
              onClick={resetData}
              className="!px-4 !py-2 !rounded-xl text-xs font-black uppercase tracking-widest text-gray-500 hover:text-red-500 transition-colors"
            >
              <Icon name="ne-ic-delete" className="mr-2" />
              Clear
            </Button>
          </div>

          <Card className="p-8 bg-white border-gray-200 shadow-sm rounded-[2rem] space-y-8">
            {activeTab === "text" && (
              <div className="space-y-6">
                <div className="space-y-4">
                  <label className="text-sm font-black text-gray-900 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <span>Nội dung văn bản</span>
                      <Button
                        type="ghostSecondary"
                        size="sm"
                        onClick={() => setInputValue("Many words map to one token, but some don't: indivisible.\n\nUnicode characters like emojis may be split into many tokens containing the underlying bytes: 🤚🏾\n\nSequences of characters commonly found next to each other may be grouped together: 1234567890")}
                        className="!text-[10px] !px-3 !py-1 !rounded-full text-gray-400 uppercase tracking-widest font-black !min-h-0"
                      >
                        Ví dụ
                      </Button>
                    </div>
                    <span className="text-gray-400 font-bold">{inputValue.length} characters</span>
                  </label>
                  <textarea
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Dán nội dung của bạn vào đây..."
                    className="w-full h-72 bg-gray-50 border border-gray-100 rounded-[1.5rem] p-6 text-gray-900 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all resize-none font-medium"
                  />
                </div>

                {tokens.length > 0 && (
                  <div className="space-y-4 animate-in fade-in slide-in-from-top-2 duration-500">
                    <label className="text-sm font-black text-gray-900">Tokens Preview</label>
                    <div className="p-6 bg-gray-50 border border-gray-100 rounded-[1.5rem] min-h-[100px] flex flex-wrap gap-0.5 leading-relaxed overflow-hidden">
                      {tokens.map((token, index) => (
                        <span
                          key={index}
                          className={cn(
                            "px-0.5 rounded-sm text-sm font-medium whitespace-pre-wrap transition-colors hover:ring-1 ring-gray-400",
                            tokenColors[index % tokenColors.length]
                          )}
                          title={`Token ID: ${token.id}`}
                        >
                          {token.text}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === "image" && (
              <FileUpload
                accept="image/*"
                icon="ne-ic-camera"
                label="Kéo thả hình ảnh vào đây"
                description="Hỗ trợ PNG, JPG, WEBP (Max 20MB)"
                onFileSelect={setSelectedFile}
              />
            )}

            {activeTab === "video" && (
              <FileUpload
                accept="video/*"
                icon="ne-ic-play"
                label="Kéo thả video vào đây"
                description="Hỗ trợ MP4, MOV (Max 100MB)"
                onFileSelect={setSelectedFile}
              />
            )}

            <Button
              onClick={calculateTokens}
              type="primary"
              size="xl"
              isFullWidth
              className="!rounded-2xl shadow-xl shadow-primary/20 flex items-center justify-center gap-3"
              isDisabled={activeTab === "text" ? !inputValue.trim() : !selectedFile}
              isLoading={isLoading}
            >
              <Icon name="ne-ic-asset-statistics" /> Tính toán Token
            </Button>
          </Card>
        </div>

        <ResultsCard />
      </div>
    </div>
  );
}

export default function TokenCalculator() {
  return (
    <CalculatorProvider>
      <CalculatorContent />
    </CalculatorProvider>
  );
}
