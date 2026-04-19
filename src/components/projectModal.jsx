import Image from "next/image";
import React from "react";
import projectsData from "@/data/projectData";

const ProjectModal = ({ open, onClose }) => {
  const showProj = open.id
    ? projectsData.find((project) => project.id === open.id) ?? null
    : null;

  if (!open.show || !showProj) return null;

  //   const currentCategories = Array.from(new Set(currentPrj.categories));
  return (
    <div onClick={onClose} className="fixed inset-0 z-30 bg-slate-950/60 backdrop-blur-sm">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="surface-strong fixed top-16 left-1/2 -translate-x-1/2 rounded-2xl w-full h-[90%] max-w-[88%] lg:max-w-[70%] overflow-y-auto"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-5 text-xl section-muted items-center justify-center"
          aria-label="Close project details"
        >
          x
        </button>
        <div className="p-2">
          {/* <!-- Title --> */}
          <h5
            id="project-modal-title"
            className="section-title card-heading m-2 font-bold tracking-wide"
          >
            {showProj.title}
          </h5>
          <p className="section-muted m-2 text-sm md:text-lg min-[2300px]:text-xl">
            {showProj.duration}
          </p>
        </div>
        <div className="relative flex justify-center mb-2 lg:mb-3">
          {showProj.categories.map((category, idx) => (
            <div
              key={idx}
              className="pill-chip text-sm rounded-lg px-3 py-1 mx-2"
            >
              {category}
            </div>
          ))}
        </div>

        <div className="flex flex-shrink-0 overflow-hidden justify-center px-4">
          <Image
            className="block w-full max-w-[92%] rounded-xl object-contain lg:max-w-[76%]"
            src={`/${showProj.image}`}
            alt={showProj.title}
            width={1600}
            height={900}
          />
        </div>
        <div className="flex p-6 justify-center">
          <div className="w-5/6 lg:w-3/4">
            <p className="section-copy text-sm md:text-lg min-[2300px]:text-2xl mb-6 leading-relaxed">
              {showProj?.detailedDescription}
            </p>

            {showProj?.systemProfile?.length > 0 && (
              <div className="mb-6">
                <h6 className="section-title detail-heading mb-3 font-semibold uppercase">
                  System Profile
                </h6>
                <div className="grid gap-4">
                  {showProj.systemProfile.map((detail) => (
                    <div key={detail.label} className="metric-kv">
                      <p className="metric-label">{detail.label}</p>
                      <p className="metric-value">{detail.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {showProj?.stack?.length > 0 && (
              <div className="mb-6">
                <h6 className="section-title detail-heading mb-3 font-semibold uppercase">
                  Stack
                </h6>
                <div className="flex flex-wrap gap-2">
                  {showProj.stack.map((item) => (
                    <span
                      key={item}
                      className="pill-chip rounded-full px-4 py-2 text-xs md:text-base min-[2300px]:text-xl"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {showProj?.highlights?.length > 0 && (
              <div className="mb-6">
                <h6 className="section-title detail-heading mb-3 font-semibold uppercase">
                  Highlights
                </h6>
                <div className="grid grid-flow-row gap-3">
                  {showProj.highlights.map((highlight) => (
                    <p
                      key={highlight}
                      className="section-copy text-sm md:text-lg min-[2300px]:text-2xl text-justify leading-relaxed"
                    >
                      • {highlight}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {showProj?.repoUrl && (
              <div>
                <a
                  href={showProj.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-secondary"
                >
                  Open Source Repository
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
