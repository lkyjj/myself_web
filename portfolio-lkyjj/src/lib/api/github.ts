// GitHub API 封装
const GITHUB_USER = "lkyjj";
const GITHUB_API_URL = `https://api.github.com/users/${GITHUB_USER}/repos`;

export interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  demoUrl?: string;
  starCount: number;
  updatedAt: string;
  category: string;
}

// 获取GitHub仓库数据
export async function fetchGitHubRepos(): Promise<GitHubRepo[]> {
  try {
    const response = await fetch(GITHUB_API_URL, {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
      next: { revalidate: 86400 }, // 缓存12小时
    });

    if (!response.ok) throw new Error("GitHub API请求失败");
    const repos = await response.json();

    // 筛选并格式化数据
    const filteredRepos = repos
      .filter(
        (repo: any) =>
          repo.stargazers_count >= 1 && // star≥1
          !repo.fork && // 非fork仓库
          repo.has_wiki // 含README
      )
      .map((repo: any) => ({
        id: repo.id,
        name: repo.name,
        description: repo.description || "无项目描述",
        techStack: repo.topics || [], // 从仓库topics获取技术栈
        githubUrl: repo.html_url,
        demoUrl: repo.homepage || "", // 若仓库设置homepage则作为Demo链接
        starCount: repo.stargazers_count,
        updatedAt: repo.updated_at,
        category: "独立开发类", // 分类标签
      }));

    return filteredRepos;
  } catch (error) {
    console.error("获取GitHub仓库失败：", error);
    // 降级方案：返回本地备份的独立项目数据
    try {
      const backupRepos = require("../../../data/backup-repos.json");
      return backupRepos;
    } catch (backupError) {
      console.error("读取备份数据失败：", backupError);
      return [];
    }
  }
}