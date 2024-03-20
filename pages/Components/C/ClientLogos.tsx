import React from 'react'
import Image from 'next/image'
import youtubeLogo from '@/public/img/youtube.png'

const ClientLogos = () => {
  return (
    <div className="flex justify-center gap-[100px] py-[40px]">
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
  )
}

export default ClientLogos
