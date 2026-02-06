import React from 'react'

const Heroo = () => {
  return (
    <div>
      <div className='min-h-[300px] md:h-100 flex justify-center items-center'>
        <h1 className='text-4xl md:text-7xl text-center font-bold'>
          Efficient
          <span className='block'>Marketting</span>
          <span className='block bg-gradient-to-r bg-clip-text text-transparent from-indigo-400 via-pink-700 to-pink-500'>
            Solutions
          </span>
        </h1>
      </div>

      <div className='flex flex-col md:flex-row gap-4 md:justify-between items-center'>
        <div className='flex items-center gap-2 md:gap-4'>
          <h1 className='text-sm md:text-lg font-bold bg-gradient-to-r bg-clip-text text-transparent from-indigo-500 to-pink-700'>
            45
          </h1>
          <p className='text-sm md:w-28 font-bold'>
            active clients on an ongoing basis
          </p>
        </div>

        <h1 className='hidden md:block text-sm md:w-78 font-extralight'>
          we help businesses and personal brand find their way in the digital space
        </h1>

        <button className='border rounded-xl px-3 md:px-6'>
          Contact US
        </button>
      </div>
    </div>
  )
}

export default Heroo
