'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import { copyToClipboard } from '@/lib/utils';

export default function ContactSection() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const contactInfo = [
    {
      icon: FaPhone,
      label: "电话",
      value: "18370038070",
      field: "phone"
    },
    {
      icon: FaEnvelope,
      label: "邮箱",
      value: "1525494310@qq.com",
      field: "email"
    },
    {
      icon: FaGithub,
      label: "GitHub",
      value: "https://github.com/lkyjj",
      field: "github",
      isLink: true
    }
  ];

  const handleCopy = async (text: string, field: string) => {
    const success = await copyToClipboard(text);
    if (success) {
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg p-8">
      <h3 className="text-2xl font-bold mb-6 text-center">联系方式</h3>
      <div className="space-y-4">
        {contactInfo.map((item) => (
          <motion.div
            key={item.field}
            className="flex items-center justify-between p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center space-x-3">
              <item.icon className="text-blue-400 text-xl" />
              <div>
                <p className="text-sm text-gray-400">{item.label}</p>
                {item.isLink ? (
                  <a 
                    href={item.value} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-400 transition-colors"
                  >
                    {item.value.replace('https://', '')}
                  </a>
                ) : (
                  <p className="text-white">{item.value}</p>
                )}
              </div>
            </div>
            
            {!item.isLink && (
              <button
                onClick={() => handleCopy(item.value, item.field)}
                className="p-2 hover:bg-gray-500 rounded transition-colors"
              >
                {copiedField === item.field ? (
                  <span className="text-green-400 text-sm">已复制!</span>
                ) : (
                  <span className="text-gray-400 text-sm">复制</span>
                )}
              </button>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}