import React from 'react'

function ServiceCard({icon, title,desc,}) {
  return (
    <div className=
    'border-b p-8  items-cente flex gap-8 border-purple-300'>
      <div>
            <div className=
            'flex flex-col gap-4 justify-center items-center'>
                <h1 className=
                'text-2xl text-pink-600'>{icon}</h1>
                <p 
                className='text-lg font-bold border rounded-full border-pink-400 px-2 py-1'>01</p>
            </div>

      </div>

      <div className='flex flex-col gap-4 '>
        <h1 className='font-bold text-xl'>{title}</h1>
        <p className='text-sm leading-2 font-bold'>{desc}</p>

      </div>
    </div>
  )
}

export default ServiceCard
