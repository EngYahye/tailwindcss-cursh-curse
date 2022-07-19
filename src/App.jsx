import React from 'react'
import './index.css'
import Nav from './Nav/Nav'
import Hero from './Hero/Hero'
import Features from './Features/Features'
import './App.css'
import Testmonial from './Testmonial/Testmonial'
import Cta from './CTA/Cta'
import Footer from './Footer/Footer'

const App = () => {
  return (
    <div>
        <Nav/>
        <Hero/>
        <Features/>
        <Testmonial/>
        <Cta/>
        <Footer/>


      
    </div>
  )
}

export default App