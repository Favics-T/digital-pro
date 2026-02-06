import React from 'react'
import Logo from './Logo'

function Cooperate() {
  return (
    <div className=' bg-cover flex flex-col  h-screen bg-center bg-[url("/images/And.jpg")]'>
      <div className='w-full h-full flex flex-col gap-8 justify-center items-center '>
        <h1 className='md:text-8xl text-4xl font-bold text-center'>LET'S BEGIN <span className='block bg-gradient-to-r from-indigo-600 via-pink-500 to-pink-700 bg-clip-text text-transparent'> COOPERATION </span></h1>
            <h1 className='text-lg'>Please contact us for cooperation and service detail</h1>
            <button className='border border-b-indigo-500 border-e-pink-500 border-t-pink-300 px-10 py-2 rounded-2xl border-l-purple-500'>CONTACT US</button>
      </div>

      <div className='flex justify-between ite'>
        {/* <h1 className='text-black'>kk</h1> */}
        <Logo />

        <p className='text-sm text-gray-800'>Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  )
}

export default Cooperate
