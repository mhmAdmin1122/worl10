import Image from 'next/image'
import React from 'react'
import blogimg1 from '@/public/img/blog1.webp'
import blogimg2 from '@/public/img/blog2.webp'
import blogimg3 from '@/public/img/blog3.webp'
import {FaRegCalendarDays, FaUser } from 'react-icons/fa6'
import { FaArrowRight } from 'react-icons/fa'

const HomeSection11 = () => {
  return (
    <div>
      <div>
      <div className='flex items-center justify-center py-12'>
      <div className="w-[600px] flex flex-col items-center gap-1">
        <div className="flex gap-2 items-center">
          <h2 className="w-[60px] h-[2px] bg-blue-500"></h2>
          <h2 className="text-blue-500 text-[20px] font-semibold">blog Post</h2>
          <h2 className="w-[60px] h-[2px] bg-blue-500"></h2>
        </div>
        <h2 className="text-[40px] text-[#ff6a00] font-bold">
        Read Our Latest Tips &Tricks
        </h2>
        <p className="text-[20px] text-[#747474] text-center">
        Dcidunt eget semper nec quam. Sed hendrerit. acfelis Nunc egestas augue atpellentesque laoreet
        </p>
      </div>
      </div>
      <div className="flex justify-center gap-8">
      <div className='w-[25%]'>
        <div>
            <Image src={blogimg1} alt={'logo'} />
        </div>
        <div className='mx-6 bg-[#edd4fe] pb-9 relative bottom-11'>
            <div className='flex gap-2 bg-[#cb81fa] py-2 w-full items-center justify-center mb-3'>
                <div className='flex gap-1 items-center'><span><FaUser /></span>
                <h2 className='text-[18px] font-semibold text-black'>By Admin</h2></div>
                <div  className='flex gap-1 items-center'>
                <span className='flex gap-1'><FaRegCalendarDays /></span>
                <h2 className='text-[18px] font-semibold text-black'>25 May 2021</h2>
                </div>
            </div>
            <div className='flex flex-col gap-3 '>
                <h2 className='text-black font-semibold px-4 text-[24px] leading-7'>Stock Exchange Market Foreca 2021-2023</h2>
                <p className='text-[18px] font-semibold px-4 text-gray-500'>Duis leo. Sed fringilla mauris iamet nibh. odales sagittis magonsequat letendum sodales augue velit</p>
                <div className='h-[40px] w-[40px] rounded-full bg-[#cb81fa] text-black flex items-center justify-center absolute bottom-[-20px] left-[45%]'><FaArrowRight /></div>
            </div>
        </div>
      </div>

      <div className='w-[25%]'>
        <div>
            <Image src={blogimg2} alt={'logo'} />
        </div>
        <div className='mx-6 bg-[#edd4fe] pb-9 relative bottom-11'>
            <div className='flex gap-2 bg-[#cb81fa] py-2 w-full items-center justify-center mb-3'>
                <div className='flex gap-1 items-center'><span><FaUser /></span>
                <h2 className='text-[18px] font-semibold text-black'>By Admin</h2></div>
                <div  className='flex gap-1 items-center'>
                <span className='flex gap-1'><FaRegCalendarDays /></span>
                <h2 className='text-[18px] font-semibold text-black'>25 May 2021</h2>
                </div>
            </div>
            <div className='flex flex-col gap-3 '>
                <h2 className='text-black font-semibold px-4 text-[24px] leading-7'>Stock Exchange Market Foreca 2021-2023</h2>
                <p className='text-[18px] font-semibold px-4 text-gray-500'>Duis leo. Sed fringilla mauris iamet nibh. odales sagittis magonsequat letendum sodales augue velit</p>
                <div className='h-[40px] w-[40px] rounded-full bg-[#cb81fa] text-black flex items-center justify-center absolute bottom-[-20px] left-[45%]'><FaArrowRight /></div>
            </div>
        </div>
      </div>

      <div className='w-[25%]'>
        <div>
            <Image src={blogimg3} alt={'logo'} />
        </div>
        <div className='mx-6 bg-[#edd4fe] pb-9 relative bottom-11'>
            <div className='flex gap-2 bg-[#cb81fa] py-2 w-full items-center justify-center mb-3'>
                <div className='flex gap-1 items-center'><span><FaUser /></span>
                <h2 className='text-[18px] font-semibold text-black'>By Admin</h2></div>
                <div  className='flex gap-1 items-center'>
                <span className='flex gap-1'><FaRegCalendarDays /></span>
                <h2 className='text-[18px] font-semibold text-black'>25 May 2021</h2>
                </div>
            </div>
            <div className='flex flex-col gap-3 '>
                <h2 className='text-black font-semibold px-4 text-[24px] leading-7'>Stock Exchange Market Foreca 2021-2023</h2>
                <p className='text-[18px] font-semibold px-4 text-gray-500'>Duis leo. Sed fringilla mauris iamet nibh. odales sagittis magonsequat letendum sodales augue velit</p>
                <div className='h-[40px] w-[40px] rounded-full bg-[#cb81fa] text-black flex items-center justify-center absolute bottom-[-20px] left-[45%]'><FaArrowRight /></div>
            </div>
        </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default HomeSection11
