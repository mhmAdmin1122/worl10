import Image from "next/image";
import React from "react";
import homeimg1 from '@/public/img/1.347066da.webp'

const HomeSection1 = () => {
  
  return (
    <div className="heroSection bg-[#151423] mb-12 flex justify-around gap-2 py-[80px] overflow-hidden">
      <div className="w-[48%]">
        <h2 className="text-[25px] text-blue-600 font-medium">Best it solution</h2>
        <h1 className="text-[#ff6a00] text-[75px] font-bold">Creating a better IT solutions</h1>
        <p className="text-[23px] text-white font-semibold pb-8 pt-4">Dcidunt eget semper nec quam. Sed hendrerit morbi ac felis. Nunc egestas augue pellentesque</p>
        <div className="flex gap-3">
            <button className="btn homesec1-btn1 bg-[#cb81fa] hover:text-black px-8 py-4 text-[18px] font-semibold text-white rounded">Get Started</button>
            <button className="btn homesec1-btn2  hover:border-[#cb81fa]  bg-transparent border border-white px-8 py-4 text-[18px] font-semibold text-white rounded">Contact Us</button>
        </div>
      </div>
      <div className="homesecimg1">
        <Image src={homeimg1} alt={"img"} height={440} width={440}/>
      </div>
    </div>
  );
};

export default HomeSection1;
