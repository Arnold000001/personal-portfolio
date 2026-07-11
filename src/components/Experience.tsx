'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { photos } from '@/config/photos';

const experiences = [
  {
    id: '01',
    title: 'SAP 主数据治理与可配置 BOM 搭建',
    tags: ['SAP PMDM', 'VC BOM'],
    description: `担任 PMDM 负责人及鲲鹏项目 Keyuser，主导物料主数据标准化，统一编码规则与属性完整性规范，建立主数据变更审批与版本管理流程。负责可配置选型 BOM（VC BOM）搭建，设定选型参数及约束关系，实现订单 BOM 自动推导生成。有效减少订单改单与错发频次，为 MES 执行提供干净数据底座。`,
    image: photos.projects.sap,
    imageAlt: 'SAP 主数据与 VC BOM 项目示意',
  },
  {
    id: '02',
    title: '施耐德 MES (PMS) 工厂部署落地',
    tags: ['MES', 'PMS'],
    description: `作为现场实施核心成员，完成 PMS 系统服务器部署、工位终端配置及功能验证。解决老设备通讯协议适配、网络延时等接口问题，制定分批上线切换方案。编写上线异常处理 SOP 并组织培训，实现工单全流程电子化与质量数据实时采集。工单执行准确率与追溯覆盖率显著改善，异常响应时间大幅缩短。`,
    image: photos.projects.mes,
    imageAlt: 'MES 系统部署现场',
  },
  {
    id: '03',
    title: 'ACB 线体工艺流程管理',
    tags: ['ACB', '工艺管理'],
    description: `负责空气断路器（ACB）装配线体工艺流程管理，全面掌握本体及辅件（辅助触头、欠压脱扣器、分励脱扣器等）的装配工序、物料配套及质量检测标准。在 MES 部署中担任工艺输入方，将实际工序路径与检验点转化为系统配置需求。结合 MES 反馈数据进行工序瓶颈分析并提出优化建议。`,
    image: photos.projects.acb,
    imageAlt: 'ACB 线体产线示意',
  },
  {
    id: '04',
    title: '视觉检测与自动化工具开发',
    tags: ['OpenCV', 'Python'],
    description: `针对 ACB 线体外观检测依赖人工目检的问题，自主开发相机检测程序，综合运用 HSV 颜色空间分割、霍夫直线/圆检测、机器学习分类器及深度学习目标检测等算法，覆盖划痕识别、尺寸测量、装配到位判定等多类检测需求。同时开发质量报表汇总、工单状态跟踪等自动化脚本，消除日常重复性事务工作。`,
    image: photos.projects.vision,
    imageAlt: '视觉检测算法界面',
  },
];

export default function Experience() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const el = ref.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return (
    <section
      id="experience"
      ref={ref}
      className="py-20 px-4 max-w-6xl mx-auto fade-in"
    >
      <h2 className="text-2xl font-bold font-mono mb-2">
        <span className="text-primary">#</span> 项目经历
      </h2>
      <div className="w-12 h-0.5 bg-primary/50 mt-1 mb-12" />

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={exp.id}>
            <div className="card-industrial rounded-lg overflow-hidden">
              <div className="flex flex-col md:flex-row">
                {/* 图片 */}
                <div className="w-full md:w-64 lg:w-80 flex-shrink-0 aspect-video md:aspect-auto md:h-full bg-bg-card relative">
                  <Image
                    src={exp.image}
                    alt={exp.imageAlt}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* 内容 */}
                <div className="flex-1 p-5 md:p-6">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <span className="text-primary font-mono text-sm opacity-60">
                        {exp.id}
                      </span>
                      <h3 className="text-lg font-bold text-white">
                        {exp.title}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-[10px] font-mono border border-primary/30 text-primary/80 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed mt-3">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>

            {/* 流程连接箭头（除最后一项） */}
            {index < experiences.length - 1 && (
              <div className="flex justify-center py-2">
                <div className="connector-line" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
