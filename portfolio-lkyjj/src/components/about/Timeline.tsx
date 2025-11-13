'use client';

import { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const timelineData = [
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
    company: "江西麟创科技",
    position: "全栈开发实习生",
    achievements: [
      "旅游推荐系统开发",
      "CTR提升15%，用户停留时长增加23%"
    ],
    type: "实习"
  },
  {
    period: "2026-2027",
    company: "新南威尔士大学",
    position: "软件工程硕士",
    achievements: [
      "已录取，2026年开始就读"
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

interface TimelineItemProps {
  item: typeof timelineData[0];
  index: number;
}

function TimelineItem({ item, index }: TimelineItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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
        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center relative">
          {item.type === "实习" ? (
            <FaBriefcase className="text-white text-lg" />
          ) : (
            <FaGraduationCap className="text-white text-lg" />
          )}
          {/* 连接线 */}
          {index < timelineData.length - 1 && (
            <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gray-600"></div>
          )}
        </div>
      </div>

      {/* 内容卡片 */}
      <div className="flex-1 bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold text-white">{item.company}</h3>
          <span className="text-sm text-blue-400 bg-blue-900 px-3 py-1 rounded-full">
            {item.period}
          </span>
        </div>
        
        <h4 className="text-md font-medium text-gray-300 mb-4">{item.position}</h4>
        
        <ul className="space-y-2">
          {item.achievements.map((achievement, idx) => (
            <li key={idx} className="text-gray-400 text-sm flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              {achievement}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Timeline() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">经历时间轴</h2>
          <p className="text-gray-400">从校园到职场的成长历程</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {timelineData.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}