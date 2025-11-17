"use client"

import { useState, useEffect } from 'react'
import { t, Lang } from '@/lib/utils/i18n'

type ChatMessage = { role: 'user' | 'ai', content: string }

export default function AIBotPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [lang, setLang] = useState<Lang>('zh')
  const [role, setRole] = useState<string>('')
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('lang') as Lang | null;
    if (saved) {
      setLang(saved);
      setRole(saved === 'zh' ? '面试官模式' : 'Interviewer Mode');
    } else {
      setRole('面试官模式');
    }
    
    const handleStorageChange = () => {
      const updated = localStorage.getItem('lang') as Lang | null;
      if (updated) {
        setLang(updated);
        setRole(updated === 'zh' ? '面试官模式' : 'Interviewer Mode');
      }
    };
    
    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('languageChange', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('languageChange', handleStorageChange);
    };
  }, []);

  const sendMessage = async () => {
    if (!input.trim()) return
    const userMsg: ChatMessage = { role: 'user', content: input }
    setMessages((m) => [...m, userMsg])
    setInput('')
    setLoading(true)
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: userMsg.content, role })
      })
      const data = await res.json()
      const aiMsg: ChatMessage = { role: 'ai', content: data.answer || (lang === 'zh' ? '暂时无法生成回答' : 'Unable to generate response') }
      setMessages((m) => [...m, aiMsg])
    } catch {
    } finally {
      setLoading(false)
    }
  }

  const roles = lang === 'zh' 
    ? ['面试官模式', '开发者模式', '合作方模式']
    : ['Interviewer Mode', 'Developer Mode', 'Partner Mode'];

  return (
    <div className="min-h-screen bg-white text-black py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-2">{t(lang, 'ai.title')}</h1>
            <p className="text-gray-600">{t(lang, 'ai.subtitle')}</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4 flex items-center gap-3">
            <span className="text-sm text-gray-700">{t(lang, 'ai.role')}</span>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="bg-white text-black rounded px-3 py-2 border border-gray-200"
            >
              {roles.map((r) => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 h-[480px] overflow-y-auto mb-4">
            {messages.length === 0 ? (
              <div className="text-center text-gray-600">{t(lang, 'ai.placeholder.empty')}</div>
            ) : (
              <div className="space-y-4">
                {messages.map((m, i) => (
                  <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] px-4 py-3 rounded-lg ${m.role === 'user' ? 'bg-black text-white' : 'bg-gray-100 text-black'} whitespace-pre-wrap`}>{m.content}</div>
                  </div>
                ))}
                {loading && (
                  <div className="flex justify-start">
                    <div className="px-4 py-3 rounded-lg bg-gray-100 text-black">
                      {t(lang, 'ai.thinking')}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t(lang, 'ai.placeholder.input')}
              className="flex-1 px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-black"
            />
            <button
              onClick={sendMessage}
              disabled={loading}
              className="px-6 py-3 bg-black hover:opacity-90 disabled:opacity-60 text-white rounded-lg"
            >
              {t(lang, 'ai.send')}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}