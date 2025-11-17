'use client';

import ContactForm from '@/components/contact/ContactForm'
import ContactInfo from '@/components/contact/ContactInfo'
import { useEffect, useState } from 'react'
import { t, Lang } from '@/lib/utils/i18n'

export default function ContactPage() {
  const [lang, setLang] = useState<Lang>('zh');

  useEffect(() => {
    const saved = localStorage.getItem('lang') as Lang | null;
    if (saved) setLang(saved);
    
    const handleStorageChange = () => {
      const updated = localStorage.getItem('lang') as Lang | null;
      if (updated) setLang(updated);
    };
    
    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('languageChange', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('languageChange', handleStorageChange);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-black py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">{t(lang, 'contact.title')}</h1>
          <p className="text-gray-600">{t(lang, 'contact.subtitle')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ContactInfo lang={lang} />
          <ContactForm lang={lang} />
        </div>
      </div>
    </div>
  )
}