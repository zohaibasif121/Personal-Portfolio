import React from 'react'
import CV1 from './Images/cv-1.png'
import CV2 from './Images/cv-2.png'
import CV from './asserts/ZOHAIB ASIF Resume .pdf';

function Resume() {
  return (
    <div className='min-h-[500px] mb-0 md:h-full'>
      <div className='flex items-center my-8'>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold - py-2 px-4 rounded mx-auto">
        <a href={CV} download='resume'>Download CV</a></button>
      </div>
      <div className='mb-0'>
      <img src={CV1} alt='cv' className='w-1/2 md:w-full md:px-60 mx-auto ' />
      <img src={CV2} alt='cv' className='w-1/2 md:w-full md:px-60 mx-auto '/>
    </div>
    </div>
  )
}

export default Resume