import { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Gallery = ({ images }) => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <>
      <section className="grid grid-cols-3 grid-rows-1">
        <BsChevronLeft
          className="col-start-1 col-end-2 row-start-1 row-end-2 z-50 my-auto"
          size="40px"
          onClick={() =>
            index <= 0 ? setIndex(images.length - 1) : setIndex(index - 1)
          }
        />
        <img
          className="col-start-1 col-end-4 row-start-1 row-end-2"
          src={images[index]?.url}
          alt={images[index]?.name}
        />
        <BsChevronRight
          className="col-start-3 col-end-4 row-start-1 row-end-2 z-50 my-auto ml-auto"
          size="40px"
          onClick={() =>
            index >= images.length - 1 ? setIndex(0) : setIndex(index + 1)
          }
        />
      </section>
    </>
  );
};

export default Gallery;
