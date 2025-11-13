import { NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'data', 'projects.json')
    const data = await fs.readFile(filePath, 'utf-8')
    const json = JSON.parse(data)
    return NextResponse.json(json, { status: 200 })
  } catch (error) {
    console.error('读取项目数据失败:', error)
    return NextResponse.json({ error: '读取项目数据失败' }, { status: 500 })
  }
}