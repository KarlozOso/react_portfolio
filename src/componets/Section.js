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
    // Agrega las rutas de tus imágenes de la sección aquí
  ];

  return (
    
    <div className='mx-8 flex flex-col-reverse items-center justify-center bg-black/90 min-h-[320px] rounded-xl mt-2 p-4 sm:flex-row sm:p-0 mb-8 '>
      <div className='w-full sm:w-[50%] h-auto sm:h-[500px] flex flex-col justify-center'>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 dark:text-gray-300">The Coldest Sunset</div>
          <p className="text-gray-700 dark:text-white text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
        </div>
        <div className='lg:ml-64 ml-16 mt-5'>
      <ButtonGroup variant="contained" aria-label="outlined primary button group" size='large'>
      <Button className='bg-black'>VIEW LIVE</Button>
      <Button>SHOW CODE</Button>
    </ButtonGroup>
    </div>
      </div>
      <div className='mt-4 sm:mt-0 w-full sm:w-[50%]'>
      <Slider images={sectionImages} /> 
      </div>
      
    </div>
  );
};

export default Section;
