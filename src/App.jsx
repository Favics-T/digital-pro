import React from 'react'
import Cases from './component/Cases'
import Heroo from './component/Heroo'
import Nav from './component/Nav'
import Services from './component/Services'
import Section3 from './component/Section3.jsx'
import Cooperate from './component/Cooperate.jsx'
// import Cases from './com'
function App() {
  return (
   <div className='bg-black text-white  flex flex-col md:gap-10'>
      <div className='relative  min-h-screen bg-black text-white overflow-hidden'>
     <div className='absolute inset-0 md:px-20 md:py-10 py-4 px-6 bg-gradient-to-br from-purple-600/20 via-transparent to-blue-600/20 '>
     <div className='flex flex-col gap-4'>
      <Nav />
      <Heroo />
        </div>       
     </div>
         </div>
         <div className='md:px-20 px-6 '>
          <Services />
          <Section3 />
          <Cases />
          <Cooperate />
         </div>

   </div>
   
  )
}

export default App
