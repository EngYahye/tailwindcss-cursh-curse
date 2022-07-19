import React from 'react'
import '../index.css'

const Cta = () => {
  return (
    <section id="cta " className='cta bg-brightRed'>
        <div className="container flex flex-col items-center justify-between px-6 py-24 mx-auto md:py-12 md:flex-row md:space-y-0 space-y-12">
            <h2 className="text-5xl font-bold leading-tight md:max-w-xl text-white text-center md:text-4xl md:text-left">
            Simplify how your team works today
            </h2>
            <div>
            <a href="#" className=" p-3 px-6 pt-2 shadow-2xl text-brightRed  rounded-full hover:bg-gray-900 bg-white">Get started</a>
            </div>
        </div>
    </section>
  )
}

export default Cta