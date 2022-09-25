import worship from "../../assets/worship.jpg";
import globalLady from "../../assets/globalLady.jpeg";
import singer from "../../assets/ladySing.jpg";
import { useState } from "react";

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
      image: globalLady,
      text: "Mind blowing outreaches that cuts across boundaries",
    },
    { id: 3, image: singer, text: "Where the uncommon becomes common" },
  ];

  const len = data.length - 1;
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section className="mt-[71px] h-[60vh]">
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
                className="h-[60vh] w-[100%] object-cover"
              />
              <h1 className="text-2xl absolute bottom-10 capitalize text-white z-10 left-8">
                {item.text}
              </h1>
            </div>
          ))}
          <Arrows
            prevSlide={() =>
              setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
            }
            nextSlide={() =>
              setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
            }
          />
          <BlockIndicators
            items={data}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
