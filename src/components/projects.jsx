"use client";
import Image from "next/image";
import React, { useState } from "react";
import projectsData from "@/data/projectData";
import ProjectModal from "@/components/projectModal";
import RevealBlock from "@/components/revealBlock";

// // const dataPath = path.join(process.cwd(), "data", "projectsData.json");
// const projectsData = JSON.parse(
//   fs.readFileSync("src/data/projectData.json", "utf-8")
// );

const featuredProjects = projectsData.filter((project) => project.featured);
const additionalProjects = projectsData.filter((project) => !project.featured);

const Project = () => {
  const [openProjectModal, setOpenProjectModal] = useState({
    id: null,
    show: false,
  });
  const [showAdditionalProjects, setShowAdditionalProjects] = useState(false);

  return (
    <section id="projects">
      <RevealBlock className="flex min-h-screen w-full flex-col items-center px-5 py-24 md:px-10 md:py-28">
        <div className="mb-5 flex w-full max-w-6xl justify-center">
          <h1 className="section-title text-3xl md:text-6xl min-[2300px]:text-9xl font-light">
            PROJECTS
          </h1>
        </div>

        <div className="mb-8 w-full max-w-6xl">
          <h2 className="section-muted text-sm md:text-base min-[2300px]:text-3xl font-medium uppercase tracking-[0.28em] mb-3">
            Featured Projects
          </h2>
        </div>

        <div className="mb-10 grid w-full max-w-6xl grid-flow-row gap-6 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <Tro
              key={project.id}
              prj={project}
              openPrjModal={openProjectModal}
              setOpenPrjModal={setOpenProjectModal}
            />
          ))}
        </div>

        <div className="z-10 mb-6 w-full max-w-6xl text-center">
          <button
            type="button"
            onClick={() => setShowAdditionalProjects(!showAdditionalProjects)}
            aria-expanded={showAdditionalProjects}
            aria-controls="additional-projects"
            className="button-secondary relative z-10"
          >
            {showAdditionalProjects
              ? "Hide Additional Projects"
              : "Show Additional Projects"}
          </button>
        </div>

        {showAdditionalProjects && (
          <>
            <div
              id="additional-projects"
              className="mb-8 w-full max-w-6xl"
            >
              <h2 className="section-muted text-sm md:text-base min-[2300px]:text-3xl font-medium uppercase tracking-[0.28em] mb-3">
                Additional Projects
              </h2>
            </div>
            <div className="mb-20 grid w-full max-w-6xl grid-flow-row gap-6 lg:grid-cols-2 xl:grid-cols-3">
              {additionalProjects.map((project) => (
                <Tro
                  key={project.id}
                  prj={project}
                  openPrjModal={openProjectModal}
                  setOpenPrjModal={setOpenProjectModal}
                  compact
                />
              ))}
            </div>
          </>
        )}

        <ProjectModal
          open={openProjectModal}
          onClose={() =>
            setOpenProjectModal({
              ...openProjectModal,
              id: null,
              show: false,
            })
          }
        />
      </RevealBlock>
    </section>
  );
};

// card
const Tro = ({ prj, openPrjModal, setOpenPrjModal, compact = false }) => (
  <article className="surface-card card-hover relative flex h-full flex-col overflow-hidden rounded-2xl text-left">
    {/* <!-- Card image --> */}
    <div className="media-frame relative aspect-[16/10] overflow-hidden">
      <Image
        className="image-drift object-contain"
        src={`/${prj.image}`}
        alt={prj.title}
        fill
        sizes="(min-width: 1280px) 30vw, (min-width: 1024px) 40vw, 90vw"
      />
    </div>

    {/* <!-- Card body --> */}
    <div className="flex flex-1 flex-col items-start p-6">
      <div className="flex flex-wrap gap-2 mb-4">
        {prj.categories.map((category) => (
          <span
            key={category}
            className="pill-chip rounded-full px-3 py-1 text-xs md:text-sm uppercase tracking-wide"
          >
            {category}
          </span>
        ))}
      </div>
      {/* <!-- Title --> */}
      <h5 className="section-title mb-2 text-xl font-bold tracking-wide">
        {prj.title}
      </h5>
      <p className="section-copy text-base leading-relaxed md:text-xl min-[2300px]:text-2xl">
        {prj.shortDescription}
      </p>

      {!compact && prj.systemProfile?.length > 0 && (
        <div className="mt-5 grid w-full gap-4">
          {prj.systemProfile.map((detail) => (
            <div key={detail.label} className="metric-kv">
              <p className="metric-label">{detail.label}</p>
              <p className="metric-value">{detail.value}</p>
            </div>
          ))}
        </div>
      )}

      <p className="section-muted mt-4 text-sm md:text-lg min-[2300px]:text-xl">
        {prj.duration}
      </p>

      <div className="flex flex-wrap gap-3 mt-auto pt-5">
        <button
          type="button"
          onClick={() => {
            setOpenPrjModal({
              ...openPrjModal,
              id: prj.id,
              show: true,
            });
          }}
          className="button-primary"
        >
          Project Details
        </button>
        {prj.repoUrl && (
          <a
            href={prj.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="button-secondary"
          >
            Source Code
          </a>
        )}
      </div>
    </div>
  </article>
);

export default Project;
