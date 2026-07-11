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

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string[];
  about: string;
  skills: string[];
  socials: SocialLink[];
  email: string;
  resumeUrl: string;
  footerText: string;
}