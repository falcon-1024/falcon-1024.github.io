"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import RevealBlock from "@/components/revealBlock";

const ContactMe = () => {
  return (
    <section id="contact-me">
      <RevealBlock className="flex min-h-screen w-full flex-col items-center justify-center px-5 py-24 md:px-10 md:py-28">
        <div className="mb-6 flex w-full max-w-5xl justify-center">
          <h1 className="section-title text-3xl md:text-6xl min-[2300px]:text-9xl font-light mb-5">
            CONTACT ME
          </h1>
        </div>
        <div className="surface-strong w-full max-w-5xl rounded-3xl px-6 py-8 md:px-10 md:py-10">
          <h2 className="section-copy text-xl md:text-3xl min-[2300px]:text-6xl font-light text-center mb-10 leading-relaxed">
            The best entry point depends on what you want to inspect. GitHub is
            where the implementation choices live. LinkedIn is the clean
            timeline. If the role sits around data platforms, retrieval
            systems, or backend AI infrastructure, email is the fastest way to
            start a real conversation.
          </h2>
          <div className="grid flex-shrink-0 gap-6 md:grid-cols-3">
            <div className="text-center">
              <a
                href="https://github.com/falcon-1024"
                target="_blank"
                className="bg-transparent"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="section-muted text-3xl lg:text-5xl"
                />
              </a>
              <p className="section-muted mt-3 text-xs md:text-sm uppercase tracking-[0.24em]">
                Build Decisions
              </p>
            </div>
            <div className="text-center">
              <a
                href="https://www.linkedin.com/in/abhi--patel"
                target="_blank"
                className="bg-transparent"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className="section-muted text-3xl lg:text-5xl"
                />
              </a>
              <p className="section-muted mt-3 text-xs md:text-sm uppercase tracking-[0.24em]">
                Career Timeline
              </p>
            </div>
            <div className="text-center">
              <div className="bg-transparent">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="section-muted text-3xl lg:text-5xl"
                />
              </div>
              <p className="section-muted mt-3 text-xs md:text-sm uppercase tracking-[0.24em]">
                Direct Reach
              </p>
            </div>
          </div>
          <p className="section-title mt-8 text-center text-lg md:text-2xl min-[2300px]:text-5xl font-medium tracking-wide">
            abhi--patel [at] outlook [dot] com
          </p>
        </div>
      </RevealBlock>
    </section>
  );
};

export default ContactMe;
