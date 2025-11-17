export type Lang = 'zh' | 'en'

const dict: Record<Lang, Record<string, string>> = {
  zh: {
    // Navigation
    'brand': 'Lkyjj',
    'nav.about': '关于我',
    'nav.projects': '项目',
    'nav.case': '案例复盘',
    'nav.skills': '技能矩阵',
    'nav.ai': 'AI助手',
    'nav.play': '技术演示',
    'nav.contact': '联系我',
    
    // Home Page
    'home.title': 'Lkyjj — AI 全栈产品+研发 个人作品集',
    'home.subtitle': '聚焦 LLM/RAG/Agent 与全栈落地，用数据与 Demo 证明能力',
    'home.about.desc': '个人简介、经历时间轴与核心能力标签',
    'home.projects.desc': '开源与实习项目汇总，支持分类筛选与跳转',
    'home.case.desc': '精选 3 个标杆案例的深度复盘',
    'home.skills.desc': '四维技能可视化与详情列表',
    'home.ai.desc': '多角色对话，基于知识库的回答',
    'home.contact.desc': '联系方式与合作咨询表单',
    
    // About Page
    'about.name': '刘康宇',
    'about.title': 'AI产品经理 + 全栈研发工程师',
    'about.age': '22岁',
    'about.university': '东华理工大学',
    'about.master': '硕士',
    'about.statement.title': '个人宣言',
    'about.statement.content': '专注LLM应用落地，用产品思维驱动技术价值。致力于将前沿AI技术转化为用户价值，通过数据驱动的产品迭代，创造真正有用的智能应用。',
    'about.skills.ai': 'AI技术',
    'about.skills.product': '产品能力',
    'about.skills.fullstack': '全栈开发',
    'about.skills.tools': '工具链',
    'about.contact.title': '联系方式',
    'about.contact.subtitle': '期待与你的合作',
    'about.contact.phone': '电话',
    'about.contact.email': '邮箱',
    'about.contact.github': 'GitHub',
    
    // Timeline
    'timeline.title': '经历时间轴',
    'timeline.subtitle': '从校园到职场的成长历程',
    'timeline.internship': '实习',
    'timeline.education': '教育',
    
    // Projects Page
    'projects.title': '我的项目',
    'projects.subtitle': '展示我的技术能力和项目经验',
    'projects.filter.all': '全部',
    'projects.filter.product': '产品落地类',
    'projects.filter.indie': '独立开发类',
    'projects.filter.ai': 'AI专项类',
    'projects.empty': '暂无该分类下的项目',
    'projects.loading': '加载中...',
    'projects.demo': '在线演示',
    'projects.github': 'GitHub',
    
    // Skills Page
    'skills.title': '技能矩阵',
    'skills.subtitle': '四维技能可视化展示：AI技术、产品能力、前端开发、后端开发',
    'skills.radar': '雷达图',
    'skills.list': '列表视图',
    'skills.filter.category': '所有分类',
    'skills.filter.proficiency': '所有熟练度',
    'skills.category.ai': 'AI技术',
    'skills.category.product': '产品能力',
    'skills.category.frontend': '前端开发',
    'skills.category.backend': '后端开发',
    'skills.proficiency.expert': '熟练掌握',
    'skills.proficiency.proficient': '掌握',
    'skills.proficiency.familiar': '了解',
    'skills.related': '相关项目:',
    'skills.stats.title': '技能统计',
    'skills.radar.title': '技能雷达图',
    'skills.items': '项技能',
    
    // Case Study Page
    'case.title': '案例复盘',
    'case.subtitle': '深度剖析代表性项目，从需求洞察到技术落地的完整思考过程',
    'case.keyMetrics': '关键指标',
    'case.before': '优化前',
    'case.after': '优化后',
    'case.viewDetail': '查看详细复盘',
    'case.footer': '每个案例都包含完整的需求分析、方案设计、技术实现、数据成果和复盘总结',
    
    // AI Bot Page
    'ai.title': 'AI 助手',
    'ai.subtitle': '基于知识库与角色模式的对话',
    'ai.role': '角色',
    'ai.role.interviewer': '面试官模式',
    'ai.role.developer': '开发者模式',
    'ai.role.partner': '合作方模式',
    'ai.placeholder.empty': '开始提问吧，如：美团实习的核心优化是什么？',
    'ai.placeholder.input': '请输入问题',
    'ai.send': '发送',
    'ai.thinking': '正在思考...',
    
    // Contact Page
    'contact.title': '联系我',
    'contact.subtitle': '期待与你的合作',
    'contact.info.title': '联系方式',
    'contact.form.title': '合作咨询',
    'contact.form.name': '姓名',
    'contact.form.email': '邮箱',
    'contact.form.type': '合作类型',
    'contact.form.message': '留言内容',
    'contact.form.placeholder.name': '请输入你的姓名',
    'contact.form.placeholder.email': '请输入你的邮箱',
    'contact.form.placeholder.message': '请详细描述你的需求或想法...',
    'contact.form.submit': '发送消息',
    'contact.form.submitting': '发送中...',
    'contact.form.success.title': '提交成功！',
    'contact.form.success.message': '已收到你的消息，24小时内回复',
    'contact.copy': '复制',
    'contact.copied': '已复制!',
    'contact.type.tech': '技术合作',
    'contact.type.project': '项目咨询',
    'contact.type.ai': 'AI方案讨论',
    'contact.type.other': '其他',
    
    // Language
    'lang.zh': '中',
    'lang.en': 'EN'
  },
  en: {
    // Navigation
    'brand': 'Lkyjj',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.case': 'Case Study',
    'nav.skills': 'Skills',
    'nav.ai': 'AI Bot',
    'nav.play': 'Playground',
    'nav.contact': 'Contact',
    
    // Home Page
    'home.title': 'Lkyjj — AI Product & Full‑stack Portfolio',
    'home.subtitle': 'Focus on LLM/RAG/Agent and full‑stack delivery, proven by data and demos',
    'home.about.desc': 'Profile, timeline and core capabilities',
    'home.projects.desc': 'Open‑source and internship projects with filters',
    'home.case.desc': 'Three in‑depth case studies',
    'home.skills.desc': 'Four‑dimensional skills visualization and list',
    'home.ai.desc': 'Multi‑role chat based on the knowledge base',
    'home.contact.desc': 'Contact and collaboration form',
    
    // About Page
    'about.name': 'Liu Kangyu',
    'about.title': 'AI Product Manager + Full-stack Engineer',
    'about.age': '22 years old',
    'about.university': 'East China University of Technology',
    'about.master': 'Master',
    'about.statement.title': 'Personal Statement',
    'about.statement.content': 'Focus on LLM application implementation, driving technical value with product thinking. Committed to transforming cutting-edge AI technology into user value, creating truly useful intelligent applications through data-driven product iteration.',
    'about.skills.ai': 'AI Technology',
    'about.skills.product': 'Product Skills',
    'about.skills.fullstack': 'Full-stack Dev',
    'about.skills.tools': 'Tool Chain',
    'about.contact.title': 'Contact Information',
    'about.contact.subtitle': 'Looking forward to collaborating with you',
    'about.contact.phone': 'Phone',
    'about.contact.email': 'Email',
    'about.contact.github': 'GitHub',
    
    // Timeline
    'timeline.title': 'Experience Timeline',
    'timeline.subtitle': 'Journey from campus to workplace',
    'timeline.internship': 'Internship',
    'timeline.education': 'Education',
    
    // Projects Page
    'projects.title': 'My Projects',
    'projects.subtitle': 'Showcase my technical skills and project experience',
    'projects.filter.all': 'All',
    'projects.filter.product': 'Product',
    'projects.filter.indie': 'Independent',
    'projects.filter.ai': 'AI Specialized',
    'projects.empty': 'No projects in this category',
    'projects.loading': 'Loading...',
    'projects.demo': 'Live Demo',
    'projects.github': 'GitHub',
    
    // Skills Page
    'skills.title': 'Skills Matrix',
    'skills.subtitle': 'Four-dimensional skills visualization: AI Technology, Product Skills, Frontend, Backend',
    'skills.radar': 'Radar Chart',
    'skills.list': 'List View',
    'skills.filter.category': 'All Categories',
    'skills.filter.proficiency': 'All Proficiency',
    'skills.category.ai': 'AI Technology',
    'skills.category.product': 'Product Skills',
    'skills.category.frontend': 'Frontend Dev',
    'skills.category.backend': 'Backend Dev',
    'skills.proficiency.expert': 'Expert',
    'skills.proficiency.proficient': 'Proficient',
    'skills.proficiency.familiar': 'Familiar',
    'skills.related': 'Related Projects:',
    'skills.stats.title': 'Skills Statistics',
    'skills.radar.title': 'Skills Radar Chart',
    'skills.items': ' skills',
    
    // Case Study Page
    'case.title': 'Case Studies',
    'case.subtitle': 'In-depth analysis of representative projects, complete thinking process from requirement insights to technical implementation',
    'case.keyMetrics': 'Key Metrics',
    'case.before': 'Before',
    'case.after': 'After',
    'case.viewDetail': 'View Details',
    'case.footer': 'Each case includes complete requirement analysis, solution design, technical implementation, data results and retrospective summary',
    
    // AI Bot Page
    'ai.title': 'AI Assistant',
    'ai.subtitle': 'Knowledge base-driven conversation with role modes',
    'ai.role': 'Role',
    'ai.role.interviewer': 'Interviewer Mode',
    'ai.role.developer': 'Developer Mode',
    'ai.role.partner': 'Partner Mode',
    'ai.placeholder.empty': 'Start asking, e.g.: What is the core optimization at Meituan?',
    'ai.placeholder.input': 'Enter your question',
    'ai.send': 'Send',
    'ai.thinking': 'Thinking...',
    
    // Contact Page
    'contact.title': 'Contact Me',
    'contact.subtitle': 'Looking forward to collaborating with you',
    'contact.info.title': 'Contact Information',
    'contact.form.title': 'Collaboration Inquiry',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.type': 'Collaboration Type',
    'contact.form.message': 'Message',
    'contact.form.placeholder.name': 'Enter your name',
    'contact.form.placeholder.email': 'Enter your email',
    'contact.form.placeholder.message': 'Describe your requirements or ideas in detail...',
    'contact.form.submit': 'Send Message',
    'contact.form.submitting': 'Sending...',
    'contact.form.success.title': 'Success!',
    'contact.form.success.message': 'Message received, will reply within 24 hours',
    'contact.copy': 'Copy',
    'contact.copied': 'Copied!',
    'contact.type.tech': 'Technical Collaboration',
    'contact.type.project': 'Project Consultation',
    'contact.type.ai': 'AI Solution Discussion',
    'contact.type.other': 'Other',
    
    // Language
    'lang.zh': 'ZH',
    'lang.en': 'EN'
  }
}

export function t(lang: Lang, key: string): string {
  return dict[lang][key] ?? key
}