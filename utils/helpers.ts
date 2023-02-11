import dayjs from 'dayjs';
import { IconType } from '@theme';
import { apiGet } from '@utils/apiFetch';
import {
  ApiPageI,
  ApiCvI,
  ApiBlogI,
  ApiTalkI,
  ApiCodeI,
  ApiProjectsI,
} from '@utils/types';

export const IS_BROWSER = typeof window !== 'undefined';
export const IS_NODE = !IS_BROWSER;

export const untrailingSlashIt = (str: string): string =>
  str.replace(/\/$/, '');

export const trailingSlashIt = (str: string): string =>
  untrailingSlashIt(str) + '/';

export const formatDate = (date: string) => dayjs(date).format('DD.MM.YYYY');

const getApiProps = async <T>(url: string) => {
  try {
    const pageData: T = await apiGet<T>(url);
    return {
      props: {
        pageData,
      },
    };
  } catch (e) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
};

export const getPageProps = async (slug: string) =>
  getApiProps<ApiPageI>(`https://wp.nico.dev/wp-json/nico/v1/page/${slug}`);

export const getCVProps = async () =>
  getApiProps<ApiCvI>('https://wp.nico.dev/wp-json/nico/v1/cv');

export const getBlogProps = async () =>
  getApiProps<ApiBlogI>('https://wp.nico.dev/wp-json/nico/v1/blog');

export const getTalkProps = async () =>
  getApiProps<ApiTalkI>('https://wp.nico.dev/wp-json/nico/v1/talk');

export const getCodeProps = async () =>
  getApiProps<ApiCodeI>('https://wp.nico.dev/wp-json/nico/v1/code');

export const getProjectsProps = async () =>
  getApiProps<ApiProjectsI>('https://wp.nico.dev/wp-json/nico/v1/projects');

export const isUrl = (string: string): boolean =>
  string.indexOf('https://') === 0 || string.indexOf('http://') === 0;

export const convertStringToAnchor = (url: string): string =>
  `<a href='${url}' target='_blank'>${url
    .replace('https://www.', '')
    .replace('https://', '')
    .replace('http://www.', '')
    .replace('http://', '')}</a>`;

export const maybeConvertStringToAnchor = (url: string): string =>
  isUrl(url) ? convertStringToAnchor(url) : url;

export const externalLinkIcon = (link: string): IconType =>
  link.startsWith('https://github.com')
    ? 'github'
    : link.startsWith('https://twitter.com')
    ? 'twitter'
    : 'openInNew';
