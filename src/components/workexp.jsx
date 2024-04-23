"use client";
const WorkExperience = () => {
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
          {/* <!-- Card --> */}
          <div className="relative block rounded-2xl bg-white shadow-2xl dark:bg-neutral-700 text-center m-4">
            {/* <!-- Card image --> */}
            <div className="overflow-hidden rounded-t-xl">
              <img
                className="object-cover w-full"
                src="accenture-AI.jpg"
                alt=""
              />
            </div>

            {/* <!-- Card body --> */}
            <div className="p-6">
              {/* <!-- Title --> */}
              <h5 className="mb-2 text-xl font-bold tracking-wide text-neutral-800 dark:text-neutral-50">
                Data Engineering Analyst
              </h5>
              <a
                href="https://www.accenture.com/in-en/about/company/india"
                className="font-normal text-sm md:text-lg min-[2300px]:text-3xl mb-2 text-neutral-500 dark:text-neutral-50 italic text-end"
              >
                {" "}
                - Accenture Solutions Pvt. Ltd.
              </a>
              <p className="text-sm md:text-lg min-[2300px]:text-3xl text-neutral-500 dark:text-neutral-50">
                - May 2020 - Jul 2022
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
          <div className="relative block rounded-2xl bg-white shadow-2xl dark:bg-neutral-700 text-center m-4">
            {/* <!-- Card image --> */}
            <div className="overflow-hidden rounded-t-xl">
              <img
                className="object-cover w-full"
                src="byte-prophecy1.jpg"
                alt=""
              />
            </div>

            {/* <!-- Card body --> */}
            <div className="p-6">
              {/* <!-- Title --> */}
              <h5 className="mb-2 text-xl font-bold tracking-wide text-neutral-800 dark:text-neutral-50">
                Data Engineering Intern
              </h5>
              <a
                href="https://newsroom.accenture.com/news/2020/accenture-acquires-byte-prophecy-to-enhance-ai-and-digital-analytics-capabilities-in-emerging-markets"
                className="font-normal text-sm md:text-lg min-[2300px]:text-3xl mb-2 text-neutral-500 dark:text-neutral-50 italic text-end"
              >
                {" "}
                - Byte Prophecy Pvt. Ltd.
              </a>
              <p className="text-sm md:text-lg min-[2300px]:text-3xl text-neutral-500 dark:text-neutral-50">
                - Dec 2019 - May 2020
              </p>
              {/* <!-- Button --> */}
              <a
                href="#"
                className="mt-3 inline-block rounded bg-neutral-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-neutral-800 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              >
                Read More
              </a>
            </div>
          </div>
          <div className="relative block rounded-2xl bg-white shadow-2xl dark:bg-neutral-700 text-center m-4">
            {/* <!-- Card image --> */}
            <div className="overflow-hidden rounded-t-xl">
              <img
                className="object-cover w-full"
                src="csir-iitr1.jpg"
                alt=""
              />
            </div>

            {/* <!-- Card body --> */}
            <div className="p-6">
              {/* <!-- Title --> */}
              <h5 className="mb-2 text-xl font-bold tracking-wide text-neutral-800 dark:text-neutral-50">
                Machine Learning Research Intern
              </h5>
              <a
                href="https://www.accenture.com/in-en/about/company/india"
                className="font-normal text-sm md:text-lg min-[2300px]:text-3xl mb-2 text-neutral-500 dark:text-neutral-50 italic text-end"
              >
                {" "}
                - CSIR - Indian Institute of Toxicology Research
              </a>
              <p className="text-sm md:text-lg min-[2300px]:text-3xl text-neutral-500 dark:text-neutral-50">
                - Jun 2019 - Jul 2019
              </p>
              {/* TODO : add modal to show the duties */}
              {/* <a
                href="#"
                className="bottom-0 mt-3 inline-block rounded bg-neutral-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-neutral-800 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              >
                Read More
              </a> */}
            </div>
          </div>
        </div>
        {/* <div className="flex flex-col relative top-0 flex-shrink-0 w-4/5 text-gray-600">
          <div className="education-card w-full h-72 rounded-xl mt-20 overflow-hidden relative">
            <div className="education-photo">
              <img
                src="accenture-AI.jpg"
                className="img-responsive object-[20%]"
                alt=""
              />
              <div className="education-text-overlay opacity-80 xl:hover:opacity-80 xl:opacity-0">
                <div className="education-text h-full flex flex-row">
                  <div className="flex flex-col justify-evenly space-y-1.5 p-6 text-start w-[40%]">
                    <p className="font-semibold leading-none tracking-wide text-2xl">
                      Data Engineering Analyst
                    </p>
                    <a
                      href=""
                      className="text-base p-2 text-white italic"
                    >
                      - Accenture Solutions Pvt. Ltd.
                    </a>
                    <p className="text-base text-left">• May 2020 - Jul 2022</p>
                  </div>
                  <div className="p-6 pt-0 justify-evenly">
                    <p className="text-base">
                      • Spearheaded the management of the DE side of the
                      project, collaborating closely with cross-functional teams
                      to design and develop ETLs using python, scala-spark and
                      azure data factory for Product Visibility, SLOB tracker,
                      and MBA dashboards; achieving an impressive 29% boost in
                      sales revenue.
                    </p>
                    <p className="text-base">
                      • Performed data collection and augmentation, annotation,
                      training, validation, and testing for a face mask
                      detection model with resnet152 as the base network helping
                      client to deploy and monitor covid-19 guidelines.
                    </p>
                    <p className="text-base">
                      • Implemented generative AI techniques, leveraging ML
                      models, to synthesize high-quality data for training,
                      resulting in a 40% reduction in data labeling time and
                      improved model accuracy by 15%.
                    </p>
                    <p className="text-base">
                      • Created database connectors for relational and
                      non-relational databases, and worked on transform
                      components for inhouse json-based ETL processing service
                      created using python/pyspark.
                    </p>
                  </div>
                  {/* <div className="flex flex-col justify-evenly space-y-1.5 p-6 text-start w-full">
                    <p className="font-semibold leading-none tracking-wide text-base md:text-2xl min-[2300px]:text-5xl">
                      Masters of Applied Computing Specialization in AI
                    </p>
                    <a
                      href="https://www.uwindsor.ca/"
                      className="text-sm md:text-lg min-[2300px]:text-3xl p-2 text-white italic"
                    >
                      {" "}
                      - University of Windsor
                    </a>
                    <br />
                  </div>
                  <div className="p-6 pt-0">
                    <p className="text-sm md:text-lg min-[2300px]:text-3xl">
                      • took courses on adv. Software Engineering, DSA and
                      Machine Learning/Pattern Recognition.
                    </p>
                  </div>
                  <div className="items-center p-6 pt-0 flex justify-between">
                    <p className="text-sm md:text-lg min-[2300px]:text-3xl text-start">
                      • Sep 2022 - Dec 2023
                    </p>
                  </div> 
                </div>
              </div>
            </div>
          </div>
          <div className="education-card w-full h-72 rounded-xl mt-20 overflow-hidden relative">
            <div href="https://www.uwindsor.ca/" className="education-photo">
              <img
                src="ahmedabad-university-1.jpg"
                className="img-responsive"
                alt=""
              />
              <div className="education-text-overlay opacity-80 xl:hover:opacity-80 xl:opacity-0">
                <div className="education-text h-full">
                  <div className="flex flex-col justify-evenly space-y-1.5 p-6 text-start w-full">
                    <p className="font-semibold leading-none tracking-wide text-base md:text-2xl min-[2300px]:text-5xl">
                      BTech. in Information and Communication Technology
                    </p>
                    <a
                      href="https://ahduni.edu.in/"
                      className="text-sm md:text-lg min-[2300px]:text-3xl p-2 text-white italic"
                    >
                      {" "}
                      - Ahmedabad University
                    </a>
                    <br />
                  </div>
                  <div className="p-6 pt-0">
                    <p className="text-sm md:text-lg min-[2300px]:text-3xl">
                      • introduced to different concepts of machine Learning,
                      probability/ statistics, computer science; and programming
                      languages.
                    </p>
                  </div>
                  <div className="items-center p-6 pt-0 flex justify-between">
                    <p className="text-sm md:text-lg min-[2300px]:text-3xl text-start">
                      • Aug 2016 - May 2020
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="education-card w-full h-72 rounded-xl mt-20 overflow-hidden relative">
            <div href="https://www.uwindsor.ca/" className="education-photo">
              <img
                src="ahmedabad-university-1.jpg"
                className="img-responsive"
                alt=""
              />
              <div className="education-text-overlay opacity-80 xl:hover:opacity-80 xl:opacity-0">
                <div className="education-text h-full">
                  <div className="flex flex-col justify-evenly space-y-1.5 p-6 text-start w-full">
                    <p className="font-semibold leading-none tracking-wide text-base md:text-2xl min-[2300px]:text-5xl">
                      BTech. in Information and Communication Technology
                    </p>
                    <a
                      href="https://ahduni.edu.in/"
                      className="text-sm md:text-lg min-[2300px]:text-3xl p-2 text-white italic"
                    >
                      {" "}
                      - Ahmedabad University
                    </a>
                    <br />
                  </div>
                  <div className="p-6 pt-0">
                    <p className="text-sm md:text-lg min-[2300px]:text-3xl">
                      • introduced to different concepts of machine Learning,
                      probability/ statistics, computer science; and programming
                      languages.
                    </p>
                  </div>
                  <div className="items-center p-6 pt-0 flex justify-between">
                    <p className="text-sm md:text-lg min-[2300px]:text-3xl text-start">
                      • Aug 2016 - May 2020
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div> 
        </div> */}

        {/* <!-- Inner flexbox wrapper for CTA elements --> */}
        {/* <div className="flex min-w-{1200px}:absolute items-center justify-center w-full px-10 pb-10 bottom-12 mt-10 min">
          <div className="bg-gray-200 dark:bg-gray-600 h-[4px] w-[200px]"></div>
        </div>*/}
      </div>
      {/* <div className="max-w-[85%] text-center">
        <h3 className="section-heading"> EXPERIENCE </h3>
        <hr className="primary left-0 right-0 m-auto" />
        <div className="rounded-xl mt-9 overflow-hidden relative experience-card">
          <div className="education-photo">
            <img src="accenture-AI.jpg" className="img-responsive" alt="" />
            <div className="experience-text-overlay">
              <div className="education-text flex flex-row">
                <div className="flex flex-col justify-evenly space-y-1.5 p-6 text-start w-[40%]">
                  <p className="font-semibold leading-none tracking-wide text-2xl">
                    Data Engineering Analyst
                  </p>
                  <a
                    href="https://www.accenture.com/in-en/about/company/india"
                    className="text-base p-2 text-white italic"
                  >
                    - Accenture Solutions Pvt. Ltd.
                  </a>
                  <p className="text-base text-left">• May 2020 - Jul 2022</p>
                </div>
                <div className="p-6 pt-0 justify-evenly">
                  <p className="text-base">
                    • Spearheaded the management of the DE side of the project,
                    collaborating closely with cross-functional teams to design
                    and develop ETLs using python, scala-spark and azure data
                    factory for Product Visibility, SLOB tracker, and MBA
                    dashboards; achieving an impressive 29% boost in sales
                    revenue.
                  </p>
                  <p className="text-base">
                    • Performed data collection and augmentation, annotation,
                    training, validation, and testing for a face mask detection
                    model with resnet152 as the base network helping client to
                    deploy and monitor covid-19 guidelines.
                  </p>
                  <p className="text-base">
                    • Implemented generative AI techniques, leveraging ML
                    models, to synthesize high-quality data for training,
                    resulting in a 40% reduction in data labeling time and
                    improved model accuracy by 15%.
                  </p>
                  <p className="text-base">
                    • Created database connectors for relational and
                    non-relational databases, and worked on transform components
                    for inhouse json-based ETL processing service created using
                    python/pyspark.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-xl mt-9 overflow-hidden relative experience-card">
          <div className="education-photo">
            <img src="byte-prophecy.jpg" className="img-responsive" alt="" />
            <div className="experience-text-overlay">
              <div className="education-text flex flex-row">
                <div className="flex flex-col justify-evenly space-y-1.5 p-6 text-start w-[40%]">
                  <p className="font-semibold leading-none tracking-wide text-2xl">
                    Data Engineering Intern
                  </p>
                  <a
                    href="https://newsroom.accenture.com/news/2020/accenture-acquires-byte-prophecy-to-enhance-ai-and-digital-analytics-capabilities-in-emerging-markets"
                    className="text-base p-2 text-white italic"
                  >
                    - Byte Prophecy Pvt. Ltd.
                  </a>
                  <p className="text-base text-left">• Dec 2019 - May 2020</p>
                </div>
                <div className="p-6 pt-0">
                  <p className="text-base">
                    • Built and deployed “Attendance Management System and
                    Insight Generator” system that can mark attendance by
                    recognizing person from CCTV cameras, saving money to the
                    organization and time of employees.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-xl mt-9 overflow-hidden relative experience-card">
          <div className="education-photo">
            <img src="csir-iitr.jpg" className="img-responsive" alt="" />
            <div className="experience-text-overlay">
              <div className="education-text flex flex-row">
                <div className="flex flex-col space-y-1.5 p-6 text-start w-[70%]">
                  <p className="font-semibold leading-none tracking-wide text-2xl">
                    Machine Learning Research Intern
                  </p>
                  <a
                    href="http://iitrindia.org/en/index.aspx"
                    className="text-base p-2 text-white italic"
                  >
                    - CSIR - IITR
                  </a>
                  <p className="text-base bottom-4">• Jun 2019 - Jul 2019</p>
                </div>
                <div className="p-6 pt-0 text-start justify-evenly">
                  <p className="text-base font-bold">
                    Project: &quot;ML Algorithm Selection for Toxicology
                    Predictions&quot;
                  </p>
                  <br />
                  <p className="text-base">
                    • Reduced ML algorithm selection time for biotech
                    researchers by 65%, streamlining toxicology predictions. Led
                    the creation and analysis of a comprehensive project that
                    optimized the decision-making process, enabling faster and
                    more efficient model selection. The project showcased my
                    ability to implement practical solutions, delivering
                    tangible time-saving benefits to the biotech industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default WorkExperience;
