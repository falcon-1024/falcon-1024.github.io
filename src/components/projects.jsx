import React, { useState } from "react";
import projectsData from "@/data/projectData";
import Image from "next/image";

// // const dataPath = path.join(process.cwd(), "data", "projectsData.json");
// const projectsData = JSON.parse(
//   fs.readFileSync("src/data/projectData.json", "utf-8")
// );

const allCategories = Array.from(
  new Set(projectsData.flatMap((project) => project.categories))
);

const Project = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? projectsData
      : projectsData.filter((project) =>
          project.categories.includes(activeFilter)
        );

  return (
    <section id="projects" className="section">
      <div className="w-[85%] text-center absolute">
        <h3 className="section-heading"> PROJECTS </h3>
        <hr className="primary left-0 right-0 m-auto" />
        {/* Filter buttons */}
        <div
          id="portfolio-button-container"
          className="flex justify-center pt-4"
        >
          <button
            onClick={() => setActiveFilter("all")}
            className={`btn btn-card ${
              activeFilter === "all" && "project-btn-active"
            }`}
          >
            Show all
          </button>
          {allCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`btn btn-card ${
                activeFilter === category && "project-btn-active"
              }`}
            >
              {category}
            </button>
          ))}
          {/* Add similar buttons for other categories */}
        </div>

        {/* Portfolio grid */}
        <div id="portfolio-items" className="flex flex-wrap">
          {filteredProjects.slice(0, 12).map((project) => (
            <Tro
              key={project.title}
              title={project.title}
              category={project.categories}
              imageSrc={project.image}
              description={project.shortDescription}
            />
          ))}
        </div>
      </div>
      {/* Project Section Content */}
    </section>
  );
};

const Tro = ({ title, category, imageSrc, description }) => (
  <div className="rounded-xl m-3 overflow-hidden relative project-card portfolio-item">
    <a className="education-photo">
      <Image src={imageSrc} className="img-responsive" alt={title} />
      <div className="experience-text-overlay">
        <div className="education-text flex flex-row">
          <div className="flex flex-col justify-evenly space-y-1.5 p-6 text-center">
            <p className="font-semibold leading-none tracking-wide text-2xl">
              {title}
            </p>
            <br />
            <p className="text-base p-2">{description}</p>
          </div>
        </div>
      </div>
    </a>
  </div>
);

export default Project;
