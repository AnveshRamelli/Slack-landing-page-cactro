import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Hero from './components/Hero'
import BrandLogos from './components/BrandLogos'

const App = () => {
  return (
    <div className='px-10 pb-10'>
      <Navbar/>
      <Banner/>
      <Hero/>
      <BrandLogos/>
    </div>
  )
}

export default App
