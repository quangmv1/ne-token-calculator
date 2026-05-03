import type { Metadata } from "next";
import "sdk-hyper-ui/app/globals.css"; // Import submodule styles
import "./globals.css";
import "../styles/icons.css"; // Import Icomoon icons
import { Sidebar } from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "Ne Console | Dashboard",
  description: "Advanced AI Studio dashboard clone.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="light">
      <body className="bg-[#F7F7F7] h-screen font-sans antialiased text-black overflow-hidden">
        <div className="flex h-full">
          <Sidebar />
          <main className="flex-1 overflow-y-auto bg-[#F7F7F7]">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
