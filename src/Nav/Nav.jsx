import React from 'react'
import '../index.css'
import logo from '../images/logo.svg'
import img1 from '../images/icon-hamburger.svg'
import img2 from '../images/icon-close.svg'
import { useState } from 'react'


const Nav = () => {
  const [ActiveHamburger  ,SetHamburger]=useState('');
  const [open  ,Setopen]=useState('');
  return (
    
    <nav className="relative container mx-auto p-6">
        <div className="flex items-center justify-between">
            <div className="pt-2">
                <img src={logo} alt="" />
            </div>
            <div className="hidden  md:flex space-x-6">
                <a href="#" className='hover:text-drakGrayishBlue'>Pricing</a>
                <a href="#" className='hover:text-drakGrayishBlue'>Product</a>
                <a href="#"className='hover:text-drakGrayishBlue'>About</a>
                <a href="#"className='hover:text-drakGrayishBlue'>Creer</a>
                <a href="#"className='hover:text-drakGrayishBlue'>Community</a>
            </div>
            <a href="#" className=" hidden md:block p-3 px-6 pt-2 text-white rounded-full hover:bg-brightRedLight baseline bg-brightRed">Get started</a>
            
        {/* <!-- Hamburger Icon --> */}
        <button
        onClick={()=>SetHamburger(!ActiveHamburger)} 
        
        
          id="menu-btn"
          className= ' block hamburger md:hidden focus:outline-none'
          
          
        > 
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
        {/* <button  className=" md:hidden: block  md:hidden focus:outline-none ">
          <img src={img1} alt="" onClick={()=>SetHamburger('o')} className='h-3 '/>
          <img src={img2} alt="" className='h-3  ' />
        </button> */}
        </div>
        {/* <!-- Mobile Menu --> */}
      <div className="md:hidden">
        <div
          id="menu open"
          className={`${ActiveHamburger?'right-1':'hidden '} absolute flex flex-col items-center md:hidden self-end py-8  px-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center right-6 left-6 top-3 drop-shadow-md`}
        >
          <a href="#">Pricing</a>
          <a href="#">Product</a>
          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Community</a>
          <a href="#" className=" md:hidden block p-3 px-6 pt-2 text-white rounded-full hover:bg-brightRedLight baseline bg-brightRed">Get started</a>
        </div>
       
      </div>
    </nav>

  )
}

export default Nav