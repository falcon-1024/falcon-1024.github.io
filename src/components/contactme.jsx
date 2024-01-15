"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ContactMe = () => {
  return (
    <section id="contact-me" className="section">
      <div className="w-[85%] absolute">
        <h3 className="section-heading"> CONTACT </h3>
        <hr className="primary left-0 right-0 m-auto" />
        <br />
        <div className="text-center flex flex-row">
          <div className="w-[20%]"></div>
          <p className="w-[60%] leading-loose tracking-wider">
            Hey there! Climb the peaks of data insights and mountain trails with
            me. Navigate through my coding exploits on
            <a href="https://github.com/falcon-1024"> GitHub</a>. Traverse the
            landscapes of my journey on
            <a href="https://www.linkedin.com/in/abhi--patel"> LinkedIn</a>.
            Whether it&apos;s predicting patterns or exploring treks, let&apos;s
            conquer challenges. Drop me a message at
            <a href="mailto:abhipatel5058@gmail.com">
              {" "}
              abhipatel5058@gmail.com
            </a>
            . Together, let&apos;s analyze datasets and summit peaks, crafting
            solutions both in the world of data and the great outdoors.
          </p>
        </div>
        <br />
        <br />
        <div className="flex flex-row">
          <div className="ml-[25%] w-1/6 text-center">
            <a
              href="https://github.com/falcon-1024"
              target="_blank"
              className="w-[100px] bg-transparent"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithub}
                size="3x"
                className="text-[#014780]"
              />
            </a>
          </div>
          <div className="w-1/6 text-center">
            <a
              href="https://www.linkedin.com/in/abhi--patel"
              target="_blank"
              className="w-[100px] bg-transparent"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedinIn}
                size="3x"
                className="text-[#014780]"
              />
            </a>
          </div>
          <div className="w-1/6 text-center">
            <a
              href="mailto:abhipatel5058@gmail.com"
              target="_blank"
              className="w-[100px] bg-transparent"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                size="3x"
                className="text-[#014780]"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
