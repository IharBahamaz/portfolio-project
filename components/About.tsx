'use client';
import React from 'react';
import SectionHeading from './SectionHeading';
import { motion } from 'framer-motion';
import useSectionInView from '@/hooks/useSectionInView';

const About = () => {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id='about'
    >
      <SectionHeading>About me</SectionHeading>
      <p className='mb-1'>
        After dedicating over a year to studying and gaining practical
        experience, the prospect of collaborating with a team of professional
        developers greatly excites me.{' '}
        <span className='font-medium'>My fondness</span>, for technology and
        programming is rooted in a love for problem-solving and working with
        both <span className='font-medium'>software and hardware</span>.{' '}
        <span className='italic'>
          I enjoy solving complex problems, and micro problems.
        </span>{' '}
        I <span className='underline'>love</span> when system start to work
        correctly and the feeling of finally figuring out a solution to a
        problem. My core stack is{' '}
        <span className='font-medium'>
          JavaScript, Node.js/Express.js, MongoDB,
        </span>
        . I am also familiar with
        <span className='font-medium'> Prisma, TypeScript, </span>. I am always
        looking to learn new technologies, for example Rust & WASM. I am
        currently looking for a{' '}
        <span className='font-medium'>full-time position</span> as a Full-stack
        developer with focus on Back End.
      </p>
      <p>
        <span className='italic'>When not working</span>, my time is filled with
        various interests and activities. I find relaxation in reading fiction
        cold exposures & sauna. Staying informed about the latest in technology
        is a passion, and I enjoy connecting with friends. Setting up{' '}
        <span className='font-medium'>
          Arch Linux & DWM, exploring gadgets, hardware, bug bounty, network
          engineering.{' '}
        </span>
        <span className='font-medium'></span>{' '}
      </p>
    </motion.section>
  );
};

export default About;
