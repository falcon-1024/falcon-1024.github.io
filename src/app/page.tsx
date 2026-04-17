"use client";
import { useState } from 'react';
// import Head from 'next/head';
import Navbar from '@/components/navbar'
import Home from '@/components/home'
import Education from '@/components/education'
import ContactMe from '@/components/contactme'
import Project from '@/components/projects'
import Skills from '@/components/skills'
import WorkExperience from '@/components/workexp'
import ThemeToggle from '@/components/themeToggle'

const sections = ['home','education', 'work-exp', 'skills', 'projects', 'contact-me'];

const IndexPage = () => {
  const [, setActiveSection] = useState('home');

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element == null) {
      return;
    }

    const nav = document.querySelector('nav');
    const navHeight = nav instanceof HTMLElement ? nav.offsetHeight : 0;
    const y = element.getBoundingClientRect().top + window.scrollY - navHeight - 16;

    window.scrollTo({ top: y, behavior: 'smooth' });
    setActiveSection(section);
  };

  return (
    <div className="min-h-screen">
      <Navbar sections={sections} onSectionClick={scrollToSection} />
      <Home />
      <Education />
      <WorkExperience />
      <Skills />
      <Project />
      <ContactMe />
      <ThemeToggle />
    </div>
  );
};

// function MyApp() {
//   return (
//     <>
//       <Head>
//         <link rel="icon" href="icon.png" />
//       </Head>
//     </>
//   );
// }

export default IndexPage;
// export {MyApp};

