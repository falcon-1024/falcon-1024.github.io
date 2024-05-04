import React, { useEffect, useState } from "react";
import experienceData from "@/data/experienceData";

const ExperienceModal = ({ open, onClose }) => {
  const [showExp, setShowExp] = useState([]);

  useEffect(() => {
    findCurrentExp();
  }, [open]);

  const findCurrentExp = () => {
    let currentExp = experienceData.at(open.id);
    setShowExp(currentExp);
  };

  if (!open.show) return null;

  //   const currentCategories = Array.from(new Set(currentPrj.categories));
  return (
    <div onClick={onClose} className="fixed w-full h-full bg-neutral-800">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="fixed top-16 left-1/2 -translate-x-1/2 rounded-2xl shadow-2xl bg-white dark:bg-neutral-700 w-full h-[90%] max-w-[80%] lg:max-w-[70%] overflow-y-auto"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-5 text-xl text-neutral-300 items-center justify-center"
        >
          x
        </button>
        <div className="p-2 mb-2 lg:mb-3">
          {/* <!-- Title --> */}
          <h5 className="m-2 text-lg lg:text-2xl min-[2300px]:text-4xl font-bold tracking-wide text-neutral-800 dark:text-neutral-50">
            {showExp?.position}
          </h5>
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

        <div className="flex flex-shrink-0 overflow-hidden justify-center">
          <img
            className="object-cover block w-full max-w-[80%] lg:max-w-[70%] rounded-xl bg-white"
            src={showExp?.companyImage}
            alt=""
          />
        </div>
        <div className="grid grid-flow-row p-6 justify-center">
          <p className="font-bold text-md md:text-xl min-[2300px]:text-5xl text-neutral-500 dark:text-neutral-100 m-1">
            Achievements:{" "}
          </p>
          {showExp?.responsibilities.map((res, idx) => (
            <p
              key={idx}
              className="text-sm md:text-lg min-[2300px]:text-4xl text-neutral-500 text-justify px-[10%] dark:text-neutral-50  m-1"
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
