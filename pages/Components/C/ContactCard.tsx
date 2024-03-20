import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const ContactCard = () => {
  return (
    <div className="py-12">
      <div className="flex flex-col py-10 gap-1 justify-center items-center">
        <div className="w-[670px] flex flex-col gap-1 justify-center items-center">
          <div className="flex gap-2 items-center">
            <h2 className="w-[40px] h-[2px] bg-[#cb81fa]"></h2>
            <h2 className="text-[#cb81fa] text-[20px] font-semibold">
              Contact
            </h2>
            <h2 className="w-[40px] h-[2px] bg-[#cb81fa]"></h2>
          </div>
          <h2 className="text-[40px] text-[#ff6a00] font-bold">Get in touch</h2>
          <p className="text-[20px] text-[#747474] text-center">
            Dcidunt eget semper nec quam. Sed hendrerit. acfelis Nunc egestas
            augue atpellentesque laoreet
          </p>
        </div>
      </div>
      <div className="flex justify-center gap-[30px]">
        <div className="flex flex-col gap-3 items-center w-[25%] hover:shadow-xl hover:shadow-gray-300 py-8">
          <h2 className="text-[40px] text-[#cb81fa]">
            <FaLocationDot />
          </h2>
          <h2 className="text-[28px] font-semibold">Office address</h2>
          <h2 className="text-[18px] text-gray-500 text-center px-5">
            7895 Piermont, Albuquerque, NM 198866, USA
          </h2>
        </div>

        <div className="flex flex-col gap-3 items-center w-[25%] hover:shadow-xl hover:shadow-gray-300 py-8">
          <h2 className="text-[40px] text-[#cb81fa]">
            <FaEnvelope />
          </h2>
          <h2 className="text-[28px] font-semibold">Email Address</h2>
          <h2 className="text-[18px] text-gray-500 text-center px-5">
            support@gmail.com www.infomar.net
          </h2>
        </div>

        <div className="flex flex-col gap-3 items-center w-[25%] hover:shadow-xl hover:shadow-gray-300 py-8">
          <h2 className="text-[40px] text-[#cb81fa]">
            <FaPhone />
          </h2>
          <h2 className="text-[28px] font-semibold">Phone Number</h2>
          <h2 className="text-[18px] text-gray-500 text-center px-5">
            +012 (345) 678 99 <br /> <span >+12345678</span> 
          </h2>
          
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
