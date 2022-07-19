import React from 'react'
import '../index.css'
import img from '../images/illustration-intro.svg'

const Hero = () => {
  return (
    <section id='Hero'>
        {/* <div className="container flex flex-col-reverse md:flex-row px-6 items-center mx-auto space-y-0 md:space-y-0 mt-10"> */}
        <div className="container flex flex-col-reverse md:flex-row px-6 items-center mx-auto  space-y-0 md:space-y-0 mt-10 ">
          <div className="flex flex-col mb-32 space-y-12 md:w-1/2" >

            <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
              Bring every one together To build better products 
            </h1>
            <p className="max-w-sm text-drakGrayishBlue text-center md:text-left">
               Manage makes it simple for software teams to plan day-to-day tasks
               while keeping the larger team goals in view
            
            </p>
            <div className="flex justify-center md:justify-start">
            <a href="#" className="  p-3 px-6 pt-2 text-white rounded-full hover:bg-brightRedLight baseline bg-brightRed">Get started</a>
            </div>
          </div>

          <div className="md:max-w-1/2">
            <img src={img} alt="" />

            </div>
          
            
        </div>
    </section>
  )
}

export default Hero