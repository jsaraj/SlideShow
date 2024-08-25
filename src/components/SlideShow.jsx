

import React from 'react'
import { FcNext, FcPrevious, FcDoughnutChart  } from "react-icons/fc";
import SlideShowDetails from './SlideShowDetails'


function SlideShow() {
  return (
    <>
      <div className='flex h-screen justify-center items-center bg-gray-300'>
        <div className='bg-orange-400 w-3/12 rounded p-6 shadow-lg'>
          <h2 className='flex justify-center pb-3 text-2xl font-semibold mb-3 border-b-2 border-gray-400 text-gray-700'>Comments of colleagues</h2>
          <SlideShowDetails />
          <div className='flex space-x-32 justify-center pt-16'>
              <FcPrevious className='cursor-pointer'/>
              <FcDoughnutChart className='cursor-pointer' />
              <FcNext className='cursor-pointer'/>
          </div>
        </div>
      </div>
    </>

  )
}

export default SlideShow