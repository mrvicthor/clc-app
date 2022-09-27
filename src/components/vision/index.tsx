import ReactPlayer from "react-player";
import { useRef } from "react";
import { useInView } from "framer-motion";

const Vision = () => {
  const ref = useRef<HTMLDivElement>(null!);
  const isInView = useInView(ref, { once: true });
  return (
    <section className="px-4 py-16 bg-[yellow]" id="vision">
      <div className="h-full md:max-w-5xl md:mx-auto">
        <div className="h-full space-y-6 md:space-y-12">
          <div
            ref={ref}
            style={{
              transform: isInView ? "none" : "translateX(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            className="vision__container  md:flex md:flex-col"
          >
            <h2 className="text-black text-3xl font-semibold uppercase vision__header md:text-4xl">
              Vision
            </h2>
            <p className="text-[#B4641C] mt-6 md:text-sm">
              Our Vision is to raise generations that will represent Christ,live
              for Christ, change nations and through us many will come to love
              Christ.
            </p>
          </div>
          <div className="vision__pages flex flex-col gap-6 md:gap-8 md:grid md:grid-cols-2 ">
            <div
              ref={ref}
              className="space-y-5 vision__pages_item md:flex md:flex-col md:pb-3 border border-[#CBCCCC] rounded"
            >
              <div
                style={{
                  transform: isInView ? "none" : "translateY(-200px)",
                  opacity: isInView ? 1 : 0,
                  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                }}
                className="h-[300px] w-full md:h-[240px] border-b-4 border-black"
              >
                <ReactPlayer
                  height="100%"
                  width="100%"
                  controls
                  url="https://youtu.be/r1mFm4bbFbk"
                />
              </div>
              <div className="space-y-5 px-4 pb-4">
                <h3 className="text-md font-semibold">Mission Statement</h3>
                <div className="space-y-2">
                  <p className="text-[#B4641C] md:text-sm">
                    {" "}
                    Our mission is to raise ladies globally through our
                    fellowship conferences to acknowledge the power within them,
                    to have the audacity to dream and live again.{" "}
                  </p>
                  <p className="text-[#B4641C] md:text-sm">
                    Boldly rise up to their calling and become all that they
                    have been destined to be as well as fulfilling their
                    God-given assignment on earth
                  </p>
                </div>
              </div>
            </div>
            <div
              ref={ref}
              className="space-y-5 vision__pages_item md:flex md:flex-col md:pb-3 border border-[#CBCCCC] rounded"
            >
              <div
                style={{
                  transform: isInView ? "none" : "translateY(-200px)",
                  opacity: isInView ? 1 : 0,
                  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                }}
                className="h-[300px] w-full md:h-[240px] border-b-4 border-black"
              >
                <ReactPlayer
                  height="100%"
                  width="100%"
                  controls
                  url="https://youtu.be/SMyuV7pUPLc"
                />
              </div>
              <div className="space-y-5 px-4 pb-4">
                <h3 className="text-md font-semibold">
                  Lady to Lady Global Conference
                </h3>
                <div className="space-y-2">
                  <p className="text-[#B4641C] md:text-sm">
                    Lady to lady Global Conference is an annual conference where
                    We believe in the power of fellowship and that uncommon
                    things happen and changes take place when we gather to
                    fellowship with one another and with the Holy Spirit.
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

export default Vision;
