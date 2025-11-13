import OpenAI from 'openai';
import { OpenAIEmbeddings } from '@langchain/openai';
// import { MemoryVectorStore } from 'langchain/vectorstores/memory';
// import { ConversationBufferMemory } from 'langchain/memory';

// OpenAI配置（使用OpenAI替代DeepSeek）
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
  baseURL: process.env.OPENAI_BASE_URL || 'https://api.openai.com/v1',
});

// 知识库加载
const loadKnowledgeBase = () => {
  try {
    const knowledgeBase = require("../../../data/knowledge-base.json");
    return knowledgeBase.map((item: any) => ({
      text: `${item.question}\n${item.answer}`,
      metadata: { 
        category: item.category, 
        question: item.question, 
        answer: item.answer 
      }
    }));
  } catch (error) {
    console.error("加载知识库失败：", error);
    return [];
  }
};

// 初始化向量存储
// let vectorStore: MemoryVectorStore | null = null;
let vectorStore: any = null;

export async function initVectorStore() {
  // 暂时禁用向量存储功能
  return null;
  
  /*
  if (vectorStore) return vectorStore;
  
  const docs = loadKnowledgeBase();
  if (docs.length === 0) {
    throw new Error("知识库为空");
  }

  const embeddings = new OpenAIEmbeddings({
    openAIApiKey: process.env.OPENAI_API_KEY,
    modelName: "text-embedding-3-small",
  });
  
  // vectorStore = await MemoryVectorStore.fromTexts(
    docs.map(doc => doc.text),
    docs.map(doc => doc.metadata),
    embeddings
  );
  
  return vectorStore;
  */
}

// 检索相关知识库内容
export async function retrieveRelevantDocs(question: string, role: string) {
  // 暂时返回空数组，避免向量存储依赖
  return [];
  
  /*
  try {
    const store = await initVectorStore();
    const retriever = store.asRetriever({ k: 3 });
    
    // 根据角色模式过滤
    const filter = (doc: any) => {
      if (role === "面试官模式") {
        return doc.metadata.category.includes("实习经历") || doc.metadata.category.includes("项目成果");
      } else if (role === "开发者模式") {
        return doc.metadata.category.includes("技术实现") || doc.metadata.category.includes("AI专项");
      } else if (role === "合作方模式") {
        return doc.metadata.category.includes("独立项目") || doc.metadata.category.includes("可复用方案");
      }
      return true;
    };
    
    const relevantDocs = await retriever.getRelevantDocuments(question);
    return relevantDocs.filter(filter).map(doc => doc.metadata.answer);
  } catch (error) {
    console.error("知识库检索失败：", error);
    return [];
  }
  */
}

// 生成系统提示
const getSystemPrompt = (role: string) => {
  const basePrompt = "你是刘康宇的个人AI助手，负责回答关于刘康宇的个人经历、项目成果、技术能力的问题。回答需基于知识库，真实准确，数据化呈现成果，避免虚构信息。";
  
  if (role === "面试官模式") {
    return `${basePrompt} 重点突出实习经历的具体动作、数据成果、问题解决思路，例如"美团实习中如何优化发票识别模块？"需包含具体优化手段与效果数据。`;
  } else if (role === "开发者模式") {
    return `${basePrompt} 重点突出技术选型理由、核心实现逻辑、踩坑复盘，例如"RAG知识库如何构建？"需包含数据来源、处理方式、准确率指标。`;
  } else if (role === "合作方模式") {
    return `${basePrompt} 重点突出可复用的方案、合作可能性、项目价值，例如"Coze客服Agent如何复用？"需包含核心功能、适配场景、落地成本。`;
  }
  return basePrompt;
};

// 核心对话函数
export async function generateChatResponse(
  question: string,
  role: string,
  memory: any
) {
  try {
    // 检索相关知识库内容
    const relevantAnswers = await retrieveRelevantDocs(question, role);
    const context = relevantAnswers.join("\n\n");
    
    // 构建系统提示
    const systemPrompt = getSystemPrompt(role);
    
    // 获取历史对话
    const history = await memory.loadMemoryVariables({});
    
    // 构建完整的prompt
    const prompt = `${systemPrompt}

知识库参考：${context || "无相关知识库内容，需基于常识回答（若不确定，需说明）"}

历史对话：${history.history || "无"}

用户问题：${question}

回答要求：
1. 结构清晰，分点列出（如需要）；
2. 数据准确，用具体数字支撑；
3. 语言简洁专业，避免冗余；
4. 如不确定，明确说明。`;

    // 调用OpenAI API
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: prompt },
        { role: "user", content: question }
      ],
      temperature: 0.3,
      max_tokens: 1000,
    });

    const answer = response.choices[0]?.message?.content || "抱歉，未能生成回答。";
    
    // 更新对话记忆
    await memory.saveContext({ input: question }, { output: answer });
    
    return answer;
  } catch (error) {
    console.error("AI对话生成失败：", error);
    return "抱歉，当前无法生成回答，请稍后再试～";
  }
}