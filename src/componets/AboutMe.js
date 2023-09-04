import React from 'react'
import laptop from "../assets/laptop.jpg"
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const AboutMe = () => {
  return (
    <div>
    <div id="about" className="relative bg-black/90 overflow-hidden mb-6 lg:mb-28 mt-8 lg:my-2 mx-3 lg:mx-0 lg:rounded-none rounded-2xl shadow-xl drop-shadow-xl">
    <div className="max-w-7xl lg:ml-7">
        <div className="relative z-10 pb-8  sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          

            <div className=""></div>

            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left ">
                    <h2 className="h1 my-6 lg:my-10 text-center xl:mr-20 text-2xl tracking-tight font-extrabold text-white sm:text-3xl md:text-4xl">
                        About me
                    </h2>

                    <p className='text-white text-center mx-5 xl:mr-20'>
                        Donec porttitor, enim ut dapibus lobortis, lectus sem tincidunt dui, eget ornare lectus ex non
                        libero. Nam rhoncus diam ultrices porttitor laoreet. Ut mollis fermentum ex, vel viverra lorem
                        volutpat sodales. In ornare porttitor odio sit amet laoreet. Sed laoreet, nulla a posuere
                        ultrices, purus nulla tristique turpis, hendrerit rutrum augue quam ut est. Fusce malesuada
                        posuere libero, vitae dapibus eros facilisis euismod. Sed sed lobortis justo, ut tincidunt
                        velit. Mauris in maximus eros.
                    </p>
                </div>
            </main>
        </div>
    </div>
    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img className="h-62 w-full object-cover object-top sm:h-72 md:h-96 lg:w-full lg:h-full" src={laptop} alt="" />
    </div>
</div>
    </div>
  )
}

export default AboutMe
