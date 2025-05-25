import React from 'react'
import { assets } from '../../assets/assets'
import SearchBar from './SearchBar'

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full md:pt-36 pt-20 px-7 md:px-0 space-y-7 text-center bg-gradient-to-b from-white via-blue-50 to-white z-0'>

        <h1 className='md:text-home-heading-large text-home-heading-small relative font-bold text-gray max-w-3xl mx-auto'>Simple & Easy Learning Platform <span className='text-blue-600'>Grow Your Skills at Your Own Pace!</span> <img src={assets.sketch} alt="" className='md:block hidden absolute -bottom-7 right-0' /></h1>

        <p className='md:block hidden text-gray-500 max-w-2xl mx-auto'>Our platform makes learning easy and fun. With simple lessons and interactive content, you can grow your skills at your own pace. Start today and explore a new way of learning!</p>

        <p className='md:hidden text-gray-500 max-w-sm mx-auto'>Our platform makes learning easy and fun. With simple lessons and interactive content, you can grow your skills at your own pace. Start today and explore a new way of learning!</p>
        
        <SearchBar/>
    </div>
  )
}

export default Hero