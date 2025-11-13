'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface CaseStudy {
  id: string;
  title: string;
  content: string;
  metadata: {
    company: string;
    period: string;
    category: string;
    technologies: string[];
    key_metrics: {
      before: string;
      after: string;
      improvement: string;
    }[];
  };
}

const caseStudies: Record<string, CaseStudy> = {
  'meituan-invoice-optimization': {
    id: 'meituan-invoice-optimization',
    title: '美团AI产品实习 - 发票识别与报销流程优化',
    content: '',
    metadata: {
      company: '美团',
      period: '2025.09-2025.11',
      category: 'AI产品优化',
      technologies: ['AI Agent', '缓存机制', '异步处理', 'PRD设计'],
      key_metrics: [
        { before: '35秒', after: '0秒', improvement: '提交耗时减少100%' },
        { before: '78%', after: '94%', improvement: '识别准确率+16pp' },
        { before: '基准', after: '-40%', improvement: 'AI调用成本降低' }
      ]
    }
  },
  'bok-health-recipe-optimization': {
    id: 'bok-health-recipe-optimization',
    title: 'BOK Health食谱生成模块重构',
    content: '',
    metadata: {
      company: '上海与你科技',
      period: '2025.08-2025.09',
      category: 'AI幻觉优化',
      technologies: ['n8n工作流', 'RAG', 'LLM幻觉优化', 'A/B测试'],
      key_metrics: [
        { before: '32%', after: '<5%', improvement: '幻觉率-27pp' },
        { before: '42%', after: '60%', improvement: '采纳率+18pp' },
        { before: '34%', after: '40%', improvement: '次留率+6pp' }
      ]
    }
  },
  'coze-customer-service-agent': {
    id: 'coze-customer-service-agent',
    title: 'Coze智能客服Agent开发',
    content: '',
    metadata: {
      company: '独立项目',
      period: '2025.06-2025.07',
      category: '智能客服',
      technologies: ['Coze工作流', 'LLM函数调用', 'RAG知识库', '微信生态'],
      key_metrics: [
        { before: '38%', after: '9%', improvement: '人工接管率-29pp' },
        { before: '3.2分钟', after: '1.8秒', improvement: '响应速度提升99%' },
        { before: '72%', after: '91%', improvement: '准确率+19pp' }
      ]
    }
  }
};

export default function CaseStudyDetail() {
  const params = useParams();
  const caseId = params?.name as string;
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);

  const caseStudy = caseStudies[caseId];

  useEffect(() => {
    if (!caseStudy) return;

    const loadContent = async () => {
      try {
        const response = await fetch(`/case-studies/${caseId}.md`);
        if (response.ok) {
          const text = await response.text();
          setContent(text);
        } else {
          setContent('案例内容加载失败，请稍后重试。');
        }
      } catch (error) {
        console.error('加载案例内容失败:', error);
        setContent('案例内容加载失败，请稍后重试。');
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, [caseId, caseStudy]);

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-white text-black py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold mb-4">案例不存在</h1>
          <Link href="/case-study" className="text-black underline">返回案例列表</Link>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white text-black py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-700 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-gray-700 rounded w-1/2 mb-8"></div>
              <div className="h-32 bg-gray-700 rounded mb-4"></div>
              <div className="h-32 bg-gray-700 rounded mb-4"></div>
              <div className="h-32 bg-gray-700 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg白色 text黑色 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* 头部信息 */}
          <div className="mb-8">
            <div className="flex items-center space-x-4 mb-4">
              <span className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full">
                {caseStudy.metadata.category}
              </span>
              <span className="text-gray-400 text-sm">
                {caseStudy.metadata.company} • {caseStudy.metadata.period}
              </span>
            </div>
            
            <h1 className="text-4xl font-bold mb-4">
              {caseStudy.title}
            </h1>
            
            {/* 技术栈 */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 text-blue-400">核心技术</h3>
              <div className="flex flex-wrap gap-2">
                {caseStudy.metadata.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-gray-700 text-gray-300 text-sm px-3 py-1 rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* 关键指标 */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 text-blue-400">关键指标</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {caseStudy.metadata.key_metrics.map((metric, index) => (
                  <div key={index} className="bg-gray-800 rounded-lg p-4">
                    <div className="text-center">
                      <div className="text-sm text-gray-400 mb-2">优化前</div>
                      <div className="text-xl font-bold text-red-400 mb-2">{metric.before}</div>
                      <div className="text-sm text-green-400 mb-2">{metric.improvement}</div>
                      <div className="text-sm text-gray-400 mb-2">优化后</div>
                      <div className="text-xl font-bold text-green-400">{metric.after}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 内容区域 */}
          <div className="prose prose-invert max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ children }) => (
                  <h1 className="text-3xl font-bold mt-8 mb-4 text-white">{children}</h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-2xl font-semibold mt-6 mb-3 text-blue-400">{children}</h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-xl font-medium mt-4 mb-2 text-gray-300">{children}</h3>
                ),
                p: ({ children }) => (
                  <p className="text-gray-300 leading-relaxed mb-4">{children}</p>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">{children}</ul>
                ),
                ol: ({ children }) => (
                  <ol className="list-decimal list-inside text-gray-300 mb-4 space-y-2">{children}</ol>
                ),
                li: ({ children }) => (
                  <li className="text-gray-300">{children}</li>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-blue-500 pl-4 my-4 italic text-gray-400">
                    {children}
                  </blockquote>
                ),
                code: ({ children }) => (
                  <code className="bg-gray-700 px-1 py-0.5 rounded text-sm font-mono text-green-400">
                    {children}
                  </code>
                ),
                pre: ({ children }) => (
                  <pre className="bg-gray-800 p-4 rounded-lg overflow-x-auto my-4">
                    {children}
                  </pre>
                ),
                table: ({ children }) => (
                  <table className="w-full border-collapse border border-gray-600 my-4">{children}</table>
                ),
                th: ({ children }) => (
                  <th className="border border-gray-600 px-4 py-2 bg-gray-800 text-white">
                    {children}
                  </th>
                ),
                td: ({ children }) => (
                  <td className="border border-gray-600 px-4 py-2 text-gray-300">
                    {children}
                  </td>
                ),
                a: ({ children, href }) => (
                  <a 
                    href={href} 
                    className="text-blue-400 hover:text-blue-300 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {children}
                  </a>
                ),
              }}
            >
              {content}
            </ReactMarkdown>
          </div>

          {/* 底部导航 */}
          <div className="mt-12 pt-8 border-t border-gray-700">
            <div className="flex justify-between items-center">
              <Link
                href="/case-study"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                ← 返回案例列表
              </Link>
              
              <div className="flex space-x-4">
                <Link
                  href="/projects"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  查看项目
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  联系我
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}