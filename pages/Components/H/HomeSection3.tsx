import Image from "next/image";
import React from "react";
import { FaClock } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import homeimg from '@/public/img/2m.d5918ccd.webp'

const HomeSection3 = () => {
  return (
    <div className="flex justify-around pt-20">
     <div className="flex flex-col gap-4 w-[35%]">
     <div>
        <div className="flex gap-2 items-center">
          <h2 className="text-blue-700 text-[20px] font-semibold">
            Why Choose Us
          </h2>
          <h2 className="w-[40px] h-[2px] bg-blue-700"></h2>
        </div>
        <h1 className="text-[40px] text-[#ff6a00] font-semibold">We execute our ideas form the start to finish.</h1>
        <p className="text-[18px] text-[#747474] font-semibold">
          Maecenas tempus, tellus eget condime honcus semgs semper libero sit
          amet adipiscingem neque.
        </p>
      </div>
      <div className="flex gap-5">
        <div className="homesection3icons h-[50px] w-[60px] text-[20px] flex items-center justify-center bg-blue-600 text-white">
          <FaGear />
        </div>
        <div>
          <h2 className="text-[24px] text-[#ff6a00]">Flexible Solutions</h2>
          <p className="text-[18px] text-[##747474]">Maecenas tempus, tellus eget condime honcus sem quam semper</p>
        </div>
      </div>
      <div className="flex gap-5">
        <div className="homesection3icons h-[50px] w-[60px] text-[20px] flex items-center justify-center bg-blue-600 text-white">
          <FaClock />
        </div>
        <div>
          <h2 className="text-[24px] text-[#ff6a00]">24/7 Unlimited Support</h2>
          <p className="text-[18px] text-[##747474]">Maecenas tempus, tellus eget condime honcus sem quam semper</p>
        </div>
      </div>
     </div>
     <div>
      <Image src={homeimg} alt={"img"} height={600} width={600}/>
     </div>
    </div>
  );
};

export default HomeSection3;
