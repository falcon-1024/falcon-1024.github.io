"use client";
import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const visible_section_name = [
  "education",
  "experience",
  "projects",
  "contact me",
];

const Navbar = ({ sections, onSectionClick }) => {
  const [activeSection, setActiveSection] = useState(sections[0]);
  const [navbarStyle, setNavbarStyle] = useState({
    backgroundColor: "transparent",
  });
  const [showOptions, setShowOptions] = useState(false);
  const navRef = useRef(null);

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
      const { Collapse, Carousel, initTWE } = await import("tw-elements");
      initTWE({ Collapse, Carousel });
    };
    init();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 30;

      if (scrollPosition < threshold) {
        setNavbarStyle({ backgroundColor: "transparent" });
      } else {
        setNavbarStyle({ backgroundColor: "#014780" });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getLinkStyle = (section) => {
    return activeSection === section ? "active" : "navbar-options";
  };

  return (
    <nav className="z-10 fixed top-0 flex-no-wrap flex w-screen items-center justify-between bg-[#FBFBFB] py-2 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 md:flex-wrap md:justify-start md:py-2">
      <div className="flex w-full flex-wrap items-center justify-between px-3">
        {/* <!-- Hamburger button for mobile view --> */}
        <button
          className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 md:hidden"
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
        <a
          className="mb-1 ml-2 mr-5 mt-1 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
          onClick={() => {
            onSectionClick("home");
          }}
        >
          <img src="initial.png" className="h-6" />
        </a>
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
                  className="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 md:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400"
                  href="#{section}"
                  data-twe-nav-link-ref
                >
                  {visible_section_name.at(index).toUpperCase()}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* <!-- Right elements --> */}
        <div className="relative flex items-center ml-2">
          {/* <!-- LinkedIn Icon --> */}
          <a
            className="mr-4 mt-2 text-neutral-600 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
            href="https://www.linkedin.com/in/abhi--patel"
          >
            <FontAwesomeIcon icon={faLinkedinIn} className="h-6" />
          </a>

          {/* <!-- Github Icon --> */}
          <a
            className="mr-4 mt-2 text-neutral-600 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
            href="https://github.com/falcon-1024"
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
