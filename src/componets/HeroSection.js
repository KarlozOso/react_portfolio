import React from 'react';
import { motion } from 'framer-motion';


const HeroSection = () => {
  return (
    <div className="rounded-2xl mx-10 h-[700px] flex items-center justify-center bg-gray-500 relative">
      {/* Mover los elementos dentro de este div */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {Array.from({ length: 400 }, (_, index) => (
          <motion.span
            key={index}
            className="text-gray-800 absolute cursor-pointer"
            initial={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            transition={{
              duration: Math.random() * 10 + 3,
              yoyo: Infinity,
            }}
            whileHover={{ color: 'blue' }} // Cambiar color al hacer hover
          >
            {Math.round(Math.random())}
          </motion.span>
        ))}
      </motion.div>

      <div className=" text-white  text-center">
        <h1 className="text-4xl font-bold mb-4 h1"></h1>
        <p className="text-xl h1"></p>
      </div>
      
    </div>
  );
};

export default HeroSection;
