import { apiGet } from '@utils/apiFetch';
import { ApiPageI, ApiCvI } from '@utils/types';

export const untrailingSlashIt = (str: string): string =>
  str.replace(/\/$/, '');

export const trailingSlashIt = (str: string): string =>
  untrailingSlashIt(str) + '/';

export const getPageProps = async (slug: string) => {
  try {
    const pageData: ApiPageI = await apiGet<ApiPageI>(
      `https://wp.nico.dev/wp-json/nico/v1/page/${slug}`
    );
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

export const getCVProps = async () => {
  try {
    const pageData: ApiCvI = await apiGet<ApiCvI>(
      'https://wp.nico.dev/wp-json/nico/v1/cv'
    );
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
