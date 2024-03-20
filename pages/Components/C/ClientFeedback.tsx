import React from "react";
import AboutSlider from "../A/AboutSlider";

const ClientFeedback = () => {
  return (
    <div className="h-[650px]">
      <div className="flex flex-col py-10 gap-1 items-center">
        <div className="w-[670px] flex flex-col gap-1 justify-center items-center">
          <div className="flex gap-2 items-center">
            <h2 className="w-[40px] h-[2px] bg-blue-700"></h2>
            <h2 className="text-blue-700 text-[20px] font-semibold">
              Client Feedback
            </h2>
            <h2 className="w-[40px] h-[2px] bg-blue-700"></h2>
          </div>
          <h2 className="text-[40px] font-bold">Check what’s our client say</h2>
          <p className="text-[20px] text-[#747474] text-center">
            Dcidunt eget semper nec quam. Sed hendrerit. acfelis Nunc egestas
            augue atpellentesque laoreet
          </p>
        </div>
      </div>
        <div>
            <AboutSlider />
        </div>
    </div>
  );
};

export default ClientFeedback;
