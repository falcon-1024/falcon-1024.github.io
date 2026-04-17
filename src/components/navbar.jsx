"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const visible_section_name = [
  "education",
  "experience",
  "skills",
  "projects",
  "contact me",
];

const Navbar = ({ sections, onSectionClick }) => {
  const [activeSection, setActiveSection] = useState(sections[0]);

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveSection(entry.target.id);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    sections.forEach((section) => {
      const target = document.getElementById(section);
      if (target) {
        observer.observe(target);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [sections]);

  useEffect(() => {
    const init = async () => {
      const { Collapse, initTWE } = await import("tw-elements");
      initTWE({ Collapse });
    };
    init();
  }, []);

  return (
    <nav className="surface-nav z-10 fixed top-0 flex-no-wrap flex w-screen items-center justify-between py-2 md:flex-wrap md:justify-start md:py-2">
      <div className="flex w-full flex-wrap items-center justify-between px-3">
        {/* <!-- Hamburger button for mobile view --> */}
        <button
          className="nav-icon block border-0 bg-transparent px-2 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 md:hidden"
          type="button"
          data-twe-collapse-init
          data-twe-target="#navbarSupportedContent1"
          aria-controls="navbarSupportedContent1"
          aria-expanded="false"
          aria-label="Toggle Navigation"
        >
          {/* <!-- Hamburger icon --> */}
          <span className="[&>svg]:w-7">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-7 w-7"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>

        {/* <!-- Logo --> */}
        <button
          type="button"
          className="brand-mark mb-1 ml-2 mr-5 mt-1 flex items-center"
          onClick={() => {
            onSectionClick("home");
          }}
        >
          <Image
            src="/initial.png"
            className="brand-logo"
            alt="Abhi Patel initials"
            width={24}
            height={24}
            priority
          />
        </button>
        {/* <!-- Collapsible navigation container --> */}
        <div
          className="!visible hidden flex-grow basis-[100%] items-center md:!flex md:basis-auto mt-1"
          id="navbarSupportedContent1"
          data-twe-collapse-item
        >
          {/* <!-- Left navigation links --> */}
          <ul
            className="list-style-none mr-auto flex flex-col pl-0 md:flex-row"
            data-twe-navbar-nav-ref
          >
            {sections.slice(1).map((section, index) => (
              <li
                key={section}
                className="m-2 md:pr-2"
                data-twe-nav-item-ref
                onClick={() => {
                  onSectionClick(section);
                }}
              >
                <a
                  className={`nav-link transition duration-200 hover:ease-in-out disabled:text-black/30 motion-reduce:transition-none md:px-2 ${
                    activeSection === section ? "active" : ""
                  }`}
                  href={`#${section}`}
                  data-twe-nav-link-ref
                >
                  {visible_section_name.at(index).toUpperCase()}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* <!-- Right elements --> */}
        <div className="relative ml-2 flex items-center gap-1">
          {/* <!-- LinkedIn Icon --> */}
          <a
            className="nav-icon mr-4 mt-2 transition duration-200 hover:ease-in-out disabled:text-black/30 motion-reduce:transition-none"
            href="https://www.linkedin.com/in/abhi--patel"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open LinkedIn profile"
          >
            <FontAwesomeIcon icon={faLinkedinIn} className="h-6" />
          </a>

          {/* <!-- Github Icon --> */}
          <a
            className="nav-icon mr-4 mt-2 transition duration-200 hover:ease-in-out disabled:text-black/30 motion-reduce:transition-none"
            href="https://github.com/falcon-1024"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open GitHub profile"
          >
            <FontAwesomeIcon icon={faGithub} className="h-6" />
          </a>
        </div>
      </div>
    </nav>
    // <nav
    //   className="nav flex justify-between px-4 py-2 items-center"
    //   style={navbarStyle}
    //   ref={navRef}
    // >
    //   <div
    //     className="text-2xl font-sans px-2 uppercase font-medium cursor-pointer w-fit"
    //     onClick={() => onSectionClick("home")}
    //   >
    //     Abhi Patel
    //   </div>
    //   <ul className="md:flex hidden justify-end items-center">
    //     {sections.slice(1).map((section, index) => (
    //       <li
    //         key={section}
    //         className={getLinkStyle(section)}
    //         onClick={() => {
    //           onSectionClick(section);
    //         }}
    //       >
    //         {visible_section_name.at(index)}
    //       </li>
    //     ))}
    //   </ul>
    //   {/* <div
    //     className="options-button"
    //     onClick={() => setShowOptions(!showOptions)}
    //   >
    //     <div className="line">advs</div>
    //     <div className="line">vasdvas</div>
    //     <div className="line">gbsad</div>
    //   </div> */}
    //   <div className="flex md:hidden">
    //     <div
    //       className={`hamburger ${showOptions ? "open" : ""}`}
    //       onClick={() => setShowOptions(!showOptions)}
    //     >
    //       <div className="line"></div>
    //       <div className="line"></div>
    //       <div className="line"></div>
    //     </div>
    //     {showOptions && (
    //       <div className="bg-inherit top-12 w-full absolute flex flex-col -right-1/3 overflow-hidden">
    //         {/* Your menu items go here */}
    //         <div className="menu-item">Home</div>
    //         <div className="menu-item">About</div>
    //         <div className="menu-item">Services</div>
    //         <div className="menu-item">Contact</div>
    //       </div>
    //     )}
    //   </div>
    // </nav>
  );
};

export default Navbar;
