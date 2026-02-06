import React from 'react'
import { LuLeaf } from "react-icons/lu";

function Cases() {
  return (
    <div className='flex flex-col md:flex-row py-10 gap-6 md:gap-14 mt-15'>
      
      <p className='text-white text-lg w-full md:w-40 leading-3.5'>
        90% <span className='text-[12px] text-gray-500'>of our clients become regular customer</span>
      </p>
            
      <div className='w-full flex flex-col gap-10 md:gap-16'>
        <h1 className='font-bold text-4xl md:text-6xl'>CASES</h1>

        <div className='bg-[url("/images/And.jpg")] p-4 md:p-10 bg-cover bg-center bg-no-repeat w-full min-h-[400px] md:h-100'>
          
          <div className='flex flex-col md:flex-row gap-6 md:gap-14'>
            
            <div className='flex flex-col justify-between md:h-full'>
              <div className='w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-pink-600 via-transparent to-purple-700 text-2xl'>
                <LuLeaf />
              </div>
              <p>01<span className='text-gray-700'>/00</span></p>
            </div>
           
            <div className='flex flex-col gap-6 md:gap-8'>
              <div>
                <h1 className='font-bold text-lg'>ECOLINE</h1>
                <p className='font-bold text-sm'>Online play of socialogical goods</p>
              </div>

              <div className='flex flex-col md:flex-row gap-6 md:gap-20'>
                <div className='w-full md:w-10'>
                  <h1 className='text-[14px] font-bold h-20'>Minimal Online Visibility</h1>
                  <p className='font-bold text-lg'>BEFORE</p>
                </div>

                <div className='w-full md:w-70'>
                  <h1 className='text-[14px] font-bold h-20'>
                    Increased website traffic by 150%, increased conversion rate by 30%
                  </h1>
                  <p className='font-bold text-xl bg-gradient-to-r text-transparent bg-clip-text from-pink-500 via-purple-500 to-purple-700'>
                    AFTER
                  </p>
                </div>
              </div>

              <p className='text-sm w-full md:w-1/2 text-gray-700'>
                Cooperation with DigitalPro has taken our business to a next level.
                <span className='block pt-4'>- Inyna Nkiri, CEO</span>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Cases
