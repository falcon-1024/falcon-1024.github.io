"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ContactMe = () => {
  return (
    <section id="contact-me" className="dark">
      <div className="flex flex-col items-center min-h-screen h-full justify-center dark:bg-neutral-800">
        {/* <!-- Inner flexbox wrapper for headings --> */}
        <div className="flex flex-shrink-0 relative top-16 justify-center w-3/4 text-gray-600">
          <h1 className="text-3xl md:text-6xl min-[2300px]:text-9xl font-light mb-5">
            CONTACT ME
          </h1>
        </div>
        <div className="block relative flex-shrink-0 top-16 m-1.5 text-gray-500 w-3/4">
          <h2 className="text-xl md:text-3xl min-[2300px]:text-6xl font-extralight text-center mb-7">
            Hey there! Climb the peaks of data insights and mountain trails with
            me. Navigate through my coding exploits on
            <a className="italic" href="https://github.com/falcon-1024">
              {" "}
              GitHub
            </a>
            . Traverse the landscapes of my journey on
            <a
              className="italic"
              href="https://www.linkedin.com/in/abhi--patel"
            >
              {" "}
              LinkedIn
            </a>
            . Whether it&apos;s predicting patterns or exploring treks,
            let&apos;s conquer challenges. Drop me a message at
            <a className="italic" href="mailto:abhipatel5058@gmail.com">
              {" "}
              abhipatel5058@gmail.com
            </a>
            . Together, let&apos;s analyze datasets and summit peaks, crafting
            solutions both in the world of data and the great outdoors.
          </h2>
          <br />
          <br />
          <div className="grid flex-shrink-0 grid-cols-3">
            <div className="text-center">
              <a
                href="https://github.com/falcon-1024"
                target="_blank"
                className="bg-transparent"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-[#949494] text-3xl lg:text-5xl"
                />
              </a>
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
                  className="text-[#949494] text-3xl lg:text-5xl"
                />
              </a>
            </div>
            <div className="text-center">
              <a
                href="mailto:abhipatel5058@gmail.com"
                target="_blank"
                className="bg-transparent"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-[#949494] text-3xl lg:text-5xl"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
