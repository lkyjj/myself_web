import { NextRequest, NextResponse } from 'next/server';
import { fetchGitHubRepos } from '@/lib/api/github';

export async function GET(request: NextRequest) {
  try {
    const repos = await fetchGitHubRepos();
    return NextResponse.json(repos);
  } catch (error) {
    console.error('GitHub API 错误:', error);
    return NextResponse.json(
      { error: '获取GitHub仓库失败' },
      { status: 500 }
    );
  }
}