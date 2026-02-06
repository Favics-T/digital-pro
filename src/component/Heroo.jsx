import React from 'react'

const Heroo = () => {
  return (
    <div>

        <div className='h-110 flex justify-center items-center'>
             <h1 className='text-6xl text-center md:text-7xl font-bold'>Efficient
               <span className='block'>Marketting</span>   
                <span className='block bg-gradient-to-r bg-clip-text text-transparent from-indigo-400 via-pink-700 to-pink-500 '>Solutions </span> </h1>

               

        </div>

        <div className='flex justify-between '>
            <div className='flex items-center gap-4'>
                <h1 className='text-lg font-bold bg-gradient-to-r bg-clip-text text-transparent from-indigo-500 to-pink-700'>45</h1>
                <p className='text-sm w-28 font-bold'>active clients on an ongoing basis</p>
            </div>

            <h1 className='text-sm w-78 font-extralight'>we help businesses and personal brand find their way in the digital space by creating efficient strategies and increasing their online influence</h1>
            <button className='border border-pink-800 rounded-xl px-6'>Contact US </button>
        </div>
     
    </div>
  )
}

export default Heroo
