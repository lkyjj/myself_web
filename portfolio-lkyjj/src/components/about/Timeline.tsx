'use client';

import { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import { t, Lang } from '@/lib/utils/i18n';

const timelineDataZh = [
  {
    period: "2025.09-2025.11",
    company: "美团",
    position: "AI产品实习生",
    achievements: [
      "发票识别模块优化，实现提交0耗时",
      "重构报销流程，降低AI调用成本"
    ],
    type: "实习"
  },
  {
    period: "2025.08-2025.09",
    company: "上海与你科技",
    position: "AI产品经理实习生",
    achievements: [
      "BOK Health食谱生成模块重构",
      "幻觉率从32%降至<5%，次留提升6pp"
    ],
    type: "实习"
  },
  {
    period: "2025.06-2025.07",
    company: "上海思创电器",
    position: "AI算法实习生",
    achievements: [
      "Coze智能客服Agent开发",
      "人工接管率从38%降至9%"
    ],
    type: "实习"
  },
  {
    period: "2025.01-2025.05",
    company: "字节跳动",
    position: "AI Agent开发实习生",
    achievements: [
      "智能对话Agent系统开发",
      "多轮对话准确率提升至92%，响应速度优化40%"
    ],
    type: "实习"
  },
  {
    period: "2026-2027",
    company: "新南威尔士大学",
    position: "软件工程硕士",
    achievements: [
      "UNSW软件工程硕士在读"
    ],
    type: "教育"
  },
  {
    period: "2021-2025",
    company: "东华理工大学",
    position: "软件工程本科",
    achievements: [
      "GPA 3.7/4.0，专业排名前10%"
    ],
    type: "教育"
  }
];

const timelineDataEn = [
  {
    period: "2025.09-2025.11",
    company: "Meituan",
    position: "AI Product Intern",
    achievements: [
      "Invoice recognition module optimization, zero submission time",
      "Reimbursement process refactor, reduced AI cost"
    ],
    type: "Internship"
  },
  {
    period: "2025.08-2025.09",
    company: "Shanghai YuNi Technology",
    position: "AI Product Manager Intern",
    achievements: [
      "BOK Health recipe generation module refactor",
      "Hallucination rate from 32% to <5%, retention +6pp"
    ],
    type: "Internship"
  },
  {
    period: "2025.06-2025.07",
    company: "Shanghai Sichuang Electronics",
    position: "AI Algorithm Intern",
    achievements: [
      "Coze intelligent customer service Agent development",
      "Manual takeover rate from 38% to 9%"
    ],
    type: "Internship"
  },
  {
    period: "2025.01-2025.05",
    company: "ByteDance",
    position: "AI Agent Development Intern",
    achievements: [
      "Intelligent dialogue Agent system development",
      "Multi-turn dialogue accuracy improved to 92%, response speed optimized by 40%"
    ],
    type: "Internship"
  },
  {
    period: "2026-2027",
    company: "UNSW",
    position: "Master of Software Engineering",
    achievements: [
      "UNSW Master of Software Engineering"
    ],
    type: "Education"
  },
  {
    period: "2021-2025",
    company: "East China University of Technology",
    position: "Bachelor of Software Engineering",
    achievements: [
      "GPA 3.7/4.0, Top 10% in major"
    ],
    type: "Education"
  }
];

interface TimelineItemProps {
  item: typeof timelineDataZh[0];
  index: number;
  totalItems: number;
  lang: Lang;
}

function TimelineItem({ item, index, totalItems, lang }: TimelineItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const isInternship = item.type === "实习" || item.type === "Internship";

  return (
    <motion.div
      ref={ref}
      className="flex items-start space-x-6 mb-8 last:mb-0"
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* 时间线节点 */}
      <div className="flex-shrink-0">
        <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center relative">
          {isInternship ? (
            <FaBriefcase className="text-white text-lg" />
          ) : (
            <FaGraduationCap className="text-white text-lg" />
          )}
          {/* 连接线 */}
          {index < totalItems - 1 && (
            <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gray-300"></div>
          )}
        </div>
      </div>

      {/* 内容卡片 */}
      <div className="flex-1 bg-white border border-gray-200 rounded-lg p-6 hover:bg-gray-50 transition-colors">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold text-black">{item.company}</h3>
          <span className="text-sm text-black bg-gray-100 px-3 py-1 rounded-full">
            {item.period}
          </span>
        </div>
        <h4 className="text-md font-medium text-gray-600 mb-4">{item.position}</h4>
        <ul className="space-y-2">
          {item.achievements.map((achievement, idx) => (
            <li key={idx} className="text-gray-600 text-sm flex items-start">
              <span className="text-black mr-2">•</span>
              {achievement}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

interface TimelineProps {
  lang: Lang;
}

export default function Timeline({ lang }: TimelineProps) {
  const timelineData = lang === 'zh' ? timelineDataZh : timelineDataEn;

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">{t(lang, 'timeline.title')}</h2>
          <p className="text-gray-400">{t(lang, 'timeline.subtitle')}</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {timelineData.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} totalItems={timelineData.length} lang={lang} />
          ))}
        </div>
      </div>
    </div>
  );
}