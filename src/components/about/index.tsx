import ReactPlayer from "react-player/youtube";
import { useRef } from "react";
import { useInView } from "framer-motion";

const About = () => {
  const ref = useRef<HTMLDivElement>(null!);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="px-4 py-16 overflow-hidden md:py-[6rem]" id="about">
      <div className="md:max-w-5xl md:mx-auto">
        <div
          ref={ref}
          className="space-y-10 overflow-hidden md:grid md:grid-cols-2 md:gap-8 lg:gap-10"
        >
          <div className="space-y-6 md:py-6 md:flex md:flex-col md:space-y-0 self-center md:gap-6 lg:py-12">
            <h2
              style={{
                transform: isInView ? "none" : "translateY(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
              className="text-[#545454] text-3xl uppercase about__header"
            >
              About Us
            </h2>
            <div className="space-y-2">
              <p
                style={{
                  transform: isInView ? "none" : "translateY(-200px)",
                  opacity: isInView ? 1 : 0,
                  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                }}
                className="text-white"
              >
                Lady-to-Lady conference has given many ladies not only the
                audacity to dream again but also to boldly rise-up to their
                calling and become all that they were destined to be wherever
                they are positioned in fulfilling their God-given assignment
                here on earth.
              </p>
              <p
                style={{
                  transform: isInView ? "none" : "translateY(-200px)",
                  opacity: isInView ? 1 : 0,
                  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                }}
                className="text-white"
              >
                The atmosphere and the women you meet during these conferences
                leaves you inspired, encouraged and ready to fine tune your
                focus on the things that matter in your life – your God given
                purpose here on earth..{" "}
              </p>
            </div>
            <div className=" md:w-full lg:mt-6">
              <button className="text-white border border-[yellow] hover:bg-[yellow] font-semibold hover:text-black py-3 px-5 rounded outline-none md:w-full">
                Read More
              </button>
            </div>
          </div>
          <div className="h-[450px] w-full">
            <ReactPlayer
              height="100%"
              width="100%"
              playing={true}
              controls
              url="https://www.youtube.com/watch?v=It4M-KiV12Q"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
