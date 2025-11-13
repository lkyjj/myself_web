'use client';

import Timeline from '@/components/about/Timeline';
import { motion } from 'framer-motion';

export default function AboutPage() {
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
                刘
              </div>
              <h1 className="text-5xl font-bold mb-4">刘康宇</h1>
              <p className="text-xl text-gray-600 mb-6">AI产品经理 + 全栈研发工程师</p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
                <span>22岁</span>
                <span>•</span>
                <span>东华理工大学</span>
                <span>•</span>
                <span>新南威尔士大学硕士录取</span>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">个人宣言</h2>
              <p className="text-lg leading-relaxed text-gray-700">
                专注LLM应用落地，用产品思维驱动技术价值。致力于将前沿AI技术转化为用户价值，
                通过数据驱动的产品迭代，创造真正有用的智能应用。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "AI技术",
                  items: ["LLM/RAG/Agent", "LoRA微调", "提示工程"]
                },
                {
                  title: "产品能力", 
                  items: ["PRD设计", "AB测试", "需求洞察"]
                },
                {
                  title: "全栈开发",
                  items: ["React/TypeScript", "Node/Python", "MySQL"]
                },
                {
                  title: "工具链",
                  items: ["Coze/Dify", "n8n工作流", "Vercel"]
                }
              ].map((category, index) => (
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
        <Timeline />
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
              <h2 className="text-3xl font-bold mb-4">联系方式</h2>
              <p className="text-gray-400">期待与你的合作</p>
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
                  <h4 className="font-semibold mb-2">电话</h4>
                  <p className="text-gray-600 text-sm">18370038070</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-green-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">✉️</span>
                  </div>
                  <h4 className="font-semibold mb-2">邮箱</h4>
                  <p className="text-gray-600 text-sm">1525494310@qq.com</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-purple-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">💻</span>
                  </div>
                  <h4 className="font-semibold mb-2">GitHub</h4>
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