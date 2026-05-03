"use client";

import React, { useRef, useState, useEffect } from "react";
import { Icon, type IconType } from "@/components/Icon";
import { cn } from "@/lib/utils";

interface FileUploadProps {
  accept: string;
  icon: IconType;
  label: string;
  description: string;
  onFileSelect: (file: File | null) => void;
  className?: string;
}

export function FileUpload({ accept, icon, label, description, onFileSelect, className }: FileUploadProps) {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!selectedFile) {
      setPreviewUrl(null);
      return;
    }

    const url = URL.createObjectURL(selectedFile);
    setPreviewUrl(url);

    // Clean up to avoid memory leaks
    return () => URL.revokeObjectURL(url);
  }, [selectedFile]);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setSelectedFile(file);
      onFileSelect(file);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      onFileSelect(file);
    }
  };

  const onButtonClick = () => {
    inputRef.current?.click();
  };

  const clearFile = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedFile(null);
    onFileSelect(null);
  };

  const isImage = selectedFile?.type.startsWith("image/");
  const isVideo = selectedFile?.type.startsWith("video/");

  return (
    <div
      className={cn(
        "relative h-80 border-2 border-dashed rounded-[2rem] flex flex-col items-center justify-center transition-all cursor-pointer group overflow-hidden",
        dragActive ? "border-primary bg-primary/5" : "border-gray-200 bg-gray-50/50 hover:bg-gray-100",
        selectedFile && "border-primary/30 bg-white shadow-inner",
        className
      )}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
      onClick={onButtonClick}
    >
      <input
        ref={inputRef}
        type="file"
        className="hidden"
        accept={accept}
        onChange={handleChange}
      />

      {selectedFile ? (
        <div className="relative w-full h-full flex flex-col items-center justify-center p-6">
          {/* Media Preview Overlay */}
          <div className="absolute inset-0 z-0">
            {isImage && previewUrl && (
              <img 
                src={previewUrl} 
                alt="Preview" 
                className="w-full h-full object-cover opacity-20 blur-sm"
              />
            )}
            {isVideo && previewUrl && (
              <video 
                src={previewUrl} 
                className="w-full h-full object-cover opacity-20 blur-sm"
                muted
              />
            )}
          </div>

          {/* Actual Content */}
          <div className="relative z-10 flex flex-col items-center gap-4 w-full text-center">
            <div className="relative w-40 h-28 bg-gray-900/5 rounded-2xl overflow-hidden shadow-lg border border-white/50 backdrop-blur-md flex items-center justify-center group-hover:scale-105 transition-transform">
              {isImage && previewUrl ? (
                <img src={previewUrl} alt="File" className="w-full h-full object-cover" />
              ) : isVideo && previewUrl ? (
                <video src={previewUrl} className="w-full h-full object-cover" muted autoPlay loop />
              ) : (
                <Icon name={icon} className="text-3xl text-primary" />
              )}
            </div>
            
            <div className="space-y-1">
              <p className="text-gray-900 font-black truncate max-w-[300px]">{selectedFile.name}</p>
              <div className="flex items-center justify-center gap-2">
                <span className="text-[10px] bg-primary/20 text-primary font-black px-2 py-0.5 rounded uppercase">
                  {selectedFile.type.split('/')[1] || 'FILE'}
                </span>
                <span className="text-gray-400 text-xs font-bold uppercase tracking-wider">
                  {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
                </span>
              </div>
            </div>

            <button
              onClick={clearFile}
              className="mt-2 text-[10px] font-black text-red-500 uppercase tracking-[0.2em] hover:text-red-600 transition-all hover:tracking-[0.3em]"
            >
              Thay đổi file
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-4 p-8 text-center">
          <div className="p-6 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all group-hover:scale-110 duration-500">
            <Icon name={icon} className="text-3xl text-primary" />
          </div>
          <div className="space-y-1">
            <p className="text-gray-900 font-black text-lg">{label}</p>
            <p className="text-gray-400 text-sm font-medium">
              Hoặc <span className="text-primary underline">chọn từ máy tính</span>
            </p>
          </div>
          <p className="text-gray-400 text-[10px] font-black uppercase tracking-[0.2em] mt-4 opacity-60">
            {description}
          </p>
        </div>
      )}
    </div>
  );
}
