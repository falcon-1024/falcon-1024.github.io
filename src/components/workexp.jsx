"use client";
import React, { useState } from "react";
import experienceData from "@/data/experienceData";
import ExperienceModal from "@/components/experienceModal";

const WorkExperience = () => {
  const [openExpModal, setOpenExpModal] = useState({
    id: null,
    show: false,
  });

  return (
    <section id="work-exp" className="dark">
      <div className="flex flex-col items-center min-h-screen justify-center h-full dark:bg-neutral-800">
        {/* <!-- Inner flexbox wrapper for headings --> */}
        <div className="flex flex-shrink-0 relative top-16 justify-center w-4/5 text-gray-600 mb-5">
          <h1 className="text-3xl md:text-6xl min-[2300px]:text-9xl font-light">
            EXPERIENCE
          </h1>
        </div>
        <div className="grid flex-shrink-0 grid-flow-row lg:grid-flow-col lg:grid-cols-3 relative top-16 w-5/6 mb-20">
          {/* <!-- Cards --> */}
          {experienceData.map((exp, idx) => (
            <div
              key={idx}
              className="relative block rounded-2xl bg-white shadow-2xl dark:bg-neutral-700 text-center m-4"
            >
              {/* <!-- Card image --> */}
              <div className="overflow-hidden rounded-t-xl">
                <img
                  className="object-cover w-full"
                  src={exp.companyImage}
                  alt=""
                />
              </div>

              {/* <!-- Card body --> */}
              <div className="p-6">
                {/* <!-- Title --> */}
                <h5 className="mb-2 text-lg md:text-2xl min-[2300px]:text-5xl font-bold tracking-wide text-neutral-800 dark:text-neutral-50">
                  {exp.position}
                </h5>
                <a
                  href={exp.companyUrl}
                  className="font-normal text-sm md:text-lg min-[2300px]:text-3xl mb-2 text-neutral-500 dark:text-neutral-50 italic text-end"
                >
                  {" "}
                  - {exp.companyName}
                </a>
                <p className="text-sm md:text-lg min-[2300px]:text-3xl text-neutral-500 dark:text-neutral-50">
                  - {exp.duration}
                </p>

                <button
                  onClick={() => {
                    setOpenExpModal({
                      ...openExpModal,
                      id: idx,
                      show: true,
                    });
                  }}
                  className="bottom-0 mt-3 inline-block rounded bg-neutral-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-neutral-800 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-neutral-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  Read More
                </button>
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
              </div>
            </div>
          ))}
        </div>

        {/* <!-- Inner flexbox wrapper for CTA elements --> */}
        {/* <div className="flex min-w-{1200px}:absolute items-center justify-center w-full px-10 pb-10 bottom-12 mt-10 min">
          <div className="bg-gray-200 dark:bg-gray-600 h-[4px] w-[200px]"></div>
        </div>*/}
      </div>
    </section>
  );
};

export default WorkExperience;
