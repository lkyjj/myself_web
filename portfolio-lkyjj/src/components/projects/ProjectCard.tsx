'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Project } from '@/types';
import { FaGithub, FaExternalLinkAlt, FaBook, FaStar } from 'react-icons/fa';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 h-full"
      whileHover={{ scale: 1.02, y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* 项目头部 */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-bold text-black line-clamp-2 flex-1">
            {project.name}
          </h3>
          <span className="bg-black text-white text-xs px-2 py-1 rounded-full whitespace-nowrap ml-2">
            {project.category}
          </span>
        </div>

        <p className="text-gray-700 text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* 技术栈 */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {(project.techStack ?? []).slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
              >
                {tech}
              </span>
            ))}
            {(project.techStack ?? []).length > 4 && (
              <span className="text-gray-500 text-xs">
                +{(project.techStack ?? []).length - 4}
              </span>
            )}
          </div>
        </div>

        {/* 核心成果 */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-black mb-2">核心成果</h4>
          <ul className="space-y-1">
            {(project.achievement ?? []).slice(0, 2).map((achievement, index) => (
              <li key={index} className="text-gray-600 text-xs flex items-start">
                <span className="text-black mr-2 mt-0.5">•</span>
                <span className="line-clamp-2">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 项目信息 */}
        <div className="space-y-2 mb-4">
          {project.period && (
            <div className="text-gray-600 text-xs flex items-center">
              <span className="mr-2">📅</span>
              {project.period}
            </div>
          )}

          {project.starCount && (
            <div className="flex items-center text-gray-600 text-xs">
              <FaStar className="text-black mr-1" />
              <span>{project.starCount} stars</span>
            </div>
          )}
        </div>
      </div>

      {/* 操作按钮 */}
      <div className="px-6 pb-6 mt-auto">
        <div className="flex space-x-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-white border border-gray-200 hover:border-black text-black text-sm py-2 px-3 rounded-lg transition-colors flex items-center justify-center"
            >
              <FaGithub className="mr-2" />
              源码
            </a>
          )}
          
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-black hover:opacity-90 text-white text-sm py-2 px-3 rounded-lg transition-colors flex items-center justify-center"
            >
              <FaExternalLinkAlt className="mr-2" />
              演示
            </a>
          )}
          
          {project.caseStudyUrl && (
            <a
              href={project.caseStudyUrl}
              className="flex-1 bg-white border border-gray-200 hover:border-black text-black text-sm py-2 px-3 rounded-lg transition-colors flex items-center justify-center"
            >
              <FaBook className="mr-2" />
              复盘
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}