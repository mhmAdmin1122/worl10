import Image from "next/image";
import React from "react";
import homesecimg2 from "@/public/img/1.webp";
import CountingAnimation from "../C/CountingAnimation";

const HomeSection2 = () => {
  return (
    <div className="flex justify-around pt-16">
      <div>
        <Image src={homesecimg2} alt={""} height={500} width={500} />
      </div>
      <div className="w-[35%]">
        <div className="flex gap-2 items-center">
          <h2 className="text-blue-700 text-[20px] font-semibold">About</h2>
          <h2 className="w-[40px] h-[2px] bg-blue-700"></h2>
        </div>
        <h1 className="text-[40px] font-bold">
          We execute our ideas form the start to finish.
        </h1>
        <p className="text-[20px] text-[#747474] font-semibold pt-4">
          Maecenas tempus, tellus eget condime honcus sem quam semper libero sit
          amet adipiscingem neque sed imquam nunullam quis ante. Etiam sit amet
          orci.
        </p>
        <p className="text-[20px] text-black font-semibold pt-4 pb-3">
          Duis leo. Sed fringilla mauris siamet nibh. odales sagittis magna. Sed
          consequat
        </p>
        <div className="flex gap-8">
          <div className="">
            <div className="flex gap-1">
              <div className="text-[40px] font-semibold">
                <CountingAnimation targetNumber={200} />
              </div>
              <span className="flex items-end text-[20px] mb-2">Y</span>
            </div>
            <h2 className="text-[20px] font-semibold text-[#151423]">
              Experiences
            </h2>
          </div>

          <div className="">
            <div className="flex gap-1">
              <div className="text-[40px] font-semibold">
                <CountingAnimation targetNumber={200} />
              </div>
              <span className="flex items-end text-[20px] mb-2">Y</span>
            </div>
            <h2 className="text-[20px] font-semibold text-[#151423]">
              Experiences
            </h2>
          </div>

          <div className="">
            <div className="flex gap-1">
            <div className="text-[40px] font-semibold">
              <CountingAnimation targetNumber={200} />
            </div>
            <div className="flex gap-1">
              <span className="flex items-end text-[20px] mb-2">Y</span>
            </div>
            </div>
            <h2 className="text-[20px] font-semibold text-[#151423]">
              Experiences
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection2;
