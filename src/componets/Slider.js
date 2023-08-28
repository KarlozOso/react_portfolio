import React, { useState } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleIndicatorClick = index => {
    setCurrentIndex(index);
  };

  return (
    <div className=''>
      <div className='flex items-center justify-end mt-2 mx-6 mb-2'>
        <div className='rounded-xl overflow-hidden'>
          <div className='relative'>
            <img
              src={images[currentIndex]}
              alt='Slider'
              className='w-screen h-[400px] lg:w-[700px] lg:h-[500px] object-cover rounded-xl'
            />
            <div className='absolute inset-0 flex justify-center items-end mb-4 '>
              <div className='flex justify-center space-x-2'>
                {images.map((_, index) => (
                  <div
                    key={index}
                    onClick={() => handleIndicatorClick(index)}
                    className={`h-2 w-6 bg-gray-300 self-center rounded-full ${
                      index === currentIndex ? 'bg-white' : ''
                    } cursor-pointer`}
                  />
                ))}
              </div>
            </div>
            <div
              onClick={handlePrev}
              className='absolute left-0 top-1/2 transform -translate-y-1/2  text-white hover:text-blue-600 ml-2'
            >
              <ArrowBackIosNewIcon />
            </div>
            <div
              onClick={handleNext}
              className='absolute right-0 top-1/2 transform -translate-y-1/2  text-white hover:text-blue-600 mr-2'
            >
              <ArrowForwardIosIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
