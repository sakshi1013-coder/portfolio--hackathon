'use client';

import React from 'react';
import {
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiGraphql,
  SiFirebase,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiNginx,
  SiGit,
  SiGithub,
  SiPostman,
  SiVercel,
  SiRender,
  SiFigma,
  SiPrometheus,
  SiGrafana,
  SiElasticsearch,
  SiKibana,
  SiPython,
  SiCplusplus,
} from 'react-icons/si';

import {
  FaCss3Alt,
  FaJava,
  FaServer,
  FaDatabase,
  FaNetworkWired,
  FaLayerGroup,
  FaSitemap,
  FaCubes,
  FaScaleBalanced,
  FaBolt,
  FaMemory,
  FaChartLine,
  FaBrain,
  FaRobot,
  FaMobileScreen,
  FaCode,
  FaKey,
  FaAws,
  FaCloud,
  FaPenRuler,
  FaLaptopCode,
} from 'react-icons/fa6';

interface SkillIconProps {
  name: string;
  size?: number;
}

export default function SkillIcon({ name, size = 18 }: SkillIconProps) {
  const normName = name.toLowerCase().trim();

  // 1. Frontend Icons
  if (normName === 'html') return <SiHtml5 size={size} color="#E34F26" />;
  if (normName === 'css') return <FaCss3Alt size={size} color="#1572B6" />;
  if (normName === 'javascript') return <SiJavascript size={size} color="#F7DF1E" />;
  if (normName === 'typescript') return <SiTypescript size={size} color="#3178C6" />;
  if (normName === 'react') return <SiReact size={size} color="#61DAFB" />;
  if (normName === 'next.js') return <SiNextdotjs size={size} color="#000000" />;
  if (normName === 'tailwind css') return <SiTailwindcss size={size} color="#06B6D4" />;
  if (normName === 'wireframing') return <FaPenRuler size={size} color="#EC4899" />;
  if (normName === 'prototyping') return <FaLayerGroup size={size} color="#EC4899" />;
  if (normName === 'responsive design') return <FaMobileScreen size={size} color="#7C3AED" />;

  // 2. Backend Icons
  if (normName === 'node.js') return <SiNodedotjs size={size} color="#5FA04E" />;
  if (normName === 'express.js') return <SiExpress size={size} color="#000000" />;
  if (normName === 'rest apis') return <FaServer size={size} color="#6257E8" />;
  if (normName === 'graphql') return <SiGraphql size={size} color="#E10098" />;
  if (normName === 'firebase' || normName === 'firestore') return <SiFirebase size={size} color="#DD2C00" />;
  if (normName === 'java') return <FaJava size={size} color="#ED8B00" />;
  if (normName === 'python') return <SiPython size={size} color="#3776AB" />;
  if (normName === 'c++') return <SiCplusplus size={size} color="#00599C" />;

  // 3. Database Icons
  if (normName === 'mongodb') return <SiMongodb size={size} color="#47A248" />;
  if (normName === 'postgresql') return <SiPostgresql size={size} color="#4169E1" />;
  if (normName === 'mysql') return <SiMysql size={size} color="#4479A1" />;
  if (normName === 'rds') return <FaDatabase size={size} color="#3B82F6" />;

  // 4. AWS Icons
  if (normName.includes('aws')) return <FaAws size={size} color="#FF9900" />;
  if (normName === 'ec2') return <FaServer size={size} color="#FF9900" />;
  if (normName === 's3') return <FaCloud size={size} color="#569A31" />;
  if (normName === 'iam') return <FaKey size={size} color="#FF9900" />;
  if (normName === 'vpc') return <FaNetworkWired size={size} color="#FF9900" />;
  if (normName === 'cloudwatch') return <FaChartLine size={size} color="#FF9900" />;

  // 5. DevOps & Tools Icons
  if (normName === 'docker' || normName === 'docker compose') return <SiDocker size={size} color="#2496ED" />;
  if (normName === 'kubernetes') return <SiKubernetes size={size} color="#326CE5" />;
  if (normName === 'jenkins') return <SiJenkins size={size} color="#D24939" />;
  if (normName === 'nginx') return <SiNginx size={size} color="#009639" />;
  if (normName === 'pm2') return <FaServer size={size} color="#2B037A" />;
  if (normName === 'git') return <SiGit size={size} color="#F05032" />;
  if (normName === 'github') return <SiGithub size={size} color="#181717" />;
  if (normName === 'postman') return <SiPostman size={size} color="#FF6C37" />;
  if (normName === 'vercel') return <SiVercel size={size} color="#000000" />;
  if (normName === 'render') return <SiRender size={size} color="#46E3B7" />;
  if (normName === 'figma') return <SiFigma size={size} color="#F24E1E" />;

  // 6. Monitoring & Logging Icons
  if (normName === 'prometheus') return <SiPrometheus size={size} color="#E6522C" />;
  if (normName === 'grafana') return <SiGrafana size={size} color="#F46800" />;
  if (normName === 'elasticsearch') return <SiElasticsearch size={size} color="#005571" />;
  if (normName === 'kibana') return <SiKibana size={size} color="#005571" />;

  // 7. System Design Icons
  if (normName === 'hld' || normName === 'lld') return <FaSitemap size={size} color="#6366F1" />;
  if (normName === 'microservices') return <FaCubes size={size} color="#6366F1" />;
  if (normName === 'load balancing') return <FaScaleBalanced size={size} color="#6366F1" />;
  if (normName === 'event-driven architecture') return <FaBolt size={size} color="#6366F1" />;
  if (normName === 'caching') return <FaMemory size={size} color="#6366F1" />;
  if (normName === 'scalability') return <FaChartLine size={size} color="#6366F1" />;

  // 8. AI & GenAI Icons
  if (normName === 'cursor' || normName === 'lovable' || normName === 'antigravity') return <FaLaptopCode size={size} color="#A855F7" />;
  if (normName === 'prompt engineering') return <FaBrain size={size} color="#A855F7" />;
  if (normName === 'llm apis') return <FaRobot size={size} color="#A855F7" />;

  // Fallback Icon
  return <FaCode size={size} color="#64748B" />;
}
