"use client";
import Image from "next/image";
import React, { useState } from "react";
import experienceData from "@/data/experienceData";
import ExperienceModal from "@/components/experienceModal";
import RevealBlock from "@/components/revealBlock";

const primaryExperience = experienceData.filter((experience) => experience.tier === "primary");
const earlyExperience = experienceData.filter((experience) => experience.tier === "early");

const WorkExperience = () => {
  const [openExpModal, setOpenExpModal] = useState({
    id: null,
    show: false,
  });

  return (
    <section id="work-exp">
      <RevealBlock className="flex min-h-screen w-full flex-col items-center justify-center px-5 py-24 md:px-10 md:py-28">
        <div className="mb-5 flex w-full max-w-6xl justify-center">
          <h1 className="section-title section-heading font-light">
            EXPERIENCE
          </h1>
        </div>
        <div className="mb-10 grid w-full max-w-6xl grid-flow-row auto-rows-fr gap-6 lg:grid-cols-2">
          {/* <!-- Cards --> */}
          {primaryExperience.map((exp) => (
            <ExperienceCard
              key={exp.id}
              exp={exp}
              openExpModal={openExpModal}
              setOpenExpModal={setOpenExpModal}
            />
          ))}
        </div>

        <div className="mb-4 w-full max-w-6xl">
          <h2 className="section-muted section-eyebrow">
            Earlier Experience
          </h2>
        </div>

        <div className="mb-20 grid w-full max-w-6xl grid-flow-row auto-rows-fr gap-6 lg:grid-cols-2">
          {earlyExperience.map((exp) => (
            <ExperienceCard
              key={exp.id}
              exp={exp}
              openExpModal={openExpModal}
              setOpenExpModal={setOpenExpModal}
              compact
            />
          ))}
        </div>

        <ExperienceModal
          open={openExpModal}
          onClose={() =>
            setOpenExpModal({
              ...openExpModal,
              id: null,
              show: false,
            })
          }
        />

        {/* <!-- Inner flexbox wrapper for CTA elements --> */}
        {/* <div className="flex min-w-{1200px}:absolute items-center justify-center w-full px-10 pb-10 bottom-12 mt-10 min">
          <div className="bg-gray-200 dark:bg-gray-600 h-[4px] w-[200px]"></div>
        </div>*/}
      </RevealBlock>
    </section>
  );
};

const ExperienceCard = ({ exp, openExpModal, setOpenExpModal, compact = false }) => {
  const isIllustration = exp.companyImage.endsWith(".svg");
  const badge = exp.tier === "early"
    ? "Internship"
    : exp.id === "rencom-networks"
      ? "Current Role"
      : null;

  return (
  <article className="surface-card card-hover relative flex h-full flex-col overflow-hidden rounded-2xl">
    <div className="media-frame relative aspect-[16/10] overflow-hidden">
      <Image
        className={isIllustration
          ? "image-drift object-contain"
          : `image-drift object-cover ${compact ? "scale-[1.02]" : ""}`}
        src={`/${exp.companyImage}`}
        alt={exp.companyName}
        fill
        sizes="(min-width: 1024px) 42vw, 90vw"
      />
    </div>

    <div className="flex flex-1 flex-col items-start p-6 text-left">
      {badge && (
        <p className="section-muted section-eyebrow mb-3">
          {badge}
        </p>
      )}
      <h5 className="section-title card-heading mb-2 font-bold tracking-wide">
        {exp.position}
      </h5>
      {exp.companyUrl ? (
        <a
          href={exp.companyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="section-copy font-normal text-sm md:text-lg min-[2300px]:text-3xl mb-2 italic"
        >
          {exp.companyName}
        </a>
      ) : (
        <p className="section-copy font-normal text-sm md:text-lg min-[2300px]:text-3xl mb-2 italic">
          {exp.companyName}
        </p>
      )}
      <p className="section-muted text-sm md:text-lg min-[2300px]:text-3xl mb-4">
        {exp.duration}
      </p>
      <p className="section-copy text-sm md:text-base min-[2300px]:text-3xl leading-relaxed mb-6">
        {exp.summary}
      </p>

      <button
        type="button"
        onClick={() => {
          setOpenExpModal({
            ...openExpModal,
            id: exp.id,
            show: true,
          });
        }}
        className="button-primary mt-auto"
      >
        Read More
      </button>
    </div>
  </article>
  );
};

export default WorkExperience;
