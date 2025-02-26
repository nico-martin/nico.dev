import * as process from 'process';
import React from 'react';

export const MESSAGES = {
  GENERAL_ERROR: 'Something went wrong',
};

export const LINKS: Record<string, string> = {
  '/': 'About',
  '/blog': 'Blog',
  '/talks': 'Talks',
  '/projects': 'Projects',
  '/workshops/ai-agents': 'Workshops',
};

export const FOOTER_LINKS: Record<string, string> = {
  '/privacy': 'Privacy',
  '/legal': 'Legal',
  //'/uses': '/uses',
  '/cv': 'CV',
  '/about-this-website': 'This Project is Open Source',
};

export const API_HOST: string = process.env.API_HOST || 'https://wp.nico.dev';

export const SOCIAL_LINKS: Record<
  string,
  {
    label: string;
    link: string;
  }
> = {
  bluesky: {
    label: 'Nico Martin on Bluesky',
    link: 'https://bsky.app/profile/nico.dev',
  },
  twitter: {
    label: 'Nico Martin on Twitter',
    link: 'https://twitter.com/nic_o_martin',
  },
  linkedin: {
    label: 'Nico Martin on LinkedIn',
    link: 'https://www.linkedin.com/in/nicodotdev/',
  },
  devto: {
    label: 'Nico Martin on Dev.to',
    link: 'https://dev.to/nicomartin',
  },
  /*wordpress: {
    label: "Nico Martin's profile on WordPress.org",
    link: 'https://profiles.wordpress.org/nico_martin/',
  },*/
  github: {
    label: 'GitHub repositories by Nico Martin',
    link: 'https://github.com/nico-martin',
  },
  /*dribbble: {
    label: 'Nico Martin on Dribbble',
    link: 'https://dribbble.com/nicomartin',
  },*/
};
