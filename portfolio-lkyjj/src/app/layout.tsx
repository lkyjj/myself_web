import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/Navigation"

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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black min-h-screen`}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <footer className="bg-white border-t border-gray-200 py-8">
          <div className="container mx-auto px-4 text-center">
            <div className="mb-2 text-sm text-gray-500">© 2025 Lkyjj</div>
            <div className="flex items-center justify-center gap-4">
              <a href="https://github.com/lkyjj" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black">GitHub</a>
              <span className="text-gray-300">•</span>
              <span className="text-gray-600 text-sm">1525494310@qq.com</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
