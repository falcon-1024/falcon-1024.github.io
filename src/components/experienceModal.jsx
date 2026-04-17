import React from "react";
import Image from "next/image";
import experienceData from "@/data/experienceData";

const ExperienceModal = ({ open, onClose }) => {
  const showExp = open.id
    ? experienceData.find((experience) => experience.id === open.id) ?? null
    : null;

  if (!open.show || !showExp) return null;

  //   const currentCategories = Array.from(new Set(currentPrj.categories));
  return (
    <div onClick={onClose} className="fixed inset-0 z-30 bg-slate-950/60 backdrop-blur-sm">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="experience-modal-title"
        className="surface-strong fixed top-16 left-1/2 -translate-x-1/2 rounded-2xl w-full h-[90%] max-w-[88%] lg:max-w-[70%] overflow-y-auto"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-5 text-xl section-muted items-center justify-center"
          aria-label="Close experience details"
        >
          x
        </button>
        <div className="p-2 mb-2 lg:mb-3">
          {/* <!-- Title --> */}
          <h5
            id="experience-modal-title"
            className="section-title m-2 text-lg lg:text-2xl min-[2300px]:text-3xl font-bold tracking-wide"
          >
            {showExp.position}
          </h5>
          <p className="section-copy m-2 text-sm md:text-lg min-[2300px]:text-xl italic">
            {showExp.companyName}
          </p>
          <p className="section-muted m-2 text-sm md:text-lg min-[2300px]:text-xl">
            {showExp.duration}
          </p>
        </div>
        {/* <div className="relative flex justify-center mb-2 lg:mb-3">
          {showProj[0]?.categories.map((category, idx) => (
            <div
              key={idx}
              className="border-2 text-sm rounded-lg px-3 py-1 mx-2 text-white"
            >
              {category}
            </div>
          ))}
        </div> */}

        <div className="flex flex-shrink-0 overflow-hidden justify-center px-4">
          <Image
            className="block w-full max-w-[92%] rounded-xl object-contain lg:max-w-[76%]"
            src={`/${showExp.companyImage}`}
            alt={showExp.companyName}
            width={1600}
            height={900}
          />
        </div>
        <div className="grid grid-flow-row p-6 justify-center">
          <p className="section-title font-bold text-md md:text-xl min-[2300px]:text-2xl m-1 px-[10%]">
            Highlights
          </p>
          {showExp.responsibilities.map((res, idx) => (
            <p
              key={idx}
              className="section-copy text-sm md:text-lg min-[2300px]:text-2xl text-justify px-[10%] m-1 leading-relaxed"
            >
              • {res}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceModal;
