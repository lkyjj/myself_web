import { NextRequest, NextResponse } from 'next/server'
import { generateChatResponse } from '@/lib/ai/chat'

export async function POST(req: NextRequest) {
  try {
    const { question, role } = await req.json()
    const memory = {
      loadMemoryVariables: async () => ({ history: '' }),
      saveContext: async () => {}
    }
    const answer = await generateChatResponse(question || '', role || '面试官模式', memory)
    return NextResponse.json({ answer })
  } catch (_error) {
    return NextResponse.json({ error: '生成回答失败' }, { status: 500 })
  }
}