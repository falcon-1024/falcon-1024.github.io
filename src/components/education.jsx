"use client";

import Image from "next/image";
import RevealBlock from "@/components/revealBlock";

const Education = () => {
  return (
    <section id="education">
      <RevealBlock className="flex min-h-screen w-full flex-col items-center justify-center px-5 py-24 md:px-10 md:py-28">
        <div className="mb-6 flex w-full max-w-6xl justify-center">
          <h1 className="section-title section-heading mb-5 font-light">
            EDUCATION
          </h1>
        </div>
        <div className="grid w-full max-w-6xl gap-6 md:grid-cols-2">
          <div className="surface-card h-full rounded-2xl text-center overflow-hidden">
            <div className="media-frame relative aspect-[16/10] overflow-hidden">
              <Image
                className="h-full w-full object-cover"
                src="/university-of-windsor.jpg"
                alt="University of Windsor"
                fill
                sizes="(min-width: 768px) 45vw, 92vw"
              />
            </div>

            {/* <!-- Card body --> */}
            <div className="p-6">
              <p className="section-title card-heading mb-2 font-bold tracking-wide">
                Master of Applied Computing
              </p>
              <a
                href="https://www.uwindsor.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="section-copy font-normal text-sm md:text-lg min-[2300px]:text-3xl mb-2 italic text-end"
              >
                {" "}
                - University of Windsor
              </a>

              {/* <!-- Text --> */}
              <p className="section-copy m-2 font-medium text-base leading-relaxed">
                Graduate coursework in software engineering, data structures,
                algorithms, and machine learning.
              </p>

              <p className="section-muted text-sm md:text-lg min-[2300px]:text-3xl">
                - 2022 - 2024
              </p>
            </div>
          </div>
          <div className="surface-card h-full rounded-2xl text-center overflow-hidden">
            <div className="media-frame relative aspect-[16/10] overflow-hidden">
              <Image
                className="h-full w-full object-cover"
                src="/ahmedabad-university-1.jpg"
                alt="Ahmedabad University"
                fill
                sizes="(min-width: 768px) 45vw, 92vw"
              />
            </div>

            {/* <!-- Card body --> */}
            <div className="p-6">
              <p className="section-title card-heading mb-2 font-bold tracking-wide">
                Bachelor in Information and Communication Technology
              </p>
              <a
                href="https://ahduni.edu.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="section-copy font-normal text-sm md:text-lg min-[2300px]:text-3xl mb-2 italic text-end"
              >
                {" "}
                - Ahmedabad University
              </a>

              {/* <!-- Text --> */}
              <p className="section-copy m-2 font-medium text-base leading-relaxed">
                Built a foundation in probability, statistics, software
                engineering, databases, and applied programming.
              </p>

              <p className="section-muted text-sm md:text-lg min-[2300px]:text-3xl">
                - 2016 - 2020
              </p>
            </div>
          </div>
        </div>

        {/* <!-- Inner flexbox wrapper for CTA elements --> */}
        {/* <div className="flex relative min-w-{1200px}:absolute items-center justify-center w-full px-10 pb-10 mt-10 min">
          <div className="absolute bottom-0 bg-gray-200 dark:bg-gray-600 h-[4px] w-[200px]"></div>
        </div> */}
      </RevealBlock>
    </section>
  );
};

export default Education;
