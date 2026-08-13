import type { CSSProperties, HTMLAttributes } from "react";

import activity from "./outline/activity.svg";
import article from "./outline/article.svg";
import bluetooth from "./outline/bluetooth.svg";
import bolt from "./outline/bolt.svg";
import brain from "./outline/brain.svg";
import brandGithub from "./outline/brand-github.svg";
import brandX from "./outline/brand-x.svg";
import brandInstagram from "./outline/brand-instagram.svg";
import brandLinkedin from "./outline/brand-linkedin.svg";
import brandYoutube from "./outline/brand-youtube.svg";
import car from "./outline/car.svg";
import check from "./outline/check.svg";
import chevronsRight from "./outline/chevrons-right.svg";
import code from "./outline/code.svg";
import download from "./outline/download.svg";
import fileText from "./outline/file-text.svg";
import homeHeart from "./outline/home-heart.svg";
import infoCircle from "./outline/info-circle.svg";
import mail from "./outline/mail.svg";
import markdown from "./outline/markdown.svg";
import menu from "./outline/menu-2.svg";
import microphone from "./outline/microphone.svg";
import mountain from "./outline/mountain.svg";
import pencil from "./outline/pencil.svg";
import playerPlay from "./outline/player-play.svg";
import presentation from "./outline/presentation.svg";
import quote from "./outline/quote.svg";
import rss from "./outline/rss.svg";
import sparkles from "./outline/sparkles.svg";
import star from "./outline/star.svg";
import user from "./outline/user.svg";
import video from "./outline/video.svg";
import x from "./outline/x.svg";

export const tablerIconAssets = {
  activity,
  article,
  bluetooth,
  bolt,
  brain,
  "brand-github": brandGithub,
  "brand-instagram": brandInstagram,
  "brand-linkedin": brandLinkedin,
  "brand-youtube": brandYoutube,
  "brand-x": brandX,
  car,
  check,
  "chevrons-right": chevronsRight,
  code,
  download,
  "file-text": fileText,
  "home-heart": homeHeart,
  "info-circle": infoCircle,
  mail,
  markdown,
  menu,
  microphone,
  mountain,
  pencil,
  "player-play": playerPlay,
  presentation,
  quote,
  rss,
  sparkles,
  star,
  user,
  video,
  x,
} as const;

export type TablerIconName = keyof typeof tablerIconAssets;

interface TablerIconProps extends HTMLAttributes<HTMLSpanElement> {
  icon: TablerIconName;
  className?: string;
}

export default function TablerIcon({
  icon,
  className,
  style,
  ...props
}: TablerIconProps) {
  const mask = `url("${tablerIconAssets[icon].src}")`;
  const iconStyle: CSSProperties = {
    WebkitMaskImage: mask,
    maskImage: mask,
    WebkitMaskPosition: "center",
    maskPosition: "center",
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
    WebkitMaskSize: "contain",
    maskSize: "contain",
    ...style,
  };

  return (
    <span
      aria-hidden="true"
      className={`inline-block shrink-0 bg-current ${className ?? "size-5"}`}
      style={iconStyle}
      {...props}
    />
  );
}
