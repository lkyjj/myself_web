'use client';

import Timeline from '@/components/about/Timeline';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { t, Lang } from '@/lib/utils/i18n';

export default function AboutPage() {
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

  const skillCategories = [
    {
      title: t(lang, 'about.skills.ai'),
      items: ["LLM/RAG/Agent", "LoRA Fine-tuning", "Prompt Engineering"]
    },
    {
      title: t(lang, 'about.skills.product'), 
      items: ["PRD Design", "AB Testing", "Requirement Insights"]
    },
    {
      title: t(lang, 'about.skills.fullstack'),
      items: ["React/TypeScript", "Node/Python", "MySQL"]
    },
    {
      title: t(lang, 'about.skills.tools'),
      items: ["Coze/Dify", "n8n Workflow", "Vercel"]
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <div className="w-24 h-24 rounded-full border border-gray-300 flex items-center justify-center text-3xl font-semibold mx-auto mb-6">
                {lang === 'zh' ? '刘' : 'L'}
              </div>
              <h1 className="text-5xl font-bold mb-4">{t(lang, 'about.name')}</h1>
              <p className="text-xl text-gray-600 mb-6">{t(lang, 'about.title')}</p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
                <span>{t(lang, 'about.age')}</span>
                <span>•</span>
                <span>{t(lang, 'about.university')}</span>
                <span>•</span>
                <span>UNSW {t(lang, 'about.master')}</span>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">{t(lang, 'about.statement.title')}</h2>
              <p className="text-lg leading-relaxed text-gray-700">
                {t(lang, 'about.statement.content')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:bg-gray-50 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="text-lg font-semibold mb-3">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item) => (
                      <li key={item} className="text-gray-700 text-sm">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-gray-50">
        <Timeline lang={lang} />
      </section>

      {/* Contact Info Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-4">{t(lang, 'about.contact.title')}</h2>
              <p className="text-gray-400">{t(lang, 'about.contact.subtitle')}</p>
            </motion.div>
            
            <motion.div
              className="bg-white border border-gray-200 rounded-lg p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">📞</span>
                  </div>
                  <h4 className="font-semibold mb-2">{t(lang, 'about.contact.phone')}</h4>
                  <p className="text-gray-600 text-sm">18370038070</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-green-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">✉️</span>
                  </div>
                  <h4 className="font-semibold mb-2">{t(lang, 'about.contact.email')}</h4>
                  <p className="text-gray-600 text-sm">1525494310@qq.com</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-purple-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">💻</span>
                  </div>
                  <h4 className="font-semibold mb-2">{t(lang, 'about.contact.github')}</h4>
                  <a 
                    href="https://github.com/lkyjj" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-black hover:underline text-sm"
                  >
                    github.com/lkyjj
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}