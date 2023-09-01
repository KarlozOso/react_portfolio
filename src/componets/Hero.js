import React, { useState } from 'react';
import pc_desk from "../assets/pc_desk.jpg";
import SendIcon from '@mui/icons-material/Send';
import { Link } from 'react-router-dom';
import {motion} from "framer-motion"
import {transition1} from "../transitions"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Hero = () => {
    const [move, setMove] = useState(false)
    const handleAnimationComplete = () => {
        if (move) {
          setMove(false);
        }
      };
  return (
    
    <div className='z-10 flex max-w-scren mx-5 py-2 px-5 drop-shadow-2xl rounded-2xl relative lg:flex-col shadow-xl mt-4 '>
      <div className='max-h-[650px] relative rounded-2xl'>
        {/* Overlay */}
        <div className='absolute w-full h-full text-gray-200 max-h-[680px] bg-black/40 flex flex-col justify-center items-center rounded-2xl h1 drop-shadow-2xl'>
        <motion.div
        initial={{ scale: 0 }}
       animate={{ scale: 1 }}
       exit={{ scale: 0 }}
       transition={transition1}
       className='flex flex-col justify-end items-center'
        >
          <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>Carlos <span className='text-amber-400 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>Hernandez </span></h1>
          <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'> <span className='text-amber-400 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] '>Front End</span> Developer</h1>
          </motion.div>
        </div>
        <img className='w-full max-h-[650px] object-cover rounded-2xl' src={pc_desk} alt="/" />
      </div>
      <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-10 '>
        <motion.Link 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={transition1}
        to="/contact"className='btn -my-5 lg:p-5 lg:mb-32 rounded-3xl bg-blue-600 hover:bg-blue-800  text-sm hover:scale-110 italic lg:text-5xl cursor-pointer'>
          contact ME
          <motion.div
          variant="contained"
          animate={{ x: move ? 200 : 0 }} 
          transition={{ type: 'tween', bounce: 60 }}
          onAnimationComplete={handleAnimationComplete} 
          onClick={() => {
            setMove(!move);
          }}
        >
          <SendIcon className='ml-3 lg:ml-8' fontSize='xl' />
        </motion.div>
        </motion.Link>
      </div>
    </div>
  );
}

export default Hero;
