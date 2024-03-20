import React from 'react'
import ProgressBar from '../P/ProgressBar';
import Image from 'next/image';
import progressbarimg1 from '@/public/img/img1.webp'
import progressbarimg2 from '@/public/img/img3.webp'
import CountingAnimation from '../C/CountingAnimation'

const HomeSection10 = () => {
  return (
    <div>
      <div className='flex items-center gap-12 bg-[#f9f9f9] h-[600px] '>
      <div className='flex flex-col px-14 gap-3 w-1/2'>
      <div className="w-[500px] flex flex-col gap-1">
        <div className="flex gap-2 items-center">
          <h2 className="text-blue-500 text-[20px] font-semibold">Professional Skill</h2>
          <h2 className="w-[60px] h-[2px] bg-blue-500"></h2>
        </div>
        <h2 className="text-[35px] text-[#ff6a00] font-bold">
        We have professional skilled
        </h2>
        <p className="text-[18px] font-semibold text-[#747474]">
        Maecenas tempus, tellus eget condime honcus sem quam semper libero sit amet adipiscingem neque
        </p>
      </div>
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
      </div>
      </div>
      <div className='progressimgs overflow-hidden flex gap-6 h-[600px] w-1/2 items-center justify-center'>
        <div><Image src={progressbarimg1} alt={'img'} width={210} height={200}/></div>
        <div className='flex flex-col gap-4'>
        <Image src={progressbarimg2} alt={'img'} width={220}/>
        <Image src={progressbarimg2} alt={'img'} width={220}/>
        </div>
      </div>
      </div>
    </div>
  )
}

export default HomeSection10;
