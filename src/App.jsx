import React from 'react'
import Cases from './component/Cases'
import Heroo from './component/Heroo'
import Nav from './component/Nav'
import Services from './component/Services'
import Section3 from './component/Section3.jsx'
// import Cases from './com'
function App() {
  return (
   <div className='bg-black text-white  flex flex-col gap-10'>
      <div className='relative  min-h-screen bg-black text-white overflow-hidden'>
     <div className='absolute inset-0 px-20 py-10 bg-gradient-to-br from-purple-600/20 via-transparent to-blue-600/20 '>
     <div className='flex flex-col gap-4'>
      <Nav />
      <Heroo />
        </div>       
     </div>
         </div>
         <div className='px-20 '>
          <Services />
          <Section3 />
          <Cases />
         </div>

   </div>
   
  )
}

export default App
