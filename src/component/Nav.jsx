import React from 'react'
import { LuTableOfContents } from "react-icons/lu";

function Nav() {
  return (
    <div className='flex w-full justify-between md:text-2xl'>
        <LuTableOfContents className='' />
        <h1 className='md:text-lg font-bold'>DIGITALPRO</h1>
        <p className='md:text-lg font-bold'>GET STARTED</p>
    </div>
  )
}

export default Nav
