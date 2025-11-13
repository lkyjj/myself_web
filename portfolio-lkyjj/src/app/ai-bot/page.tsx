"use client"

import { useState } from 'react'

type ChatMessage = { role: 'user' | 'ai', content: string }

const roles = ['面试官模式', '开发者模式', '合作方模式']

export default function AIBotPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [role, setRole] = useState<string>(roles[0])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

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
      const aiMsg: ChatMessage = { role: 'ai', content: data.answer || '暂时无法生成回答' }
      setMessages((m) => [...m, aiMsg])
    } catch {
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white text-black py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-2">AI 助手</h1>
            <p className="text-gray-600">基于知识库与角色模式的对话</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4 flex items-center gap-3">
            <span className="text-sm text-gray-700">角色</span>
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
              <div className="text-center text-gray-600">开始提问吧，如：美团实习的核心优化是什么？</div>
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
                      正在思考...
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
              placeholder="请输入问题"
              className="flex-1 px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-black"
            />
            <button
              onClick={sendMessage}
              disabled={loading}
              className="px-6 py-3 bg-black hover:opacity-90 disabled:opacity-60 text-white rounded-lg"
            >
              发送
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}