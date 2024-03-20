import Image from 'next/image'
import React from 'react'
import projectimg from '@/public/img/project-single.webp'
import { FaCheck } from 'react-icons/fa'

const ProjectDetailDescSec = () => {
  return (
    <div className='flex justify-center gap-8 py-12'>
      <div className="">
        <div className="h-[300px] w-[750px]">
            <Image src={projectimg} width={750} height={420} alt={'img'} />
        </div>
        <div className="">
            <h2 className='text-[38px] text-black font-medium py-3'>Project desception</h2>
            <p className='text-[18px] text-gray-500 font-medium w-[750px]'>Cras varius. Donec vitae orci sed dolor rutrum auctor. Fusce egestas elit eget lorem. Suspendisse nisl elit, rhoncus eementum acondimentum eget, diam. Nam at tortor in tellus interdum sagitli-quam lobortis. Donec orci lectus, aliquam ut, faucibus smod id, nulla. Curabitur blandit mollis lacus. Nam adipiscing. Vestibulum eu odio. Vivamus laoreet</p>
        </div>
        <div className="pl-6">
            <h2 className='text-[20px] text-black font-medium py-6'>Challenges During The Project Time</h2>
            <p className='text-[18px] text-gray-500 font-medium w-[750px]'>Maecenas vestibulum mollis diam. Pellentesque ut neque. Pellentesque habitant morbi tristique ctus et nalesuada fames ac turpis egestas. In dui magna, posuere eget, vestibulum et tempor auctor sto. In ac felis quis rtor malesuada pretium. Pellentesque auctor neque nec urna. Proin sapien ipsum,rta a auctor quis, euismo morbi tristique senectus</p>
            <ul className='flex gap-[140px] pl-4 pt-4'>
                <div className="text-gray-500 text-[16px] font-medium">
                   <div className="flex gap-4 items-center">
                    <h2 className='text-[#cb81fa] text-[18px]'><FaCheck /></h2>
                    <li>Lorem available market</li>
                   </div>
                   <div className="flex gap-4 items-center">
                    <h2 className='text-[#cb81fa] text-[18px]'><FaCheck /></h2>
                    <li>injected humour words which</li>
                   </div>
                   <div className="flex gap-4 items-center">
                    <h2 className='text-[#cb81fa] text-[18px]'><FaCheck /></h2>
                    <li>Available market</li>
                   </div>
                </div>

                <div className="text-gray-500 text-[16px] font-medium">
                   <div className="flex gap-4 items-center">
                    <h2 className='text-[#cb81fa] text-[18px]'><FaCheck /></h2>
                    <li>Lorem available market</li>
                   </div>
                   <div className="flex gap-4 items-center">
                    <h2 className='text-[#cb81fa] text-[18px]'><FaCheck /></h2>
                    <li>injected humour words which</li>
                   </div>
                   <div className="flex gap-4 items-center">
                    <h2 className='text-[#cb81fa] text-[18px]'><FaCheck /></h2>
                    <li>Available market</li>
                   </div>
                </div>
                
                
            </ul>
        </div>

        <div className="pl-6 pt-8">
            <h2 className='text-[20px] text-black font-medium py-6'>Challenges During The Project Time</h2>
            <p className='text-[18px] text-gray-500 font-medium w-[750px]'>Maecenas vestibulum mollis diam. Pellentesque ut neque. Pellentesque habitant morbi tristique ctus et nalesuada fames ac turpis egestas. In dui magna, posuere eget, vestibulum et tempor auctor sto. In ac felis quis rtor malesuada pretium. Pellentesque auctor neque nec urna. Proin sapien ipsum,rta a auctor quis, euismo morbi tristique senectus</p>
            <ul className='flex gap-[140px] pl-4 pt-4'>
                <div className="text-gray-500 text-[16px] font-medium">
                   <div className="flex gap-4 items-center">
                    <h2 className='text-[#cb81fa] text-[18px]'><FaCheck /></h2>
                    <li>Lorem available market</li>
                   </div>
                   <div className="flex gap-4 items-center">
                    <h2 className='text-[#cb81fa] text-[18px]'><FaCheck /></h2>
                    <li>injected humour words which</li>
                   </div>
                   <div className="flex gap-4 items-center">
                    <h2 className='text-[#cb81fa] text-[18px]'><FaCheck /></h2>
                    <li>Available market</li>
                   </div>
                </div>

                <div className="text-gray-500 text-[16px] font-medium">
                   <div className="flex gap-4 items-center">
                    <h2 className='text-[#cb81fa] text-[18px]'><FaCheck /></h2>
                    <li>Lorem available market</li>
                   </div>
                   <div className="flex gap-4 items-center">
                    <h2 className='text-[#cb81fa] text-[18px]'><FaCheck /></h2>
                    <li>injected humour words which</li>
                   </div>
                   <div className="flex gap-4 items-center">
                    <h2 className='text-[#cb81fa] text-[18px]'><FaCheck /></h2>
                    <li>Available market</li>
                   </div>
                </div>
                
                
            </ul>
        </div>
      </div>
      <div className="bg-[#fafafa] flex flex-col gap-4 p-12 h-fit">
        <div className="">
            <h2 className='text-black text-[18px] font-medium'>Project</h2>
            <h2 className='text-gray-600 text-[18px] font-medium'>It Solution Service</h2>
        </div>
        <div className="">
            <h2 className='text-black text-[18px] font-medium'>Client</h2>
            <h2 className='text-gray-600 text-[18px] font-medium'>Tecom Company</h2>
        </div>
        <div className="">
            <h2 className='text-black text-[18px] font-medium'>Year</h2>
            <h2 className='text-gray-600 text-[18px] font-medium'>May 2023 - Jun 2021</h2>
        </div>
        <div className="">
            <h2 className='text-black text-[18px] font-medium'>Price Value</h2>
            <h2 className='text-gray-600 text-[18px] font-medium'>$2,5000</h2>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetailDescSec
