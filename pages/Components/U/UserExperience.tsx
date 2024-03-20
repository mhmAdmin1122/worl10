import React from 'react'
import ProgressBar from '../P/ProgressBar'
import CountingAnimation from '../C/CountingAnimation'

const UserExperience = () => {
  return (
    <div className='flex h-[650px] justify-center gap-4'>
      <div className="h-fit w-[40%] bg-[#f7f5f8] px-[50px] py-[40px] flex flex-col gap-4 ">
        <h1 className='text-[24px] text-black font-semibold'>My Experiences</h1>
        <div className="">
            <h2 className='text-[16px] text-black font-medium'>Softten (2015 - 2018)</h2>
            <h2 className='text-[18px] text-[#cb81fa] font-semibold'>IT Expert</h2>
            <p className='text-gray-700 pt-2'>Tincidunt eget semper nec quam. Sed hendrerit. Morbi ac felis. Nuncn egestas augue at pellentesque laoreet felis eros vehicula lealesuaelitk leo quis pede. Donec interdum.</p>
        </div>

        <div className="">
            <h2 className='text-[16px] text-black font-medium'>Softten (2015 - 2018)</h2>
            <h2 className='text-[18px] text-[#cb81fa] font-semibold'>IT Expert</h2>
            <p className='text-gray-700 pt-2'>Tincidunt eget semper nec quam. Sed hendrerit. Morbi ac felis. Nuncn egestas augue at pellentesque laoreet felis eros vehicula lealesuaelitk leo quis pede. Donec interdum.</p>
        </div>

      </div>
      <div className="h-fit w-[40%] bg-[#f7f5f8] px-[50px] py-[40px]">
        <h2 className='text-[30px] text-black font-semibold pb-7'>My Professional</h2>
        <div className="flex flex-col gap-4">
        
        <div className="">
            <div className="flex justify-between pb-2">
                <h2 className='text-black font-semibold'>Web Development</h2>
                <div className='text-black font-semibold flex'><CountingAnimation  targetNumber={75}/><span>%</span></div>
            </div>
            <div className=""><ProgressBar percentage={75} /></div>
        </div>

        <div className="">
            <div className="flex justify-between pb-2">
                <h2 className='text-black font-semibold'>It solution</h2>
                <div className='text-black font-semibold flex'><CountingAnimation  targetNumber={95}/><span>%</span></div>
            </div>
            <div className=""><ProgressBar percentage={95} /></div>
        </div>

        <div className="">
            <div className="flex justify-between pb-2">
                <h2 className='text-black font-semibold'>Web development</h2>
                <div className='text-black font-semibold flex'><CountingAnimation  targetNumber={75}/><span>%</span></div>
            </div>
            <div className=""><ProgressBar percentage={75} /></div>
        </div>

        <div className="">
            <div className="flex justify-between pb-2">
                <h2 className='text-black font-semibold'>Data Research</h2>
                <div className='text-black font-semibold flex'><CountingAnimation  targetNumber={60}/><span>%</span></div>
            </div>
            <div className=""><ProgressBar percentage={60} /></div>
        </div>

        <div className="">
            <div className="flex justify-between pb-2">
                <h2 className='text-black font-semibold'>Web Development</h2>
                <div className='text-black font-semibold flex'><CountingAnimation  targetNumber={75}/><span>%</span></div>
            </div>
            <div className=""><ProgressBar percentage={75} /></div>
        </div>

        <div className="">
            <div className="flex justify-between pb-2">
                <h2 className='text-black font-semibold'>It solution</h2>
                <div className='text-black font-semibold flex'><CountingAnimation  targetNumber={95}/><span>%</span></div>
            </div>
            <div className=""><ProgressBar percentage={95} /></div>
        </div>

        <div className="">
            <div className="flex justify-between pb-2">
                <h2 className='text-black font-semibold'>Web development</h2>
                <div className='text-black font-semibold flex'><CountingAnimation  targetNumber={75}/><span>%</span></div>
            </div>
            <div className=""><ProgressBar percentage={75} /></div>
        </div>

        <div className="">
            <div className="flex justify-between pb-2">
                <h2 className='text-black font-semibold'>Data Research</h2>
                <div className='text-black font-semibold flex'><CountingAnimation  targetNumber={60}/><span>%</span></div>
            </div>
            <div className=""><ProgressBar percentage={60} /></div>
        </div>
        
      </div>
      </div>
    </div>
  )
}

export default UserExperience
