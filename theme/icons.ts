import arrowLeftThin from './_icons/arrow-left-thin.svg';
import arrowRightThun from './_icons/arrow-right-thin.svg';
import arrow from './_icons/arrow.svg';
import check from './_icons/check.svg';
import contentCopy from './_icons/content-copy.svg';
import devto from './_icons/devto.svg';
import dribbble from './_icons/dribbble.svg';
import github from './_icons/github.svg';
import informationSlabCircleOutline from './_icons/information-slab-circle-outline.svg';
import linkedin from './_icons/linkedin.svg';
import mastodon from './_icons/mastodon.svg';
import openInNew from './_icons/open-in-new.svg';
import play from './_icons/play.svg';
import presentationPlay from './_icons/presentation-play.svg';
import presentation from './_icons/presentation.svg';
import print from './_icons/print.svg';
import twitter from './_icons/twitter.svg';
import videoOutline from './_icons/video-outline.svg';
import wordpress from './_icons/wordpress.svg';
import youtube from './_icons/youtube.svg';

const icons = {
  devto,
  dribbble,
  github,
  linkedin,
  print,
  twitter,
  wordpress,
  arrow,
  mastodon,
  openInNew,
  youtube,
  arrowLeftThin,
  arrowRightThun,
  videoOutline,
  presentation,
  presentationPlay,
  informationSlabCircleOutline,
  play,
  contentCopy,
  check,
};

export type IconType = keyof typeof icons;

export default icons;
