"use client";
import skillsData from "@/data/skillsData";
import RevealBlock from "@/components/revealBlock";

const Skills = () => {
  return (
    <section id="skills">
      <RevealBlock className="flex min-h-screen w-full flex-col items-center justify-center px-5 py-24 md:px-10 md:py-28">
        <div className="mb-6 flex w-full max-w-6xl justify-center">
          <h1 className="section-title text-3xl md:text-6xl min-[2300px]:text-9xl font-light">
            SKILLS
          </h1>
        </div>
        <div className="grid w-full max-w-6xl gap-6 lg:grid-cols-2">
          {skillsData.map((group) => (
            <div
              key={group.title}
              className="surface-card card-hover rounded-2xl p-6"
            >
              <h2 className="section-title text-xl md:text-3xl min-[2300px]:text-4xl font-semibold mb-4">
                {group.title}
              </h2>
              <div className="grid gap-3 md:grid-cols-2">
                {group.items.map((item) => (
                  <p
                    key={item}
                    className="skill-item text-sm md:text-lg min-[2300px]:text-2xl leading-relaxed"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </RevealBlock>
    </section>
  );
};

export default Skills;
