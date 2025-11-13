'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface CaseStudy {
  id: string;
  title: string;
  description: string;
  company: string;
  period: string;
  category: string;
  keyMetrics: {
    before: string;
    after: string;
    improvement: string;
  }[];
}

const caseStudies: CaseStudy[] = [
  {
    id: 'meituan-invoice-optimization',
    title: '美团AI产品实习 - 发票识别与报销流程优化',
    description: '通过异步处理+缓存机制优化，实现发票识别提交0耗时，降低AI调用成本40%',
    company: '美团',
    period: '2025.09-2025.11',
    category: 'AI产品优化',
    keyMetrics: [
      { before: '35秒', after: '0秒', improvement: '提交耗时减少100%' },
      { before: '78%', after: '94%', improvement: '识别准确率+16pp' },
      { before: '基准', after: '-40%', improvement: 'AI调用成本降低' }
    ]
  },
  {
    id: 'bok-health-recipe-optimization',
    title: 'BOK Health食谱生成模块重构',
    description: '通过n8n工作流重构和RAG知识库优化，将AI幻觉率从32%降至<5%',
    company: '上海与你科技',
    period: '2025.08-2025.09',
    category: 'AI幻觉优化',
    keyMetrics: [
      { before: '32%', after: '<5%', improvement: '幻觉率-27pp' },
      { before: '42%', after: '60%', improvement: '采纳率+18pp' },
      { before: '34%', after: '40%', improvement: '次留率+6pp' }
    ]
  },
  {
    id: 'coze-customer-service-agent',
    title: 'Coze智能客服Agent开发',
    description: '基于5.2万条咨询数据构建智能客服，人工接管率从38%降至9%',
    company: '独立项目',
    period: '2025.06-2025.07',
    category: '智能客服',
    keyMetrics: [
      { before: '38%', after: '9%', improvement: '人工接管率-29pp' },
      { before: '3.2分钟', after: '1.8秒', improvement: '响应速度提升99%' },
      { before: '72%', after: '91%', improvement: '准确率+19pp' }
    ]
  }
];

function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <motion.div
      className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300"
      whileHover={{ scale: 1.02, y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="p-6">
        {/* 头部信息 */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
              {study.title}
            </h3>
            <div className="flex items-center text-sm text-gray-400 mb-2">
              <span>{study.company}</span>
              <span className="mx-2">•</span>
              <span>{study.period}</span>
            </div>
            <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
              {study.category}
            </span>
          </div>
        </div>

        {/* 描述 */}
        <p className="text-gray-300 text-sm mb-6 line-clamp-3">
          {study.description}
        </p>

        {/* 关键指标 */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-blue-400 mb-3">关键指标</h4>
          <div className="space-y-3">
            {study.keyMetrics.map((metric, index) => (
              <div key={index} className="bg-gray-700 rounded-lg p-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">优化前</span>
                  <span className="text-green-400 font-medium">{metric.improvement}</span>
                </div>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-red-400">{metric.before}</span>
                  <span className="text-white">→</span>
                  <span className="text-green-400 font-medium">{metric.after}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 查看详情按钮 */}
        <Link
          href={`/case-study/${study.id}`}
          className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg transition-colors"
        >
          查看详细复盘
        </Link>
      </div>
    </motion.div>
  );
}

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-white text-black py-12">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold mb-4">案例复盘</h1>
          <p className="text-gray-400 text-lg">
            深度剖析代表性项目，从需求洞察到技术落地的完整思考过程
          </p>
        </motion.div>

        {/* 案例列表 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CaseStudyCard study={study} />
            </motion.div>
          ))}
        </div>

        {/* 底部提示 */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-gray-400">
            每个案例都包含完整的需求分析、方案设计、技术实现、数据成果和复盘总结
          </p>
        </motion.div>
      </div>
    </div>
  );
}