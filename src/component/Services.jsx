import React from 'react'
import { PiSpeakerHighFill } from "react-icons/pi";
import ServiceCard from './ServiceCard'
import { GiHeavyTimer } from "react-icons/gi";
import { GiFlowerTwirl } from "react-icons/gi";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import Img3 from '../assets/Image/Img3.jpg'

const servicesList = [
    {icon:<PiSpeakerHighFill />, title:"EXPERTISE", desc:"Our team consists of professionals who have many years of experience in the field of online marketing. We understand all the subtieties and trens of this rapidly changing world"},
    {icon:<GiFlowerTwirl />, title:"RANGE OF SERVICES", desc:"DigitalPro offer a full range of online advertising services so you can find everything you need in one place"},
    {icon:<GiHeavyTimer />, title:"EFFECTIVENESS", desc:"Our goal is not just to advertise, but to achieve concrete results We work on your success and are confident in achieving your goals."},
    {icon:<MdOutlineConnectWithoutContact />, title:"COMMUNITY OF CLIENTS", desc:"We are creating a true community of clients, where the exchange of experience and knowledge contributes to mutual growth and development"},
]

function Services() {
  return (
    <div
    className='relative bg-[url("/images/Bg4.jpg")] bg-cover bg-center bg-no-repeat -mt-10'>
      <div className=''>

        <h1 className='text-7xl text-center mt-8 font-bold'>Digital <span className='
       block bg-gradient-to-r bg-clip-text text-transparent from-indigo-800 via-pink-200 to-pink-500 '>Pro </span></h1>

<div className='flex  md:gap-24'>
   
   <div className='w-4/10'>
    <img className='md:block hidden' src={Img3} alt="" />
</div>
    <div>
    {
        servicesList.map((serv)=>(
            <ServiceCard icon={serv.icon} title={serv.title} desc={serv.desc} />
        ))
    }
</div>



</div>



      </div>
    </div>
  )
}

export default Services
