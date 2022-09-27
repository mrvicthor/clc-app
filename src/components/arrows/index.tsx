import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

type ArrowProps = {
  prevSlide: () => void;
  nextSlide: () => void;
};

const Arrows = ({ prevSlide, nextSlide }: ArrowProps) => {
  return (
    <div className="arrows">
      <button className="carousel__button prev" onClick={prevSlide}>
        <MdArrowBackIos size={20} />
      </button>
      <button className="carousel__button next" onClick={nextSlide}>
        <MdArrowForwardIos size={20} />
      </button>
    </div>
  );
};

export default Arrows;
