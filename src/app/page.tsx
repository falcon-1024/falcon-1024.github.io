"use client";
import { SetStateAction, useState } from 'react';
// import Head from 'next/head';
import Navbar from '@/components/navbar'
import Home from '@/components/home'
import Education from '@/components/education'
import ContactMe from '@/components/contactme'
import Project from '@/components/projects'
import Skills from '@/components/skills'
import WorkExperience from '@/components/workexp'

const sections = ['home','education', 'work-exp', 'projects', 'contact-me'];

const IndexPage = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element==null) {
      
    }
    else {
      element.scrollIntoView({behavior: 'smooth' });
      setActiveSection(section);
    }
  };

  return (
    <div className="dark">
      <Navbar sections={sections} onSectionClick={scrollToSection} />
      <Home />
      <Education />
      <WorkExperience />
      <Project />
      <ContactMe />
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

