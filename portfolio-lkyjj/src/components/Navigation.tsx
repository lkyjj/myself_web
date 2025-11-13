"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { 
  FaUser, 
  FaProjectDiagram, 
  FaChartLine, 
  FaCode, 
  FaRobot, 
  FaGamepad, 
  FaEnvelope 
} from "react-icons/fa";

const navItems = [
  { href: "/about", label: "关于我", icon: FaUser },
  { href: "/projects", label: "项目", icon: FaProjectDiagram },
  { href: "/case-study", label: "案例复盘", icon: FaChartLine },
  { href: "/skills", label: "技能矩阵", icon: FaCode },
  { href: "/ai-bot", label: "AI助手", icon: FaRobot },
  { href: "/playground", label: "技术演示", icon: FaGamepad },
  { href: "/contact", label: "联系我", icon: FaEnvelope },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="bg-gray-800 border-b border-gray-700 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/about" className="flex items-center gap-2 text-xl font-bold">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg" />
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Lkyjj
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                    isActive 
                      ? "text-white bg-gray-700" 
                      : "text-gray-300 hover:text-white hover:bg-gray-700/50"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-gray-300 hover:text-white p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}