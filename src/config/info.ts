export interface SocialLink {
  name: string;
  url: string;
  icon: string; // lucide 图标名称
}

export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string[];
  about: string;
  skills: string[];
  socials: SocialLink[];
  email: string;
  resumeUrl: string; // 简历 PDF 路径
  footerText: string;
}

export const info: PersonalInfo = {
  name: '黄林浩',
  title: '制造数字化工程师',
  subtitle: ['SAP 主数据治理', 'MES 系统部署', '视觉检测算法', '工艺流程管理'],
  about:
    '制造数字化工程师，专注于从数据源头到现场执行的全链路落地。擅长 SAP 主数据治理、MES 系统部署、视觉检测算法开发及工艺流程管理，具备软硬件结合的系统性解决问题能力。',
  skills: [
    'SAP PMDM',
    'MES/PMS',
    'VC BOM',
    'Python',
    'OpenCV',
    '机器学习',
    '深度学习',
    '自动化脚本',
    '工艺管理',
    '数据治理',
    '视觉检测',
  ],
  socials: [
    { name: 'GitHub', url: 'https://github.com', icon: 'Github' },
    { name: '领英', url: 'https://linkedin.com', icon: 'Linkedin' },
    { name: '微信', url: '#', icon: 'MessageCircle' },
  ],
  email: '1669015564@qq.com',
  resumeUrl: '/resume.pdf',
  footerText: '© 2026 黄林浩 · 制造数字化工程师 · 构建于 Next.js + Tailwind',
};