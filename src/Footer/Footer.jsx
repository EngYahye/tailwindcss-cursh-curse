import React from 'react'
import '../index.css'
import img from '../images/logo.svg'
import fb from '../images/icon-facebook.svg'
import IG from '../images/icon-instagram.svg'
import PI from '../images/icon-pinterest.svg'
import TW from '../images/icon-twitter.svg'
import YT from '../images/icon-youtube.svg'

const Footer = () => {
  return (
    <footer className="bg-veryDrakBlue">
        <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
            <div className="flex flex-col-reverse items-center justify-between space-y-12 md:space-y-0 md:items-start md:flex-col">
            <div className="mx-auto my-6 text-center text-white md:hidden">
            Copyright &copy; 2022, All Rights Reserved
            </div>
            <div>
                <img src={img} alt="" className='h-8' />

            </div>
            <div className="flex justify-center space-x-4">
                <a href="#">
                <img src={fb} alt="" className='w-8' />
                </a>
                <a href="#">
                <img src={IG} alt="" className='h-8' />
                </a>
                <a href="#">
                <img src={YT} alt="" className='h-8' />
                </a>
                <a href="#">
                <img src={PI} alt="" className='h-8' />
                </a>
                <a href="#">
                <img src={TW} alt="" className='h-8' />
                </a>
               
            </div>
            </div>
            <div className="flex justify-around space-x-32">
                <div className="flex flex-col space-y-3 text-white">
                    <a href="#" className="hover:text-brightRed">Home</a>
                    <a href="#" className="hover:text-brightRed">About</a>
                    <a href="#" className="hover:text-brightRed">Pricing</a>
                    <a href="#" className="hover:text-brightRed">Product</a>
                  
                </div>
                <div className="flex flex-col space-y-3 text-white">
                    <a href="#" className="hover:text-brightRed">Careers</a>
                    <a href="#" className="hover:text-brightRed">Community</a>
                    <a href="#" className="hover:text-brightRed">Prevacy plocy</a>
                </div>
            </div>
            <div className="felx flex-col-justify-between">
                <form >
                    <div className="flex space-x-3">
                        <input type="text" className="focus:outline-none flex-1 px-4 rounded-full focus:border-sky-500 focus:ring-sky-500 focus:ring-1" placeholder='Update your inbox' />
                        <button className="px-6 py-2 rounded-full text-white bg-brightRed hover:bg-brightRedLight focus:outline-none ">
                            Go
                        </button>
                    </div>
                </form>
                <div className=" hidden text-white md:block md:mt-16">
                Copyright &copy; 2022, All Rights Reserved
                </div>
            </div>

        </div>

    </footer>
  )
}

export default Footer