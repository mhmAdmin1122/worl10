import React from 'react'
import projectimg from '@/public/img/project-single.webp'
import Image from 'next/image'
import img1 from '@/public/img/1 (2).webp'
import {  FaAngleLeft, FaAngleRight, FaCaretRight, FaComment, FaFolderOpen, FaSearch, FaUser } from 'react-icons/fa'
import { FaCalendarDays } from 'react-icons/fa6'

const BlogPostSec = () => {
  return (
    <div className='flex justify-center gap-8 py-12'>
      
      <div className="flex gap-8 flex-col">
      <div className="flex flex-col gap-2">
        <div className="h-[300px] w-[750px]">
            <Image src={projectimg} width={750} height={420} alt={'img'} />
        </div>
            <div><h2 className='text-[38px] text-black hover:text-[#cb81fa]  transition duration-700 font-medium py-3'>Maecenas Tempus Dellus Eget Condim</h2></div>
            <div className='flex gap-4'>
              <div className='flex gap-2 items-center text-[#cb81fa]'><span><FaUser /></span><span className='text-[18px] font-semibold text-gray-500'>By Admin</span></div>
              <div className='flex gap-2 items-center text-[#cb81fa]'><FaCalendarDays /><span className='text-[18px] font-semibold text-gray-500'>19 March 2024</span></div>
              <div className='flex gap-2 items-center text-[#cb81fa]'><FaComment /><span className='text-[18px] font-semibold text-gray-500'>22 Comment</span></div>
              <div className='flex gap-2 items-center text-[#cb81fa]'><FaFolderOpen /><span className='text-[18px] font-semibold text-gray-500'>It Solution</span></div>
            </div>
            <div className=""><p className='text-[18px] text-gray-500 font-normal w-[750px]'>actually choosing a strategy entails making decisions that explicitly cut off possibilities and options. An executive may well fear that getting those decisions wrong</p></div>
            <div className='readmorebtn flex flex-col cursor-pointer w-fit hover:text-[#cb81fa] text-gray-700 transition duration-500'><div className="flex items-center"><button className='text-[18px]  font-bold'>Read More</button> <span className='text-[22px] '><FaCaretRight /></span></div>
            <div className='readmoreline h-[2px] w-0 mt-[-4px] bg-[#cb81fa] mb-5'></div>
            </div>
            <hr />
        </div>

        <div className="flex flex-col gap-2">
        <div className="h-[300px] w-[750px]">
            <Image src={projectimg} width={750} height={420} alt={'img'} />
        </div>
            <div><h2 className='text-[38px] text-black hover:text-[#cb81fa]  transition duration-700 font-medium py-3'>Maecenas Tempus Dellus Eget Condim</h2></div>
            <div className='flex gap-4'>
              <div className='flex gap-2 items-center text-[#cb81fa]'><span><FaUser /></span><span className='text-[18px] font-semibold text-gray-500'>By Admin</span></div>
              <div className='flex gap-2 items-center text-[#cb81fa]'><FaCalendarDays /><span className='text-[18px] font-semibold text-gray-500'>19 March 2024</span></div>
              <div className='flex gap-2 items-center text-[#cb81fa]'><FaComment /><span className='text-[18px] font-semibold text-gray-500'>22 Comment</span></div>
              <div className='flex gap-2 items-center text-[#cb81fa]'><FaFolderOpen /><span className='text-[18px] font-semibold text-gray-500'>It Solution</span></div>
            </div>
            <div className=""><p className='text-[18px] text-gray-500 font-normal w-[750px]'>actually choosing a strategy entails making decisions that explicitly cut off possibilities and options. An executive may well fear that getting those decisions wrong</p></div>
            <div className='readmorebtn flex flex-col cursor-pointer w-fit hover:text-[#cb81fa] text-gray-700 transition duration-500'><div className="flex items-center"><button className='text-[18px]  font-bold'>Read More</button> <span className='text-[22px] '><FaCaretRight /></span></div>
            <div className='readmoreline h-[2px] w-0 mt-[-4px] bg-[#cb81fa] mb-5'></div></div>
            <hr />
        </div>

        <div className="flex flex-col gap-2">
        <div className="h-[300px] w-[750px]">
            <Image src={projectimg} width={750} height={420} alt={'img'} />
        </div>
            <div><h2 className='text-[38px] text-black hover:text-[#cb81fa]  transition duration-700 font-medium py-3'>Maecenas Tempus Dellus Eget Condim</h2></div>
            <div className='flex gap-4'>
              <div className='flex gap-2 items-center text-[#cb81fa]'><span><FaUser /></span><span className='text-[18px] font-semibold text-gray-500'>By Admin</span></div>
              <div className='flex gap-2 items-center text-[#cb81fa]'><FaCalendarDays /><span className='text-[18px] font-semibold text-gray-500'>19 March 2024</span></div>
              <div className='flex gap-2 items-center text-[#cb81fa]'><FaComment /><span className='text-[18px] font-semibold text-gray-500'>22 Comment</span></div>
              <div className='flex gap-2 items-center text-[#cb81fa]'><FaFolderOpen /><span className='text-[18px] font-semibold text-gray-500'>It Solution</span></div>
            </div>
            <div className=""><p className='text-[18px] text-gray-500 font-normal w-[750px]'>actually choosing a strategy entails making decisions that explicitly cut off possibilities and options. An executive may well fear that getting those decisions wrong</p></div>
            <div className='readmorebtn flex flex-col cursor-pointer w-fit hover:text-[#cb81fa] text-gray-700 transition duration-500'><div className="flex items-center"><button className='text-[18px]  font-bold'>Read More</button> <span className='text-[22px] '><FaCaretRight /></span></div>
            <div className='readmoreline h-[2px] w-0 mt-[-4px] bg-[#cb81fa] mb-5'></div></div>
        <hr />
        </div>
        <div className='flex gap-2'>
              <div className="border border-gray-500 text-gray-500 hover:bg-[#cb81fa] hover:border-[#cb81fa] rounded-full p-3 w-fit px-[14px] text-[20px]"><FaAngleRight /></div>
              <div className="border border-gray-500 text-gray-500 rounded-full p-2 px-[18px] w-fit text-[20px] hover:bg-[#cb81fa] hover:border-[#cb81fa]">1</div>
              <div className="border border-gray-500 text-gray-500 rounded-full p-2 px-[18px] w-fit text-[20px] hover:bg-[#cb81fa] hover:border-[#cb81fa]">2</div>
              <div className="border border-gray-500 text-gray-500 rounded-full p-2 px-[18px] w-fit text-[20px] hover:bg-[#cb81fa] hover:border-[#cb81fa]">3</div>
              <div className="border border-gray-500 text-gray-500 rounded-full p-3 px-[14px] w-fit text-[20px] hover:bg-[#cb81fa] hover:border-[#cb81fa]"><FaAngleLeft /></div>
            </div>
      </div>

       <div className="flex flex-col gap-12">
       <div className="bg-[#fafafa] shadow-md shadow-gray-500 flex flex-col gap-4 p-8 h-fit w-[350px]">
      <div className="flex flex-col gap-3">
        <h2 className='text-[22px] text-black font-medium'>Search Keyword</h2>
        <div className="bg-gray-300 w-full h-[2px]">
          <div className="bg-[#cb81fa] w-[30%] h-[2px]"></div>
        </div>
        <div className="border-[1px] border-gray-300 flex items-center p-3 px-5 justify-between mt-4">
          <input className='outline-none' type="text" placeholder='Key word'/>
          <div className=''><FaSearch /></div>
        </div>
      </div>
      </div>

      <div className="bg-[#fafafa] shadow-md shadow-gray-500 flex flex-col gap-4 p-8 h-fit w-[350px] ">
        <h2 className='text-[22px] text-black font-medium'>Catagory</h2>
        <div className="bg-gray-300 w-full h-[2px]">
          <div className="bg-[#cb81fa] w-[30%] h-[2px]"></div>
        </div>
        <div className="">
          <div className="text-gray-600 font-semibold pt-2 flex gap-2 items-center text-[18px] hover:text-[#cb81fa] transition duration-700"><FaFolderOpen /><span>Digital marketing</span></div> <hr className='mt-3'/>
          <div className="text-gray-600 font-semibold pt-2 flex gap-2 items-center text-[18px] hover:text-[#cb81fa] transition duration-700"><FaFolderOpen /><span>Machine learning</span></div> <hr className='mt-3'/>
          <div className="text-gray-600 font-semibold pt-2 flex gap-2 items-center text-[18px] hover:text-[#cb81fa] transition duration-700"><FaFolderOpen /><span>It management</span></div> <hr className='mt-3'/>
          <div className="text-gray-600 font-semibold pt-2 flex gap-2 items-center text-[18px] hover:text-[#cb81fa] transition duration-700"><FaFolderOpen /><span>Loan & Insurance</span></div> <hr className='mt-3'/>
          <div className="text-gray-600 font-semibold pt-2 flex gap-2 items-center text-[18px] hover:text-[#cb81fa] transition duration-700"><FaFolderOpen /><span>Web Design</span></div> <hr className='mt-3'/>
          <div className="text-gray-600 font-semibold pt-2 flex gap-2 items-center text-[18px] hover:text-[#cb81fa] transition duration-700"><FaFolderOpen /><span>Digital Marketing</span></div> <hr className='mt-3'/>
          <div className="text-gray-600 font-semibold pt-2 flex gap-2 items-center text-[18px] hover:text-[#cb81fa] transition duration-700"><FaFolderOpen /><span>IT Consultancy</span></div> <hr className='mt-3'/>    
        </div>

      </div>

      <div className="bg-[#fafafa] shadow-md shadow-gray-500 flex flex-col gap-4 p-8 h-fit w-[350px]">
      <div className="flex flex-col gap-3">
        <h2 className='text-[22px] text-black font-medium'>Recent News</h2>
        <div className="bg-gray-300 w-full h-[2px]">
          <div className="bg-[#cb81fa] w-[30%] h-[2px]"></div>
        </div>
        <div className="flex flex-col gap-5">
        <div className="flex gap-5">
          <div className="">
            <Image src={img1} width={90} height={90} alt={''} />
          </div>
          <div className="">
            <h2 className='text-[15px] pb-1 hover:text-[#cb81fa] transition duration-300 cursor-pointer'>Social Media For Promote Business.</h2>
            <div className="flex gap-2 items-center">
              <span className='text-[#cb81fa]'><FaCalendarDays /></span>
              <span className='text-gray-600 text-[14px] font-medium'>16 March</span>
            </div>
          </div>
        </div>

        <div className="flex gap-5">
          <div className="">
            <Image src={img1} width={90} height={90} alt={''} />
          </div>
          <div className="">
            <h2 className='text-[15px] pb-1 hover:text-[#cb81fa] transition duration-300 cursor-pointer'>Marketing For Base market watch</h2>
            <div className="flex gap-2 items-center">
              <span className='text-[#cb81fa]'><FaCalendarDays /></span>
              <span className='text-gray-600 text-[14px] font-medium'>16 March</span>
            </div>
          </div>
        </div>

        <div className="flex gap-5">
          <div className="">
            <Image src={img1} width={90} height={90} alt={''} />
          </div>
          <div className="">
            <h2 className='text-[15px] pb-1 hover:text-[#cb81fa] transition duration-300 cursor-pointer'>Condtum Integer urna at faucibus</h2>
            <div className="flex gap-2 items-center">
              <span className='text-[#cb81fa]'><FaCalendarDays /></span>
              <span className='text-gray-600 text-[14px] font-medium'>16 March</span>
            </div>
          </div>
        </div>
        </div>
      </div>
      </div>

      <div className="bg-[#fafafa] shadow-md shadow-gray-500 flex flex-col gap-4 p-8 h-fit w-[350px]">
      <div className="flex flex-col gap-3">
        <h2 className='text-[22px] text-black font-medium'>Tags</h2>
        <div className="bg-gray-300 w-full h-[2px]">
          <div className="bg-[#cb81fa] w-[30%] h-[2px]"></div>
        </div>     
      </div>
      <div className="">
        <div className="flex justify-between">
        <div className="bg-[#edd4fe] p-2 rounded-full px-4 w-fit text-gray-500 text-[15px]">
          Marketing
        </div>
        <div className="bg-[#edd4fe] p-2 rounded-full px-4 w-fit text-gray-500">
          Learn
        </div>
        <div className="bg-[#edd4fe] p-2 rounded-full px-4 w-fit text-gray-500">
          Business
        </div>        
        </div>

       <div className="flex justify-between py-4">
       <div className="bg-[#edd4fe] p-2 rounded-full px-4 w-fit text-gray-500">
          Portfolio
        </div>
        <div className="bg-[#edd4fe] p-2 rounded-full px-4 w-fit text-gray-500">
          Project
        </div>
        <div className="bg-[#edd4fe] p-2 rounded-full px-4 w-fit text-gray-500">
        Personal
        </div>
       </div>

       <div className='flex gap-5'> <div className="bg-[#edd4fe] p-2 rounded-full px-4 w-fit text-gray-500">
          Personal
        </div>
        <div className="bg-[#edd4fe] p-2 rounded-full px-6  w-fit text-gray-500">
          Art
        </div></div>
      </div>
      </div>

       </div>

    </div>
  )
}

export default BlogPostSec
