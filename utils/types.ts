type GetContent<T> = () => Promise<T>;

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

export type ApiBlogI = Array<{
  title: string;
  abstract: string;
  date: string;
  publisher: string;
  link: string;
}>;
