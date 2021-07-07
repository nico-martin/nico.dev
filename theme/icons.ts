import arrow from './_icons/arrow.svg';
import devto from './_icons/devto.svg';
import dribbble from './_icons/dribbble.svg';
import github from './_icons/github.svg';
import linkedin from './_icons/linkedin.svg';
import print from './_icons/print.svg';
import twitter from './_icons/twitter.svg';
import wordpress from './_icons/wordpress.svg';

const icons = {
  devto,
  dribbble,
  github,
  linkedin,
  print,
  twitter,
  wordpress,
  arrow,
};

export type IconType = keyof typeof icons;

export default icons;
