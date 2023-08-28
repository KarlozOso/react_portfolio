import React from 'react'
import Navbar from '../componets/Navbar'
import Hero from '../componets/Hero'
import AboutMe from '../componets/AboutMe'
import Slider from '../componets/Slider'
import Section from '../componets/Section'
import Footer from '../componets/Footer'


const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe />
      <Section />
      <Footer />
    </div>
  )
}

export default Home
