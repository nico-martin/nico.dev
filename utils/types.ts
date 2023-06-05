import { IconType } from '@theme';

export interface RessourceI {
  path: string;
  title: string;
  getContent: any;
}

export interface ApiPageI {
  metaDescription: string;
  intro: string;
  title: string;
  content: string;
  excerpt: string;
}

export interface ApiCvI {
  contact: {
    name: string;
    address: string;
    email: string;
    phone: string;
    web: string;
    twitter: string;
    linkedin: string;
    github: string;
    image: string;
  };
  community: {
    de: string;
    en: string;
  };
  professional: Array<{
    from: string;
    to: string;
    title_de: string;
    title_en: string;
    desc_de: string;
    desc_en: string;
  }>;
  education: Array<{
    from: string;
    to: string;
    title_de: string;
    title_en: string;
  }>;
  language: Array<{
    lang_de: string;
    desc_de: string;
    lang_en: string;
    desc_en: string;
  }>;
}

export interface ApiBlogI {
  metaDescription: string;
  intro: string;
  excerpt: string;
  items: Array<{
    title: string;
    abstract: string;
    date: string;
    publisher: string;
    link: string;
  }>;
}

export interface ApiTalkI {
  metaDescription: string;
  intro: string;
  excerpt: string;
  items: Array<{
    venue: string;
    title: string;
    date: string;
    infos: string;
    slides: string;
    video: string;
  }>;
}

export enum TALK_LINK {
  INFOS = 'infos',
  SLIDES = 'slides',
  VIDEO = 'video',
}

export enum TALK_VIDEO_TYPE {
  YOUTUBE = 'youtube',
  WORDPRESS = 'wordpresstv',
  JWPLAYER = 'jwplayer',
}

export interface ApiTalksVideoI {
  url: string;
  width?: number;
  height?: number;
  title?: string;
  poster?: string;
}

export interface ApiTalksSingleI {
  title: string;
  venue: string;
  date: string;
  links: Array<{ key: TALK_LINK; value: string }>;
}

export interface ApiTalksCategoriesI {
  title: string;
  image: ImageI;
  imagePosition: string;
  //gallery: Array<ImageI>;
  items: Array<ApiTalksSingleI>;
}

export interface ApiTalksI {
  metaDescription: string;
  intro: string;
  videos: Array<ApiTalksVideoI>;
  categories: Array<ApiTalksCategoriesI>;
}

export interface ApiCodeI {
  metaDescription: string;
  intro: string;
  excerpt: string;
  items: Array<{
    title: string;
    tags: string;
    description: string;
    codeTitle: string;
    code: string;
    demo: string;
  }>;
}

export interface ApiProjectsI {
  metaDescription: string;
  intro: string;
  items: Array<{
    title: string;
    description: string;
    links: Array<LinkI>;
    image: ImageI;
    imagePosition:
      | 'center center'
      | 'center top'
      | 'center bottom'
      | 'left center'
      | 'left top'
      | 'left bottom'
      | 'right center'
      | 'right top'
      | 'right bottom';
  }>;
}

export interface ImageSizeI {
  url: string;
  width: number;
  height: number;
}

export interface ImageI {
  sizes: Record<string, ImageSizeI>;
  placeholder: string;
  alt: string;
  title: string;
}

export interface LinkI {
  label: string;
  title: string;
  url: string;
  icon?: IconType;
}

export interface ApiPaperI {
  title: string;
  content: Array<{
    title: string;
    text: string;
  }>;
  notes: string;
}

export interface ApiCfpI {
  papers: Array<ApiPaperI>;
  about: Array<{
    title: string;
    text: string;
  }>;
  links: Array<{
    title: string;
    url: string;
  }>;
  portrait: Array<string>;
}
