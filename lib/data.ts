import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';

import ide from '@/public/IDE.png';
import gamehub from '@/public/gamehub.png';
import issuetracker from '@/public/issuetracker.png';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Graduated bootcamp',
    location: 'Miami, FL',
    description:
      'I graduated after 6 months of studying. I immediately found a job as a front-end developer.',
    icon: React.createElement(LuGraduationCap),
    date: '2019',
  },
  {
    title: 'Front-End Developer',
    location: 'Orlando, FL',
    description:
      'I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.',
    icon: React.createElement(CgWorkAlt),
    date: '2019 - 2021',
  },
  {
    title: 'Full-Stack Developer',
    location: 'Houston, TX',
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: '2021 - present',
  },
] as const;

export const projectsData = [
  {
    title: 'Interactive Development Environment',
    description:
      'CLI IDE for writing & documenting JS/JSX code. Play with code how you want.Usage just run  npx js-success-note serve',
    tags: ['TypeScript', 'React', 'Redux', 'EsBuild', 'Lerna'],
    externalUrl: 'https://www.npmjs.com/package/js-success-note',
    imageUrl: ide,
  },
  {
    title: 'Game Hub',
    description:
      'You can discover some games here , filter and sort them like you want.',
    tags: [
      'React',
      'TypeScript',
      'React Router',
      'ChakraUI',
      'React Query',
      'Vercel',
      'React-hook-form',
      'Zustand',
    ],
    externalUrl: 'https://illusorygame.vercel.app/',
    imageUrl: gamehub,
  },
  {
    title: 'Issue tracker',
    description:
      'Issue tracker builded using Next.js , helping you to add, edit, and track your issues',
    tags: [
      'Next.js',
      'TypeScript',
      'RestAPI',
      'MySQL',
      'Zustand',
      'Tailwind',
      'React Query',
      'Prisma',
    ],
    externalUrl: 'https://issue-tracker-seven-xi.vercel.app/',

    imageUrl: issuetracker,
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'Tailwind',
  'Prisma',
  'MongoDB',
  'Redux',
  'GraphQL',
  'Apollo',
  'Express',
  'PostgreSQL',
  'Python',
  'Django',
  'Framer Motion',
] as const;
