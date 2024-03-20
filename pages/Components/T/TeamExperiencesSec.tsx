import React from 'react'
import CountingAnimation from '../C/CountingAnimation';
import { FaPlay } from 'react-icons/fa';

const TeamExperiencesSec = () => {
  return (
    <div className='team-Experences-page flex flex-col gap-8 justify-center'>
      <div className="pl-[120px]">
        <h1 className='text-[40px] font-bold text-white w-[420px]'>We Care About Your Important Things</h1>
      </div>
      
        <div className="flex justify-around px-[60px]">
        <div className="pulse">
            <span><FaPlay /></span>
          </div>

          <div className="">
            <div className="flex gap-1 text-white">
              <div className="text-[40px] font-semibold">
                <CountingAnimation targetNumber={20} />
              </div>
              <span className="flex items-end text-[20px] mb-2">M</span>
            </div>
            <h2 className="text-[20px] font-semibold text-white">
              Experiences
            </h2>
          </div>

          <div className="">
            <div className="flex gap-1 text-white">
              <div className="text-[40px] font-semibold">
                <CountingAnimation targetNumber={41} />
              </div>
              <span className="flex items-end text-[20px] mb-2">M</span>
            </div>
            <h2 className="text-[20px] font-semibold text-white">
            Happy client
            </h2>
          </div>

          <div className="">
            <div className="flex gap-1 text-white">
            <div className="text-[40px] font-semibold">
              <CountingAnimation targetNumber={40} />
            </div>
            <div className="flex gap-1">
              <span className="flex items-end text-[20px] mb-2">M</span>
            </div>
            </div>
            <h2 className="text-[20px] font-semibold text-white">
            Project done
            </h2>
          </div>

          <div className="">
            <div className="flex gap-1 text-white">
            <div className="text-[40px] font-semibold">
              <CountingAnimation targetNumber={250} />
            </div>
            <div className="flex gap-1">
              <span className="flex items-end text-[20px] mb-2">M</span>
            </div>
            </div>
            <h2 className="text-[20px] font-semibold text-white">
            Our service area
            </h2>
          </div>
        </div>
        
    </div>
  )
}

export default TeamExperiencesSec;
