import React, { useEffect, useRef, useState } from "react";

const visible_section_name = [
  "about",
  "experience",
  "projects",
  "skills",
  "contact",
];

const Navbar = ({ sections, onSectionClick }) => {
  const [activeSection, setActiveSection] = useState(sections[0]);
  const [navbarStyle, setNavbarStyle] = useState({
    backgroundColor: "transparent",
  });
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
      threshold: 0.5, // Adjust as needed
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
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 30; // Adjust as needed

      if (scrollPosition < threshold) {
        setNavbarStyle({ backgroundColor: "transparent" });
      } else {
        setNavbarStyle(); // Change color as needed
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
    <nav className="nav" style={navbarStyle} ref={navRef}>
      <div className="name" onClick={() => onSectionClick("home")}>
        Abhi Patel
      </div>
      <ul>
        {sections.slice(1).map((section, index) => (
          <li
            key={section}
            className={getLinkStyle(section)}
            onClick={() => onSectionClick(section)}
          >
            {visible_section_name.at(index)}
          </li>
        ))}
        {/* <li
            className={getLinkStyle("work-exp")}
            onClick={() => onSectionClick("work-exp")}
          >
            Work Experience
          </li>
          <li
            className={getLinkStyle("projects")}
            onClick={() => onSectionClick("projects")}
          >
            Projects
          </li>
          <li
            className={getLinkStyle("skills")}
            onClick={() => onSectionClick("skills")}
          >
            Skills
          </li>
          <li
            className={getLinkStyle("contact-me")}
            onClick={() => onSectionClick("contact-me")}
          >
            Contact Me
          </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
