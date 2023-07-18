import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Carousel = ({ game }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex(
      currentIndex === 0 ? game.images.length - 1 : currentIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex(
      currentIndex === game.images.length - 1 ? 0 : currentIndex + 1
    );
  };

  /* console.log("src", game.images[currentIndex]); */
  return (
    game.images && (
      <div className="lg:max-w-[1200px] lg:min-h-[650px] h-[300px] sm:h-[500px] w-full m-auto py-8 px-4 relative ">
        <LazyLoadImage
          style={{ backgroundImage: `url(${game.images[currentIndex]})` }}
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        ></LazyLoadImage>
        {/* <p>{game.id}</p> */}
        <div className="absolute top-[40%] -translate-x-0 translate-y-[50%] left-10 text-2xl rounded-full p-2 bg-slate-400 text-white cursor-pointer">
          <BsChevronCompactLeft size={30} onClick={prevSlide} />
        </div>
        <div className="absolute top-[40%] -translate-x-0 translate-y-[50%] right-10 text-2xl rounded-full p-2 bg-slate-400 text-white cursor-pointer">
          <BsChevronCompactRight size={30} onClick={nextSlide} />
        </div>
      </div>
    )
  );
};

export default Carousel;
