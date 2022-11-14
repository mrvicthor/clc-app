import worship from "../../assets/worship.jpg";
import globalLady from "../../assets/globalLady.jpeg";
import singer from "../../assets/ladySing.jpg";
import lady from "../../assets/lady23.jpeg";
import { useState, useEffect } from "react";

import { Arrows, BlockIndicators } from "../index";

const Banner = () => {
  const data = [
    {
      id: 1,
      image: worship,
      text: "Mind blowing outreaches that cuts across boundaries",
    },
    {
      id: 2,
      image: lady,
      text: "Mind blowing outreaches that cuts across boundaries",
    },
    { id: 3, image: singer, text: "Where the uncommon becomes common" },
  ];

  const len = data.length - 1;
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const nextSlide = () => {
    return setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
  };

  useEffect(() => {
    const interval = setInterval(
      () => setActiveIndex(activeIndex === len ? 0 : activeIndex + 1),
      5000
    );
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section id="home" className="mt-[60px] h-[93vh] md:h-[92vh]">
      <div className="carousel">
        <div className="carousel__track">
          {data.map((item, index) => (
            <div
              className={`${index === activeIndex ? " activex" : ""} slides`}
              key={item.id}
            >
              <img
                alt={item.image}
                src={item.image}
                className="h-[93vh] w-[100%] object-cover md:h-[92vh]"
              />
              <div className="banner__text">
                <>
                  <h1 className=" text-2xl absolute bottom-16 overflow-hidden capitalize text-white z-10  md:text-3xl md:bottom-20 md:left-[50%] md:-translate-x-[50%]">
                    {item.text}
                  </h1>
                  <BlockIndicators
                    items={data}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                  />
                </>
              </div>
            </div>
          ))}
          <Arrows
            prevSlide={() =>
              setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
            }
            nextSlide={nextSlide}
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
