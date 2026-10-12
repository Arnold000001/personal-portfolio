export interface HonorPhoto {
  image: string;
  title: string;
  year: string;
}

export interface ProjectPhotos {
  sap: string;
  mes: string;
  acb: string;
  vision: string;
}

export interface PhotosConfig {
  avatar: string;
  about: string;
  projects: ProjectPhotos;
  honors: HonorPhoto[];
}

export const photos: PhotosConfig = {
  // 头像 - 建议 400x400，圆形裁切
  avatar: '/images/avatar.jpg',

  // 关于我 - 建议 300x300，方形
  about: '/images/about.jpg',

  // 项目经历配图 - 建议 16:9 比例
  projects: {
    sap: '/images/projects/sap-vcbom.jpg',
    mes: '/images/projects/mes-pms.jpg',
    acb: '/images/projects/acb-line.jpg',
    vision: '/images/projects/vision-detection.jpg',
  },

  // 荣誉墙 - 支持任意数量
  honors: [
    {
      image: '/images/honors/honor1.jpg',
      title: '施耐德优秀项目奖',
      year: '2025',
    },
    {
      image: '/images/honors/honor2.jpg',
      title: 'PMP 认证',
      year: '2024',
    },
    {
      image: '/images/honors/honor3.jpg',
      title: '鲲鹏项目突出贡献',
      year: '2024',
    },
    {
      image: '/images/honors/honor4.jpg',
      title: '视觉检测软件著作权',
      year: '2025',
    },
  ],
};