'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { t, Lang } from '@/lib/utils/i18n';

interface FormData {
  name: string;
  email: string;
  type: string;
  message: string;
}

interface ContactFormProps {
  lang: Lang;
}

export default function ContactForm({ lang }: ContactFormProps) {
  const cooperationTypes = lang === 'zh'
    ? ['技术合作', '项目咨询', 'AI方案讨论', '其他']
    : ['Technical Collaboration', 'Project Consultation', 'AI Solution Discussion', 'Other'];

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    type: cooperationTypes[0],
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      type: cooperationTypes[0]
    }));
  }, [lang]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // 模拟表单提交
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', type: cooperationTypes[0], message: '' });
      
      // 3秒后重置状态
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-8">
      <h3 className="text-2xl font-bold mb-6 text-center">{t(lang, 'contact.form.title')}</h3>
      
      {submitStatus === 'success' ? (
        <motion.div
          className="text-center py-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-green-400 text-6xl mb-4">✓</div>
          <h4 className="text-xl font-semibold mb-2">{t(lang, 'contact.form.success.title')}</h4>
          <p className="text-gray-400">{t(lang, 'contact.form.success.message')}</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                {t(lang, 'contact.form.name')} *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-black"
                placeholder={t(lang, 'contact.form.placeholder.name')}
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                {t(lang, 'contact.form.email')} *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-black"
                placeholder={t(lang, 'contact.form.placeholder.email')}
              />
            </div>
          </div>

          <div>
            <label htmlFor="type" className="block text-sm font-medium mb-2">
              {t(lang, 'contact.form.type')}
            </label>
            <select
              id="type"
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-black"
            >
              {cooperationTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              {t(lang, 'contact.form.message')} *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-black resize-none"
              placeholder={t(lang, 'contact.form.placeholder.message')}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-black hover:opacity-90 disabled:opacity-60 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black mr-2"></div>
                {t(lang, 'contact.form.submitting')}
              </div>
            ) : (
              t(lang, 'contact.form.submit')
            )}
          </button>
        </form>
      )}
    </div>
  );
}