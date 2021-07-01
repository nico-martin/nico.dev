import { apiGet } from '@utils/apiFetch';
import { ApiPageI } from '@utils/types';

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
