import React from 'react';

import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import { TbBrandNextjs } from 'react-icons/tb';
import { RiJavascriptLine } from 'react-icons/ri';
import { SiFreelancer } from 'react-icons/si';

import nodenasa from '../public/nodenasa.png';
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
    title: 'Frontend project',
    location: 'Warsaw, Poland',
    description:
      'We created a Single Page Application for a local taxi service, primarily using vanilla HTML, and CSS.',
    icon: React.createElement(LuGraduationCap),
    date: 'Sep-Nov 2022',
  },
  {
    title: 'Fronted project',
    location: 'Warsaw, Poland',
    description:
      'We worked on a SPA for a windows installation shop, primarily using vanilla JS, HTML, and CSS. During this project, we gained proficiency in popular technologies such as AJAX, Git, Babel, Browserify, Webpack, Heroku, FileZilla.',
    icon: React.createElement(RiJavascriptLine),
    date: 'Nove-Dev 2022',
  },
  {
    title: 'Frontend project',
    location: 'Warsaw, Poland',
    description:
      "We developed an Interactive Development Environment (IDE) application using React and Typescript. To effectively manage the application's state, we integrated Redux with Typescript, ensuring robust state management. We went a step further by creating a custom esBuild plugin to fetch files from npm, enhancing the development process.",
    icon: React.createElement(FaReact),
    date: 'Jan-Mar 2023',
  },
  {
    title: 'Frontend project',
    location: 'Warsaw, Poland',
    description:
      'We create a compact React and Typescript web application, serving as a game hub. Implemented forms with React Hook Forms, connected to the backend, and deployed the app on Vercel. Leveraged Immer for logic enhancement and designed the user interface using ChakraUI. Ensured efficient data retrieval and updates through React Query with caching optimization. Managed application state with Zustand and incorporated React Router for routing.',
    icon: React.createElement(FaReact),
    date: 'Mar-May 2023',
  },
  {
    title: 'Fullstack project',
    location: 'Warsaw, Poland',
    description:
      "We built an issue tracker app with strong user authentication using Next.js and NextAuth.js. The app is optimized for speed and SEO, deployed on Vercel. For efficient data management, we leveraged ReactQuery and Zustand with RESTful APIs, enhancing data retrieval with TypeScript, Next.js 13+, and React Cache. The front-end design is sleek, employing Tailwind CSS and Radix UI. Data integrity is ensured through Prisma's connection to MySQL/MariaDB databases, and user experience is improved with lazy loading. This project showcases my expertise in creating high-performing, secure, and user-friendly web applications.",
    icon: React.createElement(TbBrandNextjs),
    date: 'Jul-Sep 2023',
  },
  {
    title: 'Full-stack developer',
    location: 'Poland',
    description: 'Freelancer',
    icon: React.createElement(SiFreelancer),
    date: 'Nov 2023 - present',
  },
] as const;

export const projectsData = [
  {
    title: 'Node.js project',
    description: 'Mission control panel, just order the launch!',
    tags: ['Node.js', 'Express.js', 'MongoDB', 'AWSEC2', 'Mongoose', 'Docker'],
    externalUrl: 'http://51.20.129.247:8000/',
    imageUrl: nodenasa,
  },
  {
    title: 'IDE',
    description:
      'Writing & documenting JS code. Use show() to show any React comp, str, or num or anything else. Run "npx js-success-note serve test.js" to save data there.',
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
  'Object-oriented programming',
  'HTML',
  'Apollo',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Express.js',
  'GraphQL',
  'Git',
  'Tailwind',
  'Prisma',
  'MySQL/MariDB',
  'Redux',
  'Framer Motion',
  'React Query',
  'Zustand',
  'ChakraUI',
  'React-hook-form',
  'NextAuth.js',
  'React-email',
  'Linux',
  'Rest API',
  'React Router',
  'ESBuild',
  'WASM',
  'Lerna',
  'AJAX',
  'GitHub',
  'Babel.js',
  'FileZilla',
] as const;
