import React from 'react'
import Logo from './Logo'

function Cooperate() {
  return (
    <div className='bg-cover justify-center flex flex-col min-h-screen bg-center bg-[url("/images/And.jpg")]'>
      
      <div className='w-full h-full flex flex-col gap-6 md:gap-8 justify-center items-center px-4'>
        <h1 className='text-4xl md:text-8xl font-bold text-center'>
          LET'S BEGIN
          <span className='block bg-gradient-to-r from-indigo-600 via-pink-500 to-pink-700 bg-clip-text text-transparent'>
            COOPERATION
          </span>
        </h1>

        <h1 className='text-sm md:text-lg text-center'>
          Please contact us for cooperation and service detail
        </h1>

        <button className='border px-8 md:px-10 py-2 rounded-2xl'>
          CONTACT US
        </button>
      </div>

      <div className='flex flex-col md:flex-row justify-between md:mt-20 items-center gap-4 px-6 py-4'>
        <Logo />
        <p className='text-sm text-gray-800'>Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  )
}

export default Cooperate
