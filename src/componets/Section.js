import React from 'react';
import Slider from './Slider';
import laptop from '../assets/laptop.jpg';
import lightsImage from '../assets/Lights.jpeg';
import pcDeskImage from '../assets/pc_desk.jpg';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const Section = () => {
  const sectionImages = [
    laptop,
    lightsImage,
    pcDeskImage,
   
  ];

  return (
    
    <div className='lg:mx-8 mx-2 flex flex-col-reverse items-center justify-center bg-black/90 min-h-[320px] rounded-xl mt-2 px-4 pb-4 sm:flex-row sm:p-0 mb-8 '>
      <div className='w-full sm:w-[50%] h-auto sm:h-[500px] flex flex-col justify-center items-center lg:ml-20'>
        <div className="px-5 py-0 ">
          <div className="font-bold text-xl lg:text-2xl mb-1 lg:mb-5 text-gray-300 text-center h1 xl:ml-10">The Coldest Sunset</div>
          <p className="text-white text-center justify-center xl:ml-10">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div className="px-6 pt-4 pb-0 xl:ml-14">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">HTML</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">CSS</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">REACT</span>
        </div>
      <div className='lg:ml-10 ml-0 sm:ml-0 mt-5 flex flex-row lg:space-x-8 space-x-3'>
      <button className='btn bg-blue-600 rounded-xl lg:text-2xl lg:p-6  border-white lg:border-4 border-2 hover:bg-blue-900 hover:scale-110 whitespace-nowrap'>
      <span> SEE CODE</span>
      </button>
      <button className='btn bg-blue-600 rounded-xl lg:text-2xl lg:p-6  border-white lg:border-4 border-2 hover:bg-blue-900 hover:scale-110 whitespace-nowrap'>
      <span> SEE LIVE</span>
      </button>
    </div>
      </div>
      <div className='mt-3 sm:mt-0 w-full object-cover'>
      <Slider images={sectionImages} /> 
      </div>
      
    </div>
  );
};

export default Section;
