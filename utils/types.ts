export interface RessourceI {
  path: string;
  title: string;
  getContent: any;
}

export interface ApiPageI {
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

export interface ApiCodeI {
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
  excerpt: string;
  items: Array<{
    title: string;
    description: string;
    links: Array<{
      title: string;
      url: string;
    }>;
    image: ImageI;
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
