import React from 'react'
// import Hero from './component/Hero'
import Heroo from './component/Heroo'
import Nav from './component/Nav'

function App() {
  return (
    <div className='relative  min-h-screen bg-black text-white overflow-hidden'>
     <div className='absolute inset-0 px-20 py-10 bg-gradient-to-br from-purple-600/20 via-transparent to-blue-600/20 '>
     <div className=''>
<Nav />
      <Heroo />
     </div>
      
      
     </div>
         </div>
  )
}

export default App
