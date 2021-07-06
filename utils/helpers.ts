import { apiGet } from '@utils/apiFetch';
import { ApiPageI, ApiCvI, ApiBlogI } from '@utils/types';

export const untrailingSlashIt = (str: string): string =>
  str.replace(/\/$/, '');

export const trailingSlashIt = (str: string): string =>
  untrailingSlashIt(str) + '/';

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
