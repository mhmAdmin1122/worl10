import Image from 'next/image'
import React from 'react'
import youtubeLogo from '@/public/img/youtube.png'

const HomeSection6 = () => {
  return (
    <div className='h-[650px] bg-[#d09df1]'>
      <div className="flex flex-col py-10 gap-1 justify-center items-center">
        <div className="w-[670px] flex flex-col gap-1 justify-center items-center">
          <div className="flex gap-2 items-center">
            <h2 className="w-[40px] h-[2px] bg-white"></h2>
            <h2 className="text-white text-[20px] font-semibold">
            Work Process
            </h2>
            <h2 className="w-[40px] h-[2px] bg-white"></h2>
          </div>
          <h2 className="text-[40px] text-[#ff6a00] font-bold">How to work it</h2>
          <p className="text-[20px] text-[#747474] text-center">
            Dcidunt eget semper nec quam. Sed hendrerit. acfelis Nunc egestas
            augue atpellentesque laoreet
          </p>
        </div>
      </div>

      <div className='flex justify-center gap-[30px] px-[50px]'>

      <div className='homesection6div h-[200px] rounded-md w-[280px] bg-white'>
        <div className='h-[100px] bg-[#e4cff3] flex items-center justify-center w-[100px] rounded-full relative bottom-[50px] left-[90px]'>
          <div className='h-[80px] bg-[#d09ef1] flex items-center justify-center  w-[80px] rounded-full'>
            <div className='homesection6num h-[60px] flex bg-[#b551f3] items-center justify-center w-[60px] rounded-full'>
              <h2 className='flex items-center justify-center font-bold text-[40px] text-white'>01</h2>
            </div>
          </div>
        </div>
        <div className='relative bottom-[30px]'>
          <h2 className='text-[25px] text-[#151423] font-semibold text-center'>Select a project</h2>
          <p className='text-[20px] text-[#616161] font-semibold text-center'>Vestibulum ante ipsumusn eratultrices posu world</p>
        </div>

      </div>

      <div className='homesection6div h-[200px] rounded-md w-[280px] bg-white'>
        <div className='h-[100px] bg-[#e4cff3] flex items-center justify-center w-[100px] rounded-full relative bottom-[50px] left-[90px]'>
          <div className='h-[80px] bg-[#d09ef1] flex items-center justify-center  w-[80px] rounded-full'>
            <div className='homesection6num h-[60px] flex bg-[#b551f3] items-center justify-center w-[60px] rounded-full'>
              <h2 className='flex items-center justify-center font-bold text-[40px] text-white'>01</h2>
            </div>
          </div>
        </div>
        <div className='relative bottom-[30px]'>
          <h2 className='text-[25px] text-[#151423] font-semibold text-center'>Select a project</h2>
          <p className='text-[20px] text-[#616161] font-semibold text-center'>Vestibulum ante ipsumusn eratultrices posu world</p>
        </div>

      </div>

      <div className='homesection6div h-[200px] rounded-md w-[280px] bg-white'>
        <div className='h-[100px] bg-[#e4cff3] flex items-center justify-center w-[100px] rounded-full relative bottom-[50px] left-[90px]'>
          <div className='h-[80px] bg-[#d09ef1] flex items-center justify-center  w-[80px] rounded-full'>
            <div className='homesection6num h-[60px] flex bg-[#b551f3] items-center justify-center w-[60px] rounded-full'>
              <h2 className='flex items-center justify-center font-bold text-[40px] text-white'>01</h2>
            </div>
          </div>
        </div>
        <div className='relative bottom-[30px]'>
          <h2 className='text-[25px] text-[#151423] font-semibold text-center'>Select a project</h2>
          <p className='text-[20px] text-[#616161] font-semibold text-center'>Vestibulum ante ipsumusn eratultrices posu world</p>
        </div>

      </div>

      <div className='homesection6div h-[200px] rounded-md w-[280px] bg-white'>
        <div className='h-[100px] bg-[#e4cff3] flex items-center justify-center w-[100px] rounded-full relative bottom-[50px] left-[90px]'>
          <div className='h-[80px] bg-[#d09ef1] flex items-center justify-center  w-[80px] rounded-full'>
            <div className='homesection6num h-[60px] flex bg-[#b551f3] items-center justify-center w-[60px] rounded-full'>
              <h2 className='flex items-center justify-center font-bold text-[40px] text-white'>01</h2>
            </div>
          </div>
        </div>
        <div className='relative bottom-[30px]'>
          <h2 className='text-[25px] text-[#151423] font-semibold text-center'>Select a project</h2>
          <p className='text-[20px] text-[#616161] font-semibold text-center'>Vestibulum ante ipsumusn eratultrices posu world</p>
        </div>

      </div>

      </div>

      <div className="flex justify-center gap-[100px] pt-[80px]">
        <div className="youtubelogo">
          <Image className='image' src={youtubeLogo} alt={''} height={200} width={200}/>
        </div>
        <div className="youtubelogo">
          <Image className='image' src={youtubeLogo} alt={''} height={200} width={200}/>
        </div>
        <div className="youtubelogo">
          <Image className='image' src={youtubeLogo} alt={''} height={200} width={200}/>
        </div>
        <div className="youtubelogo">
          <Image className='image' src={youtubeLogo} alt={''} height={200} width={200}/>
        </div>
      </div>
      
    </div>
  )
}

export default HomeSection6
