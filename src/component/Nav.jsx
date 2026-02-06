import React from 'react'
import { LuTableOfContents } from "react-icons/lu";

function Nav() {
  return (
    <div className='flex justify-between text-2xl'>
        <LuTableOfContents className='' />
        <h1 className='text-lg font-bold'>DIGITALPRO</h1>
        <p className='text-lg font-bold'>GET STARTED</p>
    </div>
  )
}

export default Nav
