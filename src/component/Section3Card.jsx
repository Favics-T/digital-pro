import React from 'react'

function Section3Card({num, letter, desc,serv}) {
  return (
    <div className='bg-[url("/images/And.jpg")] w-60 hover:shadow-3xl rounded border border-b-pink-700 border-t-pink-300 border-pink-400 shadow-2xl hover:shadow-3xl bg-cover bg-center bg-no-repeat h-110 '>
        <div className='flex flex-col gap-6 px-8 py-2 hover:shadow-3xl'>
            <p className='text-sm text-gray-600'>{num}</p>

        <h1 className='text-8xl text-pink-500'>{letter}</h1>

        <div className='flex h-50  flex-col gap-4'>
            <h1 className='font-bold w-30 leading-6 text-xl'>{serv}</h1>
            <p className='text-[11px] font-bold text-gray-500'>{desc}</p>
        </div>

        <h1 className='font-bold text-md'>GET STARTED</h1>
        </div>
        
    </div>
  )
}

export default Section3Card
