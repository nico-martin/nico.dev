import dayjs from 'dayjs';
import { IconType } from '@theme';
import { apiGet } from '@utils/apiFetch';
import { API_HOST } from '@utils/constants';
import {
  ApiBlogI,
  ApiCfpI,
  ApiCodeI,
  ApiCvI,
  ApiPageI,
  ApiProjectsI,
  ApiTalkI,
  ApiTalksI,
  ApiWorkshopsI,
  LinkI,
  TALK_LINK,
  TALK_VIDEO_TYPE,
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

const host = trailingSlashIt(API_HOST);

export const getPageProps = async (slug: string) =>
  getApiProps<ApiPageI>(`${host}wp-json/nico/v1/page/${slug}`);

export const getCVProps = async () =>
  getApiProps<ApiCvI>(`${host}wp-json/nico/v1/cv`);

export const getBlogProps = async () =>
  getApiProps<ApiBlogI>(`${host}wp-json/nico/v1/blog`);

export const getTalkProps = async () =>
  getApiProps<ApiTalkI>(`${host}wp-json/nico/v1/talk`);

export const getWorkshopsProps = async () => {
  const resp = await getApiProps<ApiWorkshopsI>(
    `${host}wp-json/nico/v1/workshops`
  );
  resp.props.pageData.workshops = await Promise.all(
    resp.props.pageData.workshops.map(async (workshop) => {
      try {
        const poster = await getVideoPosterByUrl(workshop.video.url);
        return { ...workshop, video: { ...workshop.video, poster } };
      } catch (e) {
        return workshop;
      }
    })
  );
  return resp;
};

export const getTalksProps = async () => {
  const resp = await getApiProps<ApiTalksI>(`${host}wp-json/nico/v1/talks`);
  resp.props.pageData.videos = await Promise.all(
    resp.props.pageData.videos.map(async (video) => {
      try {
        const poster = await getVideoPosterByUrl(video.url);
        return { ...video, poster };
      } catch (e) {
        return video;
      }
    })
  );
  return resp;
};

export const getCodeProps = async () =>
  getApiProps<ApiCodeI>(`${host}wp-json/nico/v1/code`);

export const getProjectsProps = async () =>
  getApiProps<ApiProjectsI>(`${host}wp-json/nico/v1/projects`);

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

export const externalLinkIcon = (
  link: string,
  fallback: IconType = null
): IconType =>
  link.startsWith('https://github.com')
    ? 'github'
    : link.startsWith('https://twitter.com')
    ? 'twitter'
    : link.startsWith('https://dev.to/')
    ? 'devto'
    : link.startsWith('https://wordpress.org/')
    ? 'wordpress'
    : link.startsWith('https://slides.nico.dev/') ||
      link.startsWith('https://slide.nicomartin.ch/') ||
      link.startsWith('https://slides.nicomartin.ch/')
    ? 'presentation'
    : link.startsWith('https://youtu.be/') ||
      link.startsWith('https://youtube.com/') ||
      link.startsWith('https://www.youtube.com/') ||
      link.startsWith('https://wordpress.tv')
    ? 'videoOutline'
    : fallback || 'openInNew';

export const youtubeParser = (url: string): string | false => {
  const regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[7].length == 11 ? match[7] : false;
};

export const getVideoTypeByUrl = (url: string): TALK_VIDEO_TYPE => {
  if (url.startsWith('https://videopress.com/v/')) {
    return TALK_VIDEO_TYPE.WORDPRESS;
  }

  if (url.startsWith('https://cdn.jwplayer.com/previews/')) {
    return TALK_VIDEO_TYPE.JWPLAYER;
  }

  if (youtubeParser(url)) {
    return TALK_VIDEO_TYPE.YOUTUBE;
  }

  return null;
};

export const getVideoPosterByUrl = async (url: string) => {
  const type = getVideoTypeByUrl(url);
  if (type === TALK_VIDEO_TYPE.YOUTUBE) {
    return `https://img.youtube.com/vi/${youtubeParser(url)}/maxresdefault.jpg`;
  }

  if (type === TALK_VIDEO_TYPE.WORDPRESS) {
    const resp = await apiGet<{ poster: string }>(
      `https://public-api.wordpress.com/rest/v1.1/videos/${getVideopressIdFromUrl(
        url
      )}/`
    );
    return resp.poster;
  }

  if (type === TALK_VIDEO_TYPE.JWPLAYER) {
    const resp = await apiGet<{ playlist: Array<{ image: string }> }>(
      `https://cdn.jwplayer.com/v2/media/${getJwpIdFromUrl(url)}`
    );
    return resp.playlist[0].image;
  }
  return null;
};

export const getJwpIdFromUrl = (url: string): string =>
  untrailingSlashIt(url).replace('https://cdn.jwplayer.com/previews/', '');

export const getVideopressIdFromUrl = (url: string): string =>
  untrailingSlashIt(url).replace('https://videopress.com/v/', '');

export const convertTalkLinks = (
  links: Array<{ key: TALK_LINK; value: string }>,
  title: string,
  venue: string
): Array<LinkI> =>
  links.map((link) => ({
    url: link.value,
    ...(link.key === 'video'
      ? {
          label: 'Video',
          title: `Nico's Video for "${title}" at ${venue}`,
          icon: 'videoOutline',
        }
      : link.key === 'infos'
      ? {
          label: 'Infos',
          title: `More informations about Nico's Talk at ${venue}`,
          icon: 'informationSlabCircleOutline',
        }
      : link.key === 'slides'
      ? {
          label: 'Slides',
          title: `Nico's Slides for "${title}" at ${venue}`,
          icon: 'presentationPlay',
        }
      : { label: '', title: '', icon: 'informationSlabCircleOutline' }),
  }));

export const getCfp = async () =>
  getApiProps<ApiCfpI>(`${host}wp-json/nico/v1/cfp`);

export const nl2br = (str: string): string => str.replace(/\n/g, '<br />');
