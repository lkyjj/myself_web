"use client";

import { useState, useEffect } from "react";
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { motion } from "framer-motion";
import { FaChartBar, FaList, FaFilter } from "react-icons/fa";

interface SkillData {
  subject: string;
  A: number;
  fullMark: number;
}

interface SkillCategory {
  name: string;
  skills: Array<{
    name: string;
    level: number;
    description: string;
    relatedProjects: string[];
  }>;
  color: string;
}

export default function SkillsPage() {
  const [skillData, setSkillData] = useState<SkillData[]>([]);
  const [skillCategories, setSkillCategories] = useState<SkillCategory[]>([]);
  const [activeView, setActiveView] = useState<"radar" | "list">("radar");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [proficiencyFilter, setProficiencyFilter] = useState<string>("all");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // 加载技能数据
    const loadSkills = async () => {
      try {
        const skills = await import("../../../data/skills.json");
        
        // 转换雷达图数据
        const radarData: SkillData[] = [
          {
            subject: "AI技术",
            A: Math.round(Object.values(skills.aiTech).reduce((a, b) => a + b, 0) / Object.values(skills.aiTech).length),
            fullMark: 100,
          },
          {
            subject: "产品能力",
            A: Math.round(Object.values(skills.productSkills).reduce((a, b) => a + b, 0) / Object.values(skills.productSkills).length),
            fullMark: 100,
          },
          {
            subject: "前端开发",
            A: Math.round(Object.values(skills.frontendDev).reduce((a, b) => a + b, 0) / Object.values(skills.frontendDev).length),
            fullMark: 100,
          },
          {
            subject: "后端开发",
            A: Math.round(Object.values(skills.backendDev).reduce((a, b) => a + b, 0) / Object.values(skills.backendDev).length),
            fullMark: 100,
          },
        ];

        setSkillData(radarData);

        // 构建技能分类数据
        const categories: SkillCategory[] = [
          {
            name: "AI技术",
            color: "#3B82F6",
            skills: Object.entries(skills.aiTech).map(([name, level]) => ({
              name,
              level: level as number,
              description: getSkillDescription(name),
              relatedProjects: getRelatedProjects(name),
            })),
          },
          {
            name: "产品能力",
            color: "#10B981",
            skills: Object.entries(skills.productSkills).map(([name, level]) => ({
              name,
              level: level as number,
              description: getSkillDescription(name),
              relatedProjects: getRelatedProjects(name),
            })),
          },
          {
            name: "前端开发",
            color: "#F59E0B",
            skills: Object.entries(skills.frontendDev).map(([name, level]) => ({
              name,
              level: level as number,
              description: getSkillDescription(name),
              relatedProjects: getRelatedProjects(name),
            })),
          },
          {
            name: "后端开发",
            color: "#EF4444",
            skills: Object.entries(skills.backendDev).map(([name, level]) => ({
              name,
              level: level as number,
              description: getSkillDescription(name),
              relatedProjects: getRelatedProjects(name),
            })),
          },
        ];

        setSkillCategories(categories);
      } catch (error) {
        console.error("加载技能数据失败:", error);
      }
    };

    loadSkills();
  }, []);

  const getSkillDescription = (skillName: string): string => {
    const descriptions: Record<string, string> = {
      "LLM应用开发": "熟练掌握大模型应用开发，包括提示工程、对话系统构建等",
      "RAG知识库": "精通RAG技术栈，独立搭建知识库系统，召回准确率92%",
      "Agent开发": "具备Agent开发经验，实现多场景智能体应用",
      "LoRA微调": "掌握模型微调技术，使用LLaMA-Factory进行领域适配",
      "提示工程": "精通Prompt Engineering，优化模型输出质量",
      "多模态AI": "熟悉视觉-语言等多模态AI技术整合",
      "PRD设计": "具备完整PRD设计经验，从需求洞察到产品文档",
      "AB测试": "熟悉实验设计，主导多项AB测试优化产品指标",
      "需求洞察": "善于挖掘用户需求，转化为产品功能",
      "数据分析": "熟练使用数据分析工具，驱动产品决策",
      "用户研究": "具备用户研究能力，理解用户行为模式",
      "竞品分析": "能够深入分析竞品，提炼差异化策略",
      "React/TypeScript": "精通React+TS开发，组件化率100%",
      "Next.js": "熟练使用Next.js框架，实现SSG/SSR优化",
      "TailwindCSS": "精通TailwindCSS，快速构建响应式界面",
      "Vue.js": "具备Vue.js开发经验，理解MVVM架构",
      "状态管理": "熟悉Redux/Zustand等状态管理方案",
      "组件化开发": "推崇组件化开发模式，提升代码复用性",
      "Node.js/Express": "精通Node.js后端开发，RESTful API设计",
      "Python/Django": "熟悉Python Web开发，Django框架使用",
      "MySQL数据库": "具备数据库设计优化经验",
      "API设计": "擅长API接口设计，制定规范文档",
      "微服务架构": "了解微服务架构设计原则",
      "性能优化": "具备系统性能优化实战经验",
    };
    return descriptions[skillName] || "持续学习中...";
  };

  const getRelatedProjects = (skillName: string): string[] => {
    const projectMap: Record<string, string[]> = {
      "RAG知识库": ["餐饮后台客服Agent", "BOK Health食谱生成"],
      "Agent开发": ["Coze智能客服Agent", "React+DeepSeek流式Agent"],
      "LLM应用开发": ["Qwen-7B垂直域微调", "多模态AI交互"],
      "React/TypeScript": ["销售陪练对话平台重构", "个人作品集网站"],
      "Node.js/Express": ["旅游推荐系统后端", "API接口设计"],
      "AB测试": ["BOK Health食谱模块", "旅游推荐系统"],
      "数据分析": ["旅游推荐系统CTR优化", "BOK Health数据看板"],
    };
    return projectMap[skillName] || [];
  };

  const getProficiencyLevel = (level: number): string => {
    if (level >= 90) return "熟练掌握";
    if (level >= 80) return "掌握";
    return "了解";
  };

  const filteredCategories = skillCategories.filter(category => 
    selectedCategory === "all" || category.name === selectedCategory
  ).map(category => ({
    ...category,
    skills: category.skills.filter(skill => 
      proficiencyFilter === "all" || getProficiencyLevel(skill.level) === proficiencyFilter
    )
  })).filter(category => category.skills.length > 0);

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            技能矩阵
          </h1>
          <p className="text-gray-300 text-lg">
            四维技能可视化展示：AI技术、产品能力、前端开发、后端开发
          </p>
        </motion.div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex flex-wrap gap-4 items-center justify-between">
            {/* View Toggle */}
            <div className="flex bg-white border border-gray-200 rounded-lg p-1">
              <button
                onClick={() => setActiveView("radar")}
                className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
                  activeView === "radar" ? "bg-black text-white" : "text-gray-700 hover:text-black"
                }`}
              >
                <FaChartBar />
                雷达图
              </button>
              <button
                onClick={() => setActiveView("list")}
                className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
                  activeView === "list" ? "bg-black text-white" : "text-gray-700 hover:text-black"
                }`}
              >
                <FaList />
                列表视图
              </button>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <FaFilter className="text-gray-600" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-black focus:outline-none focus:border-black"
                >
                  <option value="all">所有分类</option>
                  <option value="AI技术">AI技术</option>
                  <option value="产品能力">产品能力</option>
                  <option value="前端开发">前端开发</option>
                  <option value="后端开发">后端开发</option>
                </select>
              </div>

              <select
                value={proficiencyFilter}
                onChange={(e) => setProficiencyFilter(e.target.value)}
                className="bg白色 border border灰色-200 rounded-lg px-3 py-2 text黑色 focus:outline-none focus:border黑色"
              >
                <option value="all">所有熟练度</option>
                <option value="熟练掌握">熟练掌握</option>
                <option value="掌握">掌握</option>
                <option value="了解">了解</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Radar Chart View */}
        {activeView === "radar" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">技能雷达图</h2>
              <div className="h-96">
                {mounted ? (
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart data={skillData}>
                      <PolarGrid stroke="#e5e7eb" />
                      <PolarAngleAxis 
                        dataKey="subject" 
                        tick={{ fill: "#6b7280", fontSize: 14 }}
                      />
                      <PolarRadiusAxis 
                        angle={90} 
                        domain={[0, 100]} 
                        tick={{ fill: "#9ca3af", fontSize: 12 }}
                      />
                      <Radar
                        name="技能水平"
                        dataKey="A"
                        stroke="#000000"
                        fill="#000000"
                        fillOpacity={0.15}
                        strokeWidth={2}
                      />
                      <Tooltip 
                        contentStyle={{
                          backgroundColor: "#ffffff",
                          border: "1px solid #e5e7eb",
                          borderRadius: "8px",
                          color: "#111827"
                        }}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                ) : (
                  <div className="w-full h-full bg-gray-100 rounded animate-pulse" />
                )}
              </div>
            </div>
          </motion.div>
        )}

        {/* List View */}
        {activeView === "list" && (
          <div className="space-y-8">
            {filteredCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="bg-white border border-gray-200 rounded-xl p-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div 
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: category.color }}
                  />
                  <h3 className="text-xl font-bold">{category.name}</h3>
                  <span className="text-gray-400 text-sm">
                    ({category.skills.length} 项技能)
                  </span>
                </div>

                <div className="grid gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: skillIndex * 0.05 }}
                      className="bg-gray-100 rounded-lg p-4 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-lg">{skill.name}</h4>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-600">
                            {skill.level}%
                          </span>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            skill.level >= 90 ? "bg-green-100 text-green-700" :
                            skill.level >= 80 ? "bg-blue-100 text-blue-700" :
                            "bg-gray-100 text-gray-700"
                          }`}>
                            {getProficiencyLevel(skill.level)}
                          </span>
                        </div>
                      </div>

                      <div className="mb-3">
                        <div className="bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-black h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>

                      <p className="text-gray-600 text-sm mb-3">
                        {skill.description}
                      </p>

                      {skill.relatedProjects.length > 0 && (
                        <div>
                          <p className="text-gray-600 text-xs mb-2">相关项目:</p>
                          <div className="flex flex-wrap gap-2">
                            {skill.relatedProjects.map((project, index) => (
                              <span
                                key={index}
                                className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                              >
                                {project}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 bg-white border border-gray-200 rounded-xl p-6"
        >
          <h3 className="text-xl font-bold mb-4">技能统计</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skillData.map((item, index) => (
              <div key={item.subject} className="text-center">
                <div className="text-2xl font-bold text-black">
                  {item.A}%
                </div>
                <div className="text-gray-600 text-sm">{item.subject}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}