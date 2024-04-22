"use client";
const Home = () => {
  return (
    <section id="home" className="dark">
      <div className="flex flex-col items-center lg:h-screen min-h-screen h-full justify-center dark:bg-neutral-800">
        {/* <!-- Inner flexbox wrapper for headings --> */}
        <div className="flex-shrink-0 items-center w-4/5 mt-16">
          {/* <!-- Headings --> */}
          <div className="text-gray-600">
            <h1 className="text-3xl md:text-6xl min-[2300px]:text-9xl font-light mb-5">
              Abhi Patel
            </h1>
            <h2 className="text-2xl md:text-5xl min-[2300px]:text-8xl font-medium uppercase mb-7">
              Machine Learning. Data Analyst. Software Engineer.
            </h2>
            <h3 className="text-xl md:text-3xl min-[2300px]:text-6xl font-normal mb-5">
              I&apos;m a Data Analyst / Machine Learning Engineer with a love
              for trekking. I led impactful projects at Accenture, boosting
              client sales by 29% and optimizing data labeling by 40%. From
              predictive modeling for driver behavior to fine-tuning VGG16
              models, my academic journey and diverse projects showcase my
              expertise. <br /> <br /> Beyond tech, I champion open-source
              principles and social responsibility, winning the 1st prize in an
              IoT-based car demo. Let&apos;s connect and explore how my passion
              for data and machine learning can elevate your team!
            </h3>
          </div>
        </div>

        {/* <!-- Inner flexbox wrapper for CTA elements --> */}
        <div className="flex min-w-{1200px}:absolute items-center justify-center w-full px-10 pb-10 bottom-12 mt-10 min">
          <div className="bg-gray-200 dark:bg-gray-600 h-[4px] w-[200px]"></div>
        </div>
      </div>
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
