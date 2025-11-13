"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { t, Lang } from "@/lib/utils/i18n"

export default function Home() {
  const [lang, setLang] = useState<Lang>('zh')
  useEffect(() => {
    const saved = localStorage.getItem('lang') as Lang | null
    if (saved) setLang(saved)
  }, [])
  return (
    <div className="min-h-screen bg-white text-black">
      <section className="py-20">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <div className="mb-8">
            <h1 className="text-5xl font-bold mb-3">{t(lang,'home.title')}</h1>
            <p className="text-lg text-gray-600 mb-8">{t(lang,'home.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/about" className="bg-white border border-gray-200 rounded-lg p-6 hover:border-black transition-colors">
              <h3 className="text-lg font-semibold mb-2">{t(lang,'nav.about')}</h3>
              <p className="text-gray-600 text-sm">{t(lang,'home.about.desc')}</p>
            </Link>
            <Link href="/projects" className="bg-white border border-gray-200 rounded-lg p-6 hover:border-black transition-colors">
              <h3 className="text-lg font-semibold mb-2">{t(lang,'nav.projects')}</h3>
              <p className="text-gray-600 text-sm">{t(lang,'home.projects.desc')}</p>
            </Link>
            <Link href="/case-study" className="bg-white border border-gray-200 rounded-lg p-6 hover:border-black transition-colors">
              <h3 className="text-lg font-semibold mb-2">{t(lang,'nav.case')}</h3>
              <p className="text-gray-600 text-sm">{t(lang,'home.case.desc')}</p>
            </Link>
            <Link href="/skills" className="bg-white border border-gray-200 rounded-lg p-6 hover:border-black transition-colors">
              <h3 className="text-lg font-semibold mb-2">{t(lang,'nav.skills')}</h3>
              <p className="text-gray-600 text-sm">{t(lang,'home.skills.desc')}</p>
            </Link>
            <Link href="/ai-bot" className="bg-white border border-gray-200 rounded-lg p-6 hover:border-black transition-colors">
              <h3 className="text-lg font-semibold mb-2">{t(lang,'nav.ai')}</h3>
              <p className="text-gray-600 text-sm">{t(lang,'home.ai.desc')}</p>
            </Link>
            <Link href="/contact" className="bg-white border border-gray-200 rounded-lg p-6 hover:border-black transition-colors">
              <h3 className="text-lg font-semibold mb-2">{t(lang,'nav.contact')}</h3>
              <p className="text-gray-600 text-sm">{t(lang,'home.contact.desc')}</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
