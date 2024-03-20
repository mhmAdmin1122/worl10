import Image from "next/image";
import React from "react";
import userimg from "@/public/img/team.jpg";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const HomeSection5 = () => {
  return (
    <div className="bg-[#ffffff] pb-12">
      <div className="flex flex-col py-10 gap-1 justify-center items-center">
        <div className="w-[670px] flex flex-col gap-1 justify-center items-center">
          <div className="flex gap-2 items-center">
            <h2 className="w-[40px] h-[2px] bg-blue-700"></h2>
            <h2 className="text-blue-700 text-[20px] font-semibold">
              Expert Team
            </h2>
            <h2 className="w-[40px] h-[2px] bg-blue-700"></h2>
          </div>
          <h2 className="text-[40px] font-bold">Meet with our expert</h2>
          <p className="text-[20px] text-[#747474] text-center">
            Dcidunt eget semper nec quam. Sed hendrerit. acfelis Nunc egestas
            augue atpellentesque laoreet
          </p>
        </div>
      </div>
      <div className="flex gap-2 justify-evenly">

       
       
      <div className="usercard rounded-xl overflow-hidden h-[340px] w-[250px] bg-[#edd4fe]">
          <div className="h-[250px] overflow-hidden">
          <div className="homesec5img">
            <div className="ddd transition duration-700 h-[250px] w-[300px] overflow-hidden"><Image src={userimg} alt={"img"} height={300} width={300} /></div>
          </div>
          </div>
          <div className="relative bottom-[140px] left-12">
            <div className="user-icons flex gap-2 ">
              <div className="text-[#316FF6] cursor-pointer border bg-white rounded-full w-[30px] h-[30px] flex items-center justify-center">
                <FaFacebook />
              </div>
              <div className="text-[#1DA1F2] cursor-pointer border bg-white rounded-full w-[30px] h-[30px] flex items-center justify-center">
                <FaTwitter />
              </div>
              <div className="text-[#fa7e1e] cursor-pointer border bg-white rounded-full w-[30px] h-[30px] flex items-center justify-center">
                {" "}
                <FaInstagram />
              </div>
              <div className="text-[#CD201F] cursor-pointer border bg-white rounded-full w-[30px] h-[30px] flex items-center justify-center">
                <FaYoutube />
              </div>
            </div>
          </div>
            <div className="userdesc flex flex-col items-center justify-center relative bottom-4 z-[9999]">
                <h2 className="text-[24px] font-semibold">M Waris</h2>
                <h2 className="text-[18px]">Web Developer</h2>
            </div>
        </div>



        <div className="usercard rounded-xl overflow-hidden h-[340px] w-[250px] bg-[#edd4fe]">
          <div className="h-[250px] overflow-hidden">
          <div className="homesec5img">
            <div className="ddd transition duration-700 h-[250px] w-[300px] overflow-hidden"><Image src={userimg} alt={"img"} height={300} width={300} /></div>
          </div>
          </div>
          <div className="relative bottom-[140px] left-12">
            <div className="user-icons flex gap-2 ">
              <div className="text-[#316FF6] cursor-pointer border bg-white rounded-full w-[30px] h-[30px] flex items-center justify-center">
                <FaFacebook />
              </div>
              <div className="text-[#1DA1F2] cursor-pointer border bg-white rounded-full w-[30px] h-[30px] flex items-center justify-center">
                <FaTwitter />
              </div>
              <div className="text-[#fa7e1e] cursor-pointer border bg-white rounded-full w-[30px] h-[30px] flex items-center justify-center">
                {" "}
                <FaInstagram />
              </div>
              <div className="text-[#CD201F] cursor-pointer border bg-white rounded-full w-[30px] h-[30px] flex items-center justify-center">
                <FaYoutube />
              </div>
            </div>
          </div>
            <div className="userdesc flex flex-col items-center justify-center relative bottom-4 z-[9999]">
                <h2 className="text-[24px] font-semibold">M Waris</h2>
                <h2 className="text-[18px]">Web Developer</h2>
            </div>
        </div>


        <div className="usercard rounded-xl overflow-hidden h-[340px] w-[250px] bg-[#edd4fe]">
          <div className="h-[250px] overflow-hidden">
          <div className="homesec5img">
            <div className="ddd transition duration-700 h-[250px] w-[300px] overflow-hidden"><Image src={userimg} alt={"img"} height={300} width={300} /></div>
          </div>
          </div>
          <div className="relative bottom-[140px] left-12">
            <div className="user-icons flex gap-2 ">
              <div className="text-[#316FF6] cursor-pointer border bg-white rounded-full w-[30px] h-[30px] flex items-center justify-center">
                <FaFacebook />
              </div>
              <div className="text-[#1DA1F2] cursor-pointer border bg-white rounded-full w-[30px] h-[30px] flex items-center justify-center">
                <FaTwitter />
              </div>
              <div className="text-[#fa7e1e] cursor-pointer border bg-white rounded-full w-[30px] h-[30px] flex items-center justify-center">
                {" "}
                <FaInstagram />
              </div>
              <div className="text-[#CD201F] cursor-pointer border bg-white rounded-full w-[30px] h-[30px] flex items-center justify-center">
                <FaYoutube />
              </div>
            </div>
          </div>
            <div className="userdesc flex flex-col items-center justify-center relative bottom-4 z-[9999]">
                <h2 className="text-[24px] font-semibold">M Waris</h2>
                <h2 className="text-[18px]">Web Developer</h2>
            </div>
        </div>

        <div className="usercard rounded-xl overflow-hidden h-[340px] w-[250px] bg-[#edd4fe]">
          <div className="h-[250px] overflow-hidden">
          <div className="homesec5img">
            <div className="ddd transition duration-700 h-[250px] w-[300px] overflow-hidden"><Image src={userimg} alt={"img"} height={300} width={300} /></div>
          </div>
          </div>
          <div className="relative bottom-[140px] left-12">
            <div className="user-icons flex gap-2 ">
              <div className="text-[#316FF6] cursor-pointer border bg-white rounded-full w-[30px] h-[30px] flex items-center justify-center">
                <FaFacebook />
              </div>
              <div className="text-[#1DA1F2] cursor-pointer border bg-white rounded-full w-[30px] h-[30px] flex items-center justify-center">
                <FaTwitter />
              </div>
              <div className="text-[#fa7e1e] cursor-pointer border bg-white rounded-full w-[30px] h-[30px] flex items-center justify-center">
                {" "}
                <FaInstagram />
              </div>
              <div className="text-[#CD201F] cursor-pointer border bg-white rounded-full w-[30px] h-[30px] flex items-center justify-center">
                <FaYoutube />
              </div>
            </div>
          </div>
            <div className="userdesc flex flex-col items-center justify-center relative bottom-4 z-[9999]">
                <h2 className="text-[24px] font-semibold">M Waris</h2>
                <h2 className="text-[18px]">Web Developer</h2>
            </div>
        </div>

        
        
        
      </div>
    </div>
  );
};

export default HomeSection5;
