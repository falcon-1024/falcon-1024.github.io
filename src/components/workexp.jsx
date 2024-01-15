"use client";
const WorkExperience = () => {
  return (
    <section id="work-exp" className="section">
      <div className="max-w-[85%] text-center">
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
      </div>
    </section>
  );
};

export default WorkExperience;
