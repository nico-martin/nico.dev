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
