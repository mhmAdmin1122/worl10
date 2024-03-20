import React from "react";
import Slider from "@/pages/Components/S/Slider";

const HomeSection8 = () => {
  return (
    <div className="h-[620px] bg-[#d09df1]">
      <div className="flex flex-col py-10 gap-1 justify-center items-center">
        <div className="w-[760px] flex flex-col gap-1 justify-center items-center">
          <div className="flex gap-2 items-center">
            <h2 className="w-[40px] h-[2px] bg-white"></h2>
            <h2 className="text-white text-[20px] font-semibold">Case Study</h2>
            <h2 className="w-[40px] h-[2px] bg-white"></h2>
          </div>
          <h2 className="text-[40px] text-[#ff6a00] font-bold">
            Our latest case study for your business
          </h2>
          <p className="text-[20px] text-[#747474] text-center">
            Dcidunt eget semper nec quam. Sed hendrerit. acfelis Nunc egestas
            augue atpellentesque laoreet
          </p>
        </div>
      </div>
      <div>
        <div className="Casestudyimgs">
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default HomeSection8;
