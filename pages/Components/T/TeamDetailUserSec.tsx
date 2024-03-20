import Image from 'next/image'
import React from 'react'
import UseImage from '@/public/img/team.jpg'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa6'

const TeamDetailUserSec = () => {
  return (
    <div className='flex justify-evenly px-[60px] h-[580px] pt-[50px]'>
      <div className="w-[460px] h-[460px]">
        <Image src={UseImage} alt={'logo'} />
      </div>
      <div className=" flex flex-col gap-5 py-6">
        <div className="">
            <h2 className='text-[30px] '>Muhammad Waris</h2>
            <h2 className='text-[18px] text-[#cb81fa]'>Web Developer</h2>
        </div>
        <div className="text-gray-600 font-medium w-[520px]">
            <p>Mauris turpis nunc, blandit et volutpat molestie porta ut, ligula. Fusce pharetra convallis urna. Quisque ut nisi. Donec mi odio fauciberisque quis, convallis in nisi. Suspendisse non nisl sit amet velit hendrerit tm. Ut leo. a nisl id ante tempus hendrerit.</p>
        </div>
        <div className="flex flex-col gap-2">
            <div className="">
                <div className='flex gap-1' ><span className='font-bold text-gray-700'>Phone:</span><h2 className='text-gray-700 font-medium'>+923-246-920-609</h2></div>
            </div>
            <div className="">
                <div className='flex gap-1'><span className='font-bold text-gray-700'>Email:</span><h2 className='text-gray-700 font-medium'>Example@gamil.com</h2></div>
            </div>
            <div className="">
            <div className='flex gap-1'><span className='font-bold text-gray-700'>Website:</span><h2 className='text-gray-700 font-medium'>startupmaxim.com</h2></div>
            </div>
            <div className="">
            <div className='flex gap-1'><span className='font-bold text-gray-700'>Experiences:</span><h2 className='text-gray-700 font-medium   '>04 Months</h2></div>
            </div>
        </div>
        <div className="flex gap-3">
            <div className="w-[40px] h-[40px] border-[2px] border-[#cb81fa] rounded-full flex items-center justify-center text-[20px] text-[#316FF6] cursor-pointer"><FaFacebook /></div>
            <div className="w-[40px] h-[40px] border-[2px] border-[#cb81fa] rounded-full flex items-center justify-center text-[20px] text-[#1DA1F2] cursor-pointer"><FaTwitter /></div>
            <div className="w-[40px] h-[40px] border-[2px] border-[#cb81fa] rounded-full flex items-center justify-center text-[20px] text-[#fa7e1e] cursor-pointer "><FaInstagram /></div>
            <div className="w-[40px] h-[40px] border-[2px] border-[#cb81fa] rounded-full flex items-center justify-center text-[20px] text-[#CD201F] cursor-pointer"><FaYoutube /></div>
        </div>
     </div>
    </div>
  )
}

export default TeamDetailUserSec
