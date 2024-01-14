const Home = () => {
  return (
    <section id="home">
      <div className="relative flex items-center justify-center h-screen overflow-hidden">
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
            I'm a Data Analyst / Machine Learning Engineer with a love for
            trekking. I led impactful projects at Accenture, boosting client
            sales by 29% and optimizing data labeling by 40%. From predictive
            modeling for driver behavior to fine-tuning VGG16 models, my
            academic journey and diverse projects showcase my expertise. <br />{" "}
            <br /> Beyond tech, I champion open-source principles and social
            responsibility, winning the 1st prize in an IoT-based car demo.
            Let's connect and explore how my passion for data and machine
            learning can elevate your team!
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Home;
