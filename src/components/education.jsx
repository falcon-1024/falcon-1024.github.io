"use client";
import Image from "next/image";

const Education = () => {
  return (
    <section id="education" className="section">
      <div className="max-w-[85%] text-center">
        <h3 className="section-heading"> EDUCATION </h3>
        <hr className="primary left-0 right-0 m-auto" />
        <div className="education-card rounded-xl mt-20 overflow-hidden relative">
          <div href="https://www.uwindsor.ca/" className="education-photo">
            <img
              src="university-of-windsor.jpg"
              className="img-responsive"
              alt=""
            />
            <div className="education-text-overlay">
              <div className="education-text">
                <div className="flex flex-col justify-evenly space-y-1.5 p-6 text-start">
                  <p className="font-semibold leading-none tracking-wide text-2xl">
                    Masters of Applied Computing Specialization in AI
                  </p>
                  <a
                    href="https://www.uwindsor.ca/"
                    className="text-lg p-2 text-white italic"
                  >
                    {" "}
                    - University of Windsor
                  </a>
                  <br />
                </div>
                <div className="p-6 pt-0 h-28">
                  <p className="text-lg w-[450px]">
                    took courses on adv. Software Engineering, DSA and Machine
                    Learning/Pattern Recognition.
                  </p>
                </div>
                <div className="items-center p-6 pt-0 flex justify-between">
                  <p className="text-lg text-start">• Sep 2022 - Dec 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="education-card rounded-xl mt-20 overflow-hidden relative">
          <div className="education-photo">
            <img
              src="ahmedabad-university-1.jpg"
              className="img-responsive"
              alt=""
            />
            <div className="education-text-overlay">
              <div className="education-text">
                <div className="flex flex-col justify-evenly space-y-1.5 p-6 text-start">
                  <p className="font-semibold leading-none tracking-wide text-2xl">
                    BTech. in Information and Communication Technology
                  </p>
                  <a
                    href="https://ahduni.edu.in/"
                    className="text-lg p-2 text-white italic"
                  >
                    {" "}
                    - Ahmedabad University
                  </a>
                  <br />
                </div>
                <div className="p-6 pt-0 h-28">
                  <p className="text-lg w-[600px]">
                    introduced to different concepts of machine Learning,
                    probability/ statistics, computer science; and programming
                    languages.
                  </p>
                </div>
                <div className="items-center p-6 pt-0 flex justify-between">
                  <p className="text-lg text-start">• Aug 2016 - May 2020</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
