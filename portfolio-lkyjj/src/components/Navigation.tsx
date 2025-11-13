"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { t, Lang } from "@/lib/utils/i18n"
import type { IconType } from "react-icons"
import { 
  FaUser, 
  FaProjectDiagram, 
  FaChartLine, 
  FaCode, 
  FaRobot, 
  FaGamepad, 
  FaEnvelope 
} from "react-icons/fa"

export default function Navigation() {
  const pathname = usePathname()
  const [lang, setLang] = useState<Lang>('zh')

  useEffect(() => {
    const saved = localStorage.getItem('lang') as Lang | null
    if (saved) setLang(saved)
  }, [])

  const navItems: { href: string; label: string; icon: IconType }[] = [
    { href: "/about", label: t(lang, 'nav.about'), icon: FaUser },
    { href: "/projects", label: t(lang, 'nav.projects'), icon: FaProjectDiagram },
    { href: "/case-study", label: t(lang, 'nav.case'), icon: FaChartLine },
    { href: "/skills", label: t(lang, 'nav.skills'), icon: FaCode },
    { href: "/ai-bot", label: t(lang, 'nav.ai'), icon: FaRobot },
    { href: "/playground", label: t(lang, 'nav.play'), icon: FaGamepad },
    { href: "/contact", label: t(lang, 'nav.contact'), icon: FaEnvelope },
  ]

  const toggleLang = () => {
    const next = lang === 'zh' ? 'en' : 'zh'
    setLang(next)
    localStorage.setItem('lang', next)
  }

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/about" className="flex items-center gap-2 text-xl font-semibold text-black">
            <span>{t(lang, 'brand')}</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                    isActive 
                      ? "text-black bg-gray-100" 
                      : "text-gray-600 hover:text-black hover:bg-gray-100"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm">{item.label}</span>
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black" />
                  )}
                </Link>
              )
            })}
            <button onClick={toggleLang} className="ml-3 px-3 py-2 text-sm rounded border border-gray-200 hover:bg-gray-100">
              {lang === 'zh' ? t(lang, 'lang.en') : t(lang, 'lang.zh')}
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={toggleLang} className="text-gray-700 p-2 border border-gray-200 rounded">
              {lang === 'zh' ? t(lang, 'lang.en') : t(lang, 'lang.zh')}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}