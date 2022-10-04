import { Cursor, useTypewriter } from "react-simple-typewriter";
import sandra from "../../assets/sandra.jpg";
import gen from "../../assets/gen.png";
import { useRef } from "react";
import { useInView } from "framer-motion";

type Props = {};

const Testimony = ({}: Props) => {
  const [text, count] = useTypewriter({
    words: ["virtue", "determination", "faith"],
    loop: true,
    delaySpeed: 2000,
  });
  const ref = useRef<HTMLElement>(null!);
  const isInView = useInView(ref, { once: true });
  return (
    <section id="testimony" className="px-4 py-16">
      <div className="space-y-16 md:max-w-5xl md:mx-auto">
        <h2 className="text-lg normal-case text-center text-white md:text-2xl">
          Lady to lady global is powered by personalities of {""}
          <span className="text-[yellow] text-4xl">{text}</span>
          <Cursor cursorColor="yellow" />{" "}
        </h2>
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-center md:gap-10">
          <figure ref={ref}>
            <img
              style={{
                transform: isInView ? "none" : "translateY(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
              src={sandra}
              alt="pastor sandra"
            />
            <figcaption className="text-white text-center mt-4 md:mt-8">
              Sandra Nelson
            </figcaption>
          </figure>
          <figure ref={ref}>
            <img
              style={{
                transform: isInView ? "none" : "translateY(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
              src={gen}
              alt="deaconess gen"
            />
            <figcaption className="text-white text-center mt-4 md:mt-8">
              Gen Brobbey
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Testimony;
