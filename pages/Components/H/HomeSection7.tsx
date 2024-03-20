import Image from "next/image";
import React from "react";
import faqimg1 from "@/public/img/f1.webp";
import faqimg3 from "@/public/img/f3.webp";
import faqimg2 from "@/public/img/f2.webp";
import Faqs from "../F/Faqs";

const HomeSection7 = () => {
  return (
    <div className="h-[640px] flex gap-1 justify-around py-16">
      <div className="w-[600px] flex flex-col gap-1">
        <div className="flex gap-2 items-center">
          <h2 className="text-blue-500 text-[20px] font-semibold">Faq</h2>
          <h2 className="w-[60px] h-[2px] bg-blue-500"></h2>
        </div>
        <h2 className="text-[40px] text-[#ff6a00] font-bold">
          Know more about our it solution
        </h2>
        <p className="text-[20px] text-[#747474]">
          Maecenas tempus, tellus eget condime honcus sem quam semper libero sit
          amet adipiscingem neque
        </p>
      <div>
        <Faqs />
      </div>
      </div>
           
        <div className="faqimgsec max-w-full">
          <div className="relative bottom-12">
            <div className="faqimg3 absolute  right left-[100px]">
              <Image src={faqimg3} alt={""} height={70} width={70} />
            </div>
            <div className="faqimg2 absloute bottom-[40px]">
              <Image src={faqimg1} alt={""} height={450} width={450} />
            </div>
            <div className="faqimg1 absolute top-0 z-[-1] ">
              <Image src={faqimg2} alt={""} height={450} width={450} />
            </div>
          </div>
        </div>
    </div>
  );
};

export default HomeSection7;
