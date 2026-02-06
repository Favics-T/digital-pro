import React from 'react'
import Logo from './Logo'
import Section3Card from './Section3Card'

const list = [
  {num:'01', text: 'A', serv:"PROMOTING YOUR PERSONAL BRAND", desc:'We will help you become a recognizable expert in your field. We will take your personal brnd to the next level to the next level ensuring a positve reputation and audience trust.' },
  {num:'02', text: "B", serv:"PROMOTING ON SOCIAL MEDIA", desc:" we creating advertising strategies that will impress your audience on social media increase you influence by building a community of teams and attracting new clients"}, 
  {num:'03', text:"G", serv:"BUSINESS PROMOTION ON GOOGLE", desc:"Ensure your business is visible in the Google works. we will develop efficient campaigns for you to attract your target audience and boost your search engine ranking"}
]

function Section3() {
  return (
    <div className='md:px-20 md:mt-20 flex md:flex-reverse flex-col  md:py-10 py-3 gap-8  md:gap-20 items-center justify-center  '>
      <Logo />

        <div className=' w-full flex flex-col gap-10 '>
            <h1 className='font-bold md:text-6xl text-2xl'>SERVICES</h1>

            <div className='grid grid-cols-1 md:grid-cols-3  gap-4'>
              {
                list.map((list)=>(
                  <Section3Card key={list.name} serv={list.serv} num={list.num} letter={list.text} desc={list.desc} />
                ))
              }
            </div>
        </div>
      
    </div>
  )
}

export default Section3

// function Section3() {
//   return (
//     <div className='px-6 md:px-20 mt-10 md:mt-20 flex flex-col-reverse md:flex-row gap-10 md:gap-20 py-3 md:py-10'>
//       <Logo />

//       <div className='w-full flex flex-col gap-10'>
//         <h1 className='font-bold text-2xl md:text-6xl'>SERVICES</h1>

//         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
//           {list.map((list) => (
//             <Section3Card key={list.num} {...list} />
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

