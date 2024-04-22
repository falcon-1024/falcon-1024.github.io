"use client";
import React, { useState, useEffect } from "react";
import projectsData from "@/data/projectData";

// // const dataPath = path.join(process.cwd(), "data", "projectsData.json");
// const projectsData = JSON.parse(
//   fs.readFileSync("src/data/projectData.json", "utf-8")
// );

// const maxCategories = Math.round(
//   (Dimensions.get("window").width.innerWidth - 250) / 100
// );
const allCategories = Array.from(
  new Set(projectsData.flatMap((project) => project.categories))
);

const Project = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  // const useScreenSize = () => {
  //   const [width, setWidth] = useState({
  //     width: window.innerWidth,
  //   });

  //   useEffect(() => {
  //     const handleResize = () => {
  //       setWidth({
  //         width: window.innerWidth,
  //       });
  //     };

  //     window.addEventListener("resize", handleResize);

  //     // Clean up the event listener when the component unmounts
  //     return () => {
  //       window.removeEventListener("resize", handleResize);
  //     };
  //   }, []);

  //   return width;
  // };

  // const w = useScreenSize().width;

  const filteredProjects =
    activeFilter === "all"
      ? projectsData
      : projectsData.filter((project) =>
          project.categories.includes(activeFilter)
        );

  return (
    <section id="projects" className="dark">
      <div className="flex flex-col items-center min-h-screen h-full dark:bg-neutral-800">
        {/* <!-- Inner flexbox wrapper for headings --> */}
        <div className="flex flex-shrink-0 relative top-16 justify-center w-4/5 text-gray-600 mb-5">
          <h1 className="text-3xl md:text-6xl min-[2300px]:text-9xl font-light">
            PROJECTS
          </h1>
        </div>
        <div
          id="portfolio-button-container"
          className="relative flex justify-center w-5/6 top-16"
        >
          <button
            onClick={() => setActiveFilter("all")}
            className={`btn btn-card ${
              activeFilter === "all" && "project-btn-active"
            }`}
          >
            Show all
          </button>
          {allCategories.slice(0, 2).map((category) => (
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
        </div>

        <div className="grid flex-shrink-0 grid-flow-row lg:grid-cols-3 2xl:grid-cols-4 relative top-16 w-5/6 mb-20">
          {filteredProjects.slice(0, 12).map((project) => (
            <Tro
              key={project.title}
              title={project.title}
              category={project.categories}
              imageSrc={project.image}
              description={project.shortDescription}
              fullDescription={project.detailedDescription}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// card
const Tro = ({ title, category, imageSrc, description, fullDescription }) => (
  <div className="relative block rounded-2xl bg-white shadow-2xl dark:bg-neutral-700 text-center m-4">
    {/* <!-- Card image --> */}
    <div className="overflow-hidden rounded-t-xl">
      <img className="object-contain block h-full" src={imageSrc} alt="" />
    </div>

    {/* <!-- Card body --> */}
    <div className="p-6">
      {/* <!-- Title --> */}
      <h5 className="mb-2 text-xl font-bold tracking-wide text-neutral-800 dark:text-neutral-50">
        {title}
      </h5>
      <p className="text-base md:text-xl min-[2300px]:text-4xl text-neutral-500 dark:text-neutral-50">
        {description}
      </p>

      {/* <!-- Button --> */}
      <a
        href="#"
        className="bottom-0 mt-3 inline-block rounded bg-neutral-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-neutral-800 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
      >
        Read More
      </a>
    </div>
  </div>

  // <div className="rounded-xl m-3 overflow-hidden relative project-card portfolio-item">
  //   <div className="education-photo">
  //     <img src={imageSrc} className="img-responsive" alt={title} />
  //     <div className="project-text-overlay space-y-1.5 p-6">
  //       <p className="font-semibold leading-none tracking-wide text-2xl">
  //         {title}
  //       </p>
  //       <br />
  //       <p className="text-base p-2">{description}</p>
  //     </div>
  //   </div>
  // </div>
);

export default Project;
