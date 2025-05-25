import React from 'react';
import { assets } from '../../assets/assets';

const Companies = () => {
  return (
    <div className="pt-16">
      <p className="text-base text-gray-500 text-center">
        Trusted by Learners from Top Institutions
      </p>
  
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 md:mt-10 mt-5">
  <img src={assets.jnct} alt="Your College" className="w-24 md:w-32 h-auto object-contain" />
  <img src={assets.udemy} alt="Udemy" className="w-24 md:w-32 h-auto object-contain" />
  <img src={assets.coursera} alt="Coursera" className="w-24 md:w-32 h-auto object-contain" />
  <img src={assets.edx} alt="edX" className="w-24 md:w-32 h-auto object-contain" />
  <div className="w-28 md:w-36 h-16 md:h-20 flex items-center justify-center bg-white rounded-lg shadow-md">
    <img src={assets.skillshare} alt="Skillshare" className="h-full object-contain" />
  </div>
</div>


    </div>
  );
}  

export default Companies;
