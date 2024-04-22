"use client";
import Image from "next/image";

const Education = () => {
  return (
    <section id="education" className="dark">
      <div className="flex flex-col items-center min-h-screen h-full justify-center dark:bg-neutral-800">
        {/* <!-- Inner flexbox wrapper for headings --> */}
        <div className="flex flex-shrink-0 relative top-16 justify-center w-4/5 text-gray-600">
          <h1 className="text-3xl md:text-6xl min-[2300px]:text-9xl font-light mb-5">
            EDUCATION
          </h1>
        </div>
        <div className="grid flex-shrink-0 grid-flow-row lg:grid-flow-col relative top-16 gap-x-2 w-4/5 mb-20">
          <div className="block rounded-2xl bg-white shadow-2xl dark:bg-neutral-700 text-center m-4">
            {/* <!-- Card image --> */}
            <div className="overflow-hidden rounded-xl m-3">
              <img
                className="object-cover scale-[2] lg:scale-100 translate-x-[20%] lg:translate-x-0"
                src="university-of-windsor.jpg"
                alt=""
              />
            </div>

            {/* <!-- Card body --> */}
            <div className="p-6">
              <p className="font-bold tracking-wide text-base md:text-2xl min-[2300px]:text-5xl text-neutral-800 dark:text-neutral-50 mb-2">
                Masters of Applied Computing Specialization in AI
              </p>
              <a
                href="https://www.uwindsor.ca/"
                className="font-normal text-sm md:text-lg min-[2300px]:text-3xl mb-2 text-neutral-500 dark:text-neutral-50 italic text-end"
              >
                {" "}
                - University of Windsor
              </a>

              {/* <!-- Text --> */}
              <p className="m-2 font-medium text-base text-neutral-500 dark:text-neutral-300">
                took courses on adv. Software Engineering, DSA and Machine
                Learning/Pattern Recognition.
              </p>

              <p className="text-sm md:text-lg min-[2300px]:text-3xl text-neutral-500 dark:text-neutral-50">
                - Sep 2022 - Dec 2023
              </p>
            </div>
          </div>
          <div className="block rounded-2xl bg-white shadow-2xl dark:bg-neutral-700 text-center m-4">
            {/* <!-- Card image --> */}
            <div className="overflow-hidden rounded-xl m-3">
              <img
                className="object-cover scale-[2.5] lg:scale-100 translate-x-[45%] lg:translate-x-0"
                src="ahmedabad-university-1.jpg"
                alt=""
              />
            </div>

            {/* <!-- Card body --> */}
            <div className="p-6">
              <p className="font-bold tracking-wide text-base md:text-2xl min-[2300px]:text-5xl text-neutral-800 dark:text-neutral-50 mb-2">
                BTech. in Information and Communication Technology
              </p>
              <a
                href="https://www.uwindsor.ca/"
                className="font-normal text-sm md:text-lg min-[2300px]:text-3xl mb-2 text-neutral-500 dark:text-neutral-50 italic text-end"
              >
                {" "}
                - Ahmedabad University
              </a>

              {/* <!-- Text --> */}
              <p className="m-2 font-medium text-base text-neutral-500 dark:text-neutral-300">
                introduced to different concepts of machine Learning,
                probability/ statistics, computer science; and programming
                languages.
              </p>

              <p className="text-sm md:text-lg min-[2300px]:text-3xl text-neutral-500 dark:text-neutral-50">
                - Aug 2016 - May 2020
              </p>
            </div>
          </div>
        </div>

        {/* <!-- Inner flexbox wrapper for CTA elements --> */}
        {/* <div className="flex relative min-w-{1200px}:absolute items-center justify-center w-full px-10 pb-10 mt-10 min">
          <div className="absolute bottom-0 bg-gray-200 dark:bg-gray-600 h-[4px] w-[200px]"></div>
        </div> */}
      </div>
    </section>
  );
};

export default Education;
