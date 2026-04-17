"use client";
import RevealBlock from "@/components/revealBlock";

const Home = () => {
  return (
    <section id="home">
      <RevealBlock className="flex min-h-screen w-full items-center justify-center px-5 pb-16 pt-28 md:px-10 md:pb-20 md:pt-32">
        <div className="w-full max-w-5xl">
          <div>
            <p className="section-muted mb-4 text-xs uppercase tracking-[0.34em] md:text-sm min-[2300px]:text-xl">
              Data Infrastructure, Retrieval Systems, and Applied AI
            </p>
            <h1 className="section-title mb-4 text-4xl font-light md:text-7xl min-[2300px]:text-9xl">
              Abhi Patel
            </h1>
            <h2 className="section-title mb-6 text-2xl font-medium leading-tight md:text-5xl min-[2300px]:text-7xl">
              Data Engineer. AI Engineer.
            </h2>

            <div className="max-w-4xl space-y-6">
              <p className="section-copy text-lg leading-relaxed md:text-2xl min-[2300px]:text-4xl">
                My work sits where data engineering, backend reliability, and
                LLM behavior meet. I like systems that need to ingest imperfect
                inputs, stay observable under load, and still return something
                a human can trust.
              </p>
              <p className="section-copy text-lg leading-relaxed md:text-2xl min-[2300px]:text-4xl">
                At Rencom Networks, that meant retrieval workflows and FastAPI
                services around crypto research. At Accenture, it meant ETL,
                warehouse, and ML delivery across Azure, Databricks, and
                Snowflake.
              </p>
              <p className="section-copy text-lg leading-relaxed md:text-2xl min-[2300px]:text-4xl">
                Outside work, the same instinct shows up in mountain trails and
                prediction-market tooling: map the terrain, measure the
                uncertainty, and keep moving with signal instead of noise.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              <div className="surface-card card-hover rounded-2xl p-5">
                <p className="metric-label">Analyst Time</p>
                <p className="metric-value">45% reduction in manual lookup effort on research workflows.</p>
              </div>
              <div className="surface-card card-hover rounded-2xl p-5">
                <p className="metric-label">API Reliability</p>
                <p className="metric-value">99.9% uptime with 30% lower p95 latency through batching and caching.</p>
              </div>
              <div className="surface-card card-hover rounded-2xl p-5">
                <p className="metric-label">Data Scale</p>
                <p className="metric-value">Enterprise ETL pipelines handling datasets beyond TB/day.</p>
              </div>
              <div className="surface-card card-hover rounded-2xl p-5">
                <p className="metric-label">Delivery Speed</p>
                <p className="metric-value">30% faster release cycles with stronger CI/CD and observability.</p>
              </div>
            </div>
          </div>
        </div>

      </RevealBlock>
      {/* <!-- Outer wrapper for flexbox --> */}

      {/* <div className="relative flex items-center justify-center h-screen overflow-hidden">
        <img
          className="flex bg-center scale-[1.01] blur-[7px] grayscale-[30%] h-screen w-screen object-cover"
          src="computerScienceMap.jpg"
        />
        <div className="text-white absolute max-w-7xl ps-96 top-96">
          <h1 className="text-5xl">Abhi Patel</h1>
          <br /> <br />
          <h3 className="text-2xl">
            Machine Learning. Data Analyst. Software Engineer. Back-End
            Engineer.
          </h3>
          <br />
          <hr className="hr border-cyan-400" />
          <br />
          <h4 className="text-xl">
            I&apos;m a Data Analyst / Machine Learning Engineer with a love for
            trekking. I led impactful projects at Accenture, boosting client
            sales by 29% and optimizing data labeling by 40%. From predictive
            modeling for driver behavior to fine-tuning VGG16 models, my
            academic journey and diverse projects showcase my expertise. <br />{" "}
            <br /> Beyond tech, I champion open-source principles and social
            responsibility, winning the 1st prize in an IoT-based car demo.
            Let&apos;s connect and explore how my passion for data and machine
            learning can elevate your team!
          </h4>
        </div>
      </div> */}
    </section>
  );
};

export default Home;
