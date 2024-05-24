import React, { useEffect, useState } from 'react';
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";

function Carousel({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  const previousSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  return (
    <div className='relative overflow-hidden my-5 w-full mt-5 h-[30rem] shadow-2xl rounded-md'>
      <div className='flex w-full h-[38rem] transition-transform ease-out duration-500' style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <img key={index} src={slide} alt='slide' style={{ minWidth: '100%', objectFit: 'cover' ,}} />
        ))}
      </div>

      <div className='absolute top-0 h-full w-full flex justify-between items-center text-white px-10'>
        <button onClick={previousSlide}>
          <SlArrowLeft size={40} />
        </button>
        <button onClick={nextSlide}>
          <SlArrowRight size={40} />
        </button>
      </div>
    </div>
  );
}

export default Carousel;
