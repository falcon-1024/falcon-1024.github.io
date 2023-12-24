"use client";
import { SetStateAction, useState } from 'react';
import Image from "next/image";
import {IntroC} from '@/components/intro'
import {HeaderC} from '@/components/header'
import Navbar from '@/components/navbar'
import Home from '@/components/home'
import AboutMe from '@/components/aboutme'
import ContactMe from '@/components/contactme'
import Project from '@/components/projects'
import Skills from '@/components/skills'
import WorkExperience from '@/components/workexp'

const sections = ['home','about-me', 'work-exp', 'projects', 'skills', 'contact-me'];

const IndexPage = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    element.scrollIntoView({behavior: 'smooth' });
    setActiveSection(section);
  };

  return (
    <div>
      <Navbar sections={sections} onSectionClick={scrollToSection} />
      {/* <nav className='nav'>
        <ul>
          <li onClick={() => scrollToSection('home')}>Home</li>
          <li onClick={() => scrollToSection('about-me')}>About Me</li>
          <li onClick={() => scrollToSection('work-exp')}>Work Experience</li>
          <li onClick={() => scrollToSection('projects')}>Projects</li>
          <li onClick={() => scrollToSection('skills')}>Skills</li>
          <li onClick={() => scrollToSection('contact-me')}>Contact Me</li>
        </ul>
      </nav> */}
      <Home />
      <AboutMe />
      <WorkExperience />
      <Project />
      <Skills />
      <ContactMe />
    </div>
  );
};

export default IndexPage;

// const IntroC = () => {
//   return (
//     <div>
//       <p className="font-light text-[#64748b]">Welcome to rahuls/dev,</p>
//     </div>
//   );
// };

// const School = () => {
//   return (
//     <div className="mt-12 flex flex-col gap-8">
//       <div className="flex flex-col gap-2">
//         <h4 className="text-lg font-semibold">school</h4>
//         <div
//           data-orientation="horizontal"
//           role="none"
//           className="shrink-0 bg-border h-[1px] w-full"
//         ></div>
//       </div>
//       <div className="grid md:grid-cols-2 md:gap-8 grid-cols-1 gap-4 ">
//         <div className="rounded-xl border bg-card text-card-foreground shadow">
//           <div className="flex flex-col space-y-1.5 p-6">
//             <h3 className="font-semibold leading-none tracking-tight">
//               <span className="font-semibold">MS (Computer Science)</span>
//             </h3>
//             <p className="text-sm text-muted-foreground">
//               <a
//                 href="https://www.uwindsor.ca/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <span className="font-semibold"> - </span>University of Windsor
//               </a>
//             </p>
//           </div>
//           <div className="p-6 pt-0 h-28">
//             <p className="text-sm">
//               took courses on adv. Software Engineering, DSA and Machine
//               Learning.
//             </p>
//           </div>
//           <div className="items-center p-6 pt-0 flex justify-between">
//             <p className="text-sm font-light">
//               <span className="font-semibold">
//                 <span className="font-normal">•</span> 2022 - 2024
//               </span>
//             </p>
//           </div>
//         </div>
//         <div className="rounded-xl border bg-card text-card-foreground shadow">
//           <div className="flex flex-col space-y-1.5 p-6">
//             <h3 className="font-semibold leading-none tracking-tight">
//               <span className="font-semibold">BE (Computer Engineering)</span>
//             </h3>
//             <p className="text-sm text-muted-foreground">
//               <a
//                 href="https://www.gtu.ac.in/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className=""
//               >
//                 <span className="font-semibold"> - </span>Gujarat Technological
//                 University
//               </a>
//             </p>
//           </div>
//           <div className="p-6 pt-0 h-28">
//             <p className="text-sm">
//               introduced to different computer science concept and programming
//               languages.
//             </p>
//           </div>
//           <div className="items-center p-6 pt-0 flex justify-between">
//             <p className="text-sm font-light">
//               <span className="font-semibold">
//                 <span className="font-normal">•</span> 2017 - 2021
//               </span>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
