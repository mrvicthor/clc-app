type IndicatorProps = {
  id: number;
  image: string;
  text: string;
};

type BlockProps = {
  items: IndicatorProps[];
  activeIndex: number;
  setActiveIndex: (index: number) => void;
};

const BlockIndicators = ({
  items,
  activeIndex,
  setActiveIndex,
}: BlockProps) => {
  return (
    <div className="blocks flex gap-3 bottom-4 left-[50%] -translate-x-[50%] absolute ">
      {items.map((item, index) => (
        <div
          onClick={() => setActiveIndex(index)}
          key={index}
          className={`${
            index === activeIndex ? "bg-[yellow]" : ""
          } h-[3px] w-5 bg-white hover:bg-[yellow] cursor-pointer`}
        />
      ))}
    </div>
  );
};

export default BlockIndicators;
