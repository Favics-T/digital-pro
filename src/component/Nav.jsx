import React from 'react'
import { LuTableOfContents } from "react-icons/lu";

function Nav() {
  return (
    <div className='flex w-full justify-between items-center text-lg md:text-2xl'>
      <LuTableOfContents />
      <h1 className='text-sm md:text-lg font-bold'>DIGITALPRO</h1>
      <p className='text-sm md:text-lg font-bold'>GET STARTED</p>
    </div>
  )
}

export default Nav
