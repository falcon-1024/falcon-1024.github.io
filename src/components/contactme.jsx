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
          <h1 className="section-title section-heading mb-5 font-light">
            CONTACT ME
          </h1>
        </div>
        <div className="surface-strong w-full max-w-5xl rounded-3xl px-6 py-8 md:px-10 md:py-10">
          <h2 className="section-copy section-lead mb-10 text-center font-light">
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
              <p className="section-muted section-eyebrow mt-3">
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
              <p className="section-muted section-eyebrow mt-3">
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
              <p className="section-muted section-eyebrow mt-3">
                Direct Reach
              </p>
            </div>
          </div>
          <p className="section-title card-heading mt-8 text-center font-medium tracking-wide">
            abhi--patel [at] outlook [dot] com
          </p>
        </div>
      </RevealBlock>
    </section>
  );
};

export default ContactMe;
