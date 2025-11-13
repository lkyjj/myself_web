'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '@/components/projects/ProjectCard';
import FilterTabs from '@/components/projects/FilterTabs';
import { Project } from '@/types';

export default function ProjectsPage() {
  const [allProjects, setAllProjects] = useState<Project[]>([]);
  const [activeFilter, setActiveFilter] = useState("全部");
  const [loading, setLoading] = useState(true);

  // 加载项目数据
  useEffect(() => {
    const loadProjects = async () => {
      setLoading(true)
      try {
        const [projectsRes, githubRes] = await Promise.all([
          fetch('/api/projects'),
          fetch('/api/github-repos'),
        ])

        const internshipProjects: Project[] = projectsRes.ok ? await projectsRes.json() : []
        const githubRepos: Project[] = githubRes.ok ? await githubRes.json() : []

        const mergedProjects = [...githubRepos, ...internshipProjects]
        setAllProjects(mergedProjects)
      } catch (error) {
        console.error('加载项目失败:', error)
        setAllProjects([])
      } finally {
        setLoading(false)
      }
    }

    loadProjects()
  }, [])

  // 筛选项目
  const filteredProjects = activeFilter === "全部"
    ? allProjects
    : allProjects.filter(project => project.category === activeFilter);

  const filters = ["全部", "产品落地类", "独立开发类", "AI专项类"];

  if (loading) {
    return (
      <div className="min-h-screen bg-white text-black py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4">我的项目</h1>
            <p className="text-gray-400">展示我的技术能力和项目经验</p>
          </motion.div>
          
          {/* 骨架屏 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-gray-100 rounded-lg p-6 animate-pulse">
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6 mb-6"></div>
                <div className="flex space-x-2 mb-4">
                  <div className="h-6 bg-gray-200 rounded w-1/3"></div>
                  <div className="h-6 bg-gray-200 rounded w-1/3"></div>
                </div>
                <div className="h-10 bg-gray-200 rounded w-full"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">我的项目</h1>
          <p className="text-gray-600">展示我的技术能力和项目经验</p>
        </motion.div>

        {/* 筛选标签 */}
        <div className="flex justify-center mb-12">
          <FilterTabs 
            filters={filters}
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
        </div>

        {/* 项目列表 */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">暂无该分类下的项目</p>
          </div>
        ) : (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}