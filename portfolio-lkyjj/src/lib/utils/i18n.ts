export type Lang = 'zh' | 'en'

const dict: Record<Lang, Record<string, string>> = {
  zh: {
    'brand': 'Lkyjj',
    'nav.about': '关于我',
    'nav.projects': '项目',
    'nav.case': '案例复盘',
    'nav.skills': '技能矩阵',
    'nav.ai': 'AI助手',
    'nav.play': '技术演示',
    'nav.contact': '联系我',
    'home.title': 'Lkyjj — AI 全栈产品+研发 个人作品集',
    'home.subtitle': '聚焦 LLM/RAG/Agent 与全栈落地，用数据与 Demo 证明能力',
    'home.about.desc': '个人简介、经历时间轴与核心能力标签',
    'home.projects.desc': '开源与实习项目汇总，支持分类筛选与跳转',
    'home.case.desc': '精选 3 个标杆案例的深度复盘',
    'home.skills.desc': '四维技能可视化与详情列表',
    'home.ai.desc': '多角色对话，基于知识库的回答',
    'home.contact.desc': '联系方式与合作咨询表单',
    'lang.zh': '中',
    'lang.en': 'EN'
  },
  en: {
    'brand': 'Lkyjj',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.case': 'Case Study',
    'nav.skills': 'Skills',
    'nav.ai': 'AI Bot',
    'nav.play': 'Playground',
    'nav.contact': 'Contact',
    'home.title': 'Lkyjj — AI Product & Full‑stack Portfolio',
    'home.subtitle': 'Focus on LLM/RAG/Agent and full‑stack delivery, proven by data and demos',
    'home.about.desc': 'Profile, timeline and core capabilities',
    'home.projects.desc': 'Open‑source and internship projects with filters',
    'home.case.desc': 'Three in‑depth case studies',
    'home.skills.desc': 'Four‑dimensional skills visualization and list',
    'home.ai.desc': 'Multi‑role chat based on the knowledge base',
    'home.contact.desc': 'Contact and collaboration form',
    'lang.zh': 'ZH',
    'lang.en': 'EN'
  }
}

export function t(lang: Lang, key: string): string {
  return dict[lang][key] ?? key
}