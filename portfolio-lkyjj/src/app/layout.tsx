import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lkyjj - AI全栈产品+研发个人作品集",
  description: "刘康宇的个人作品集网站，展示AI产品经理+全栈研发复合型能力，包含项目展示、技术演示、AI交互等功能",
  keywords: "AI产品经理,全栈开发,大模型应用,RAG,Agent,React,Node.js,TypeScript",
  authors: [{ name: "刘康宇" }],
  openGraph: {
    title: "Lkyjj - AI全栈产品+研发个人作品集",
    description: "刘康宇的个人作品集网站，展示AI产品经理+全栈研发复合型能力",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 text-white min-h-screen`}
      >
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        
        {/* Footer */}
        <footer className="bg-gray-800 border-t border-gray-700 py-8">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded" />
              <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Lkyjj
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              © 2025 刘康宇. 专注AI产品落地与全栈开发
            </p>
            <div className="flex items-center justify-center gap-4 mt-4">
              <a 
                href="https://github.com/lkyjj" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                GitHub
              </a>
              <span className="text-gray-600">•</span>
              <span className="text-gray-400 text-sm">1525494310@qq.com</span>
              <span className="text-gray-600">•</span>
              <span className="text-gray-400 text-sm">18370038070</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
