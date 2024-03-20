import React from 'react'

const HomeSection9 = () => {
  return (
    <div className='py-20'>
      <div className="flex justify-around items-center">
      <div className="w-[600px] flex flex-col gap-1">
        <div className="flex gap-2 items-center">
          <h2 className="text-blue-500 text-[20px] font-semibold">Pricing Plan</h2>
          <h2 className="w-[60px] h-[2px] bg-blue-500"></h2>
        </div>
        <h2 className="text-[40px] text-[#ff6a00] font-bold">
        Let check our latest price
        </h2>
        <p className="text-[20px] text-[#747474]">
        Duis leo. Sed fringilla mauris siamet nibh. odales sagittis magna. Sed consequat
        </p>
      </div>
      <div>
        <button className="btn Pricing-card-mainbtn hover:text-black text-[#cb81fa] font-semibold text-[18px] border-[2px] border-[#cb81fa] rounded-md px-5 py-3">Discover More Services</button>
      </div>
      </div>
      <div className='flex justify-center gap-12 pt-12'>
        <div className='pricingCard border-[2px] border-[#cb81fa] h-[420px] w-[320px] rounded-lg'>
            <section className="h-full">
            <h2 className='onhover text-black font-semibold pt-3 text-[24px] text-center'>Basic Plan</h2>
            <div className='onhover flex gap-2 items-center justify-center '>
                <span className='font-bold relative bottom-3 left-2 text-[20px] pl-6'>$</span>
                <h2 className='text-[75px] font-bold'>12</h2>
                <p className='onhover text-gray-500 text-[20px] font-semibold'>per month billed annually</p>
            </div>
           <div className='pl-6'>
           <ul className='pl-7 list-disc text-[17px] font-semibold text-gray-600 flex flex-col gap-2'>
                <li className='onhover'>30 Days Trial Features</li>
                <li className='onhover'>Synced To Cloud Database</li>
                <li className='onhover'>10 Hours Of Support</li>
                <li>Social Media Integration</li>
                <li>Unlimited Features</li>
            </ul>
           </div>
            <div className="text-center pt-3 flex items-center justify-center">
            <button className='btn Pricing-card-btn hover:border hover:border-black bg-[#cb81fa] text-[22px] font-bold text-white w-[260px] py-[10px] rounded-md '>Get Started</button>
            </div>
            </section>
        </div>

        <div className='pricingCard border-[2px] border-[#cb81fa] h-[420px] w-[320px] rounded-lg'>
            <section className="h-full">
            <h2 className='onhover text-black font-semibold pt-3 text-[24px] text-center'>Gold plan
</h2>
            <div className='onhover flex gap-2 items-center justify-center '>
                <span className='font-bold relative bottom-3 left-2 text-[20px] pl-6'>$</span>
                <h2 className='text-[75px] font-bold'>59</h2>
                <p className='onhover text-gray-500 text-[20px] font-semibold'>per month billed annually</p>
            </div>
           <div className='pl-6'>
           <ul className='pl-7 list-disc text-[17px] font-semibold text-gray-600 flex flex-col gap-2'>
                <li className='onhover'>30 Days Trial Features</li>
                <li className='onhover'>Synced To Cloud Database</li>
                <li className='onhover'>10 Hours Of Support</li>
                <li>Social Media Integration</li>
                <li>Unlimited Features</li>
            </ul>
           </div>
            <div className="text-center pt-3  flex items-center justify-center">
            <button className='btn Pricing-card-btn hover:border hover:border-black bg-[#cb81fa] text-[22px] font-bold text-white w-[260px] py-[10px] rounded-md '>Get Started</button>
            </div>
            </section>
        </div>

        <div className='pricingCard border-[2px] border-[#cb81fa] h-[420px] w-[320px] rounded-lg'>
            <section className="h-full">
            <h2 className='onhover text-black font-semibold pt-3 text-[24px] text-center'>Platinum plan</h2>
            <div className='onhover flex gap-2 items-center justify-center '>
                <span className='font-bold relative bottom-3 left-2 text-[20px] pl-6'>$</span>
                <h2 className='text-[75px] font-bold'>59</h2>
                <p className='onhover text-gray-500 text-[20px] font-semibold'>per month billed annually</p>
            </div>
           <div className='pl-6'>
           <ul className='pl-7 list-disc text-[17px] font-semibold text-gray-600 flex flex-col gap-2'>
                <li className='onhover'>30 Days Trial Features</li>
                <li className='onhover'>Synced To Cloud Database</li>
                <li className='onhover'>10 Hours Of Support</li>
                <li>Social Media Integration</li>
                <li>Unlimited Features</li>
            </ul>
           </div>
            <div className="text-center pt-3 flex items-center justify-center">
            <button className='btn Pricing-card-btn hover:border hover:border-black bg-[#cb81fa] text-[22px] font-bold text-white w-[260px] py-[10px] rounded-md'>Get Started</button>
            </div>
            </section>
        </div>
      </div>
    </div>
  )
}

export default HomeSection9
