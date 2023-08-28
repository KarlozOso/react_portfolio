import React from 'react';
import pc_desk from "../assets/pc_desk.jpg";
import SendIcon from '@mui/icons-material/Send';
import { Link } from 'react-router-dom';
import {motion} from "framer-motion"
import {transition1} from "../transitions"

const Hero = () => {
  return (
    <div className='z-10 flex max-w-scren mx-auto pt-3 px-5 drop-shadow-xl rounded-2xl relative lg:flex-col'>
      <div className='max-h-[650px] relative rounded-2xl'>
        {/* Overlay */}
        <div className='absolute w-full h-full text-gray-200 max-h-[650px] bg-black/40 flex flex-col justify-center items-center rounded-2xl h1'>
        <motion.div
        initial={{ scale: 0 }}
       animate={{ scale: 1 }}
       exit={{ scale: 0 }}
       transition={transition1}
       className='flex flex-col justify-center items-center'
        >
          <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>Carlos <span className='text-amber-400 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>Hernandez </span></h1>
          <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'> <span className='text-amber-400 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] '>Front End</span> Developer</h1>
          </motion.div>
        </div>
        <img className='w-full max-h-[650px] object-cover rounded-2xl' src={pc_desk} alt="/" />
      </div>
      <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-10'>
        <motion.Link 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={transition1}
        to="/contact"className='btn -my-10 lg:px-20 lg:mb-32 rounded-3xl bg-gray-900 hover:bg-blue-800  hover:scale-110 italic lg:text-5xl'>
          contact ME
          <SendIcon className='ml-4 lg:ml-8' fontSize='xl'/>
        </motion.Link>
      </div>
    </div>
  );
}

export default Hero;
