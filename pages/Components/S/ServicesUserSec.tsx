import React from "react";

const ServicesUserSec = () => {
  return (
    <div className="h-[600px] flex justify-center">
      <div className="Service-User bg-blue-800 w-[40%] h-[600px] pl-[140px] pt-[80px]">
        <div className="Service-User-img h-[400px] relative flex justify-center">
          <div className="absolute bottom-0">
            <div className="Border-Div border-t-[5px] h-10 w-[40px] absolute top-0 left-0 border-l-[4px] border-[#cb81fa]"></div>
            <div className="bg-white w-[120px] h-[120px]">
              <h2>99</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-8 flex-col w-[60%] pt-[80px] px-[60px]">
        <div className="">
            <h2 className="text-[30px] text-black font-semibold">Muhammad Waris</h2>
            <h2 className="text-[20px] text-gray-500 font-medium">Customer,PK</h2>
        </div>
        <div className="">
            <p className="text-[22px] text-gray-700 font-semibold w-[500px] leading-9"><em>Eollicitudin nisi nulla eget augue. Maecenas quis turpaliquet, porta lorem et, dictum purus. Curabitur vel congue diamamet condimentum metus. Donec feugiat fermentposuere. Morbi porttitor augue id</em></p>
        </div>
      </div>
    </div>
  );
};

export default ServicesUserSec;
