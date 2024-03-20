import Image from "next/image";
import React from "react";
import userimg from "@/public/img/team.jpg";
import { FaArrowRight } from "react-icons/fa";

const TeamCard = () => {
  return (
    <div>
      <div className="card1 flex justify-between gap-2">
        <div className="casestudyimg1 rounded-md">
          <div className="casestudydivs ">
            <div className="casestudyimg1div1 bg-[rgba(0,0,255,0.55)] h-[200px] rounded-tl-md rounded-tr-md"></div>
            <div className="casestudyimg1div2 bg-[rgba(0,0,255,0.77)] h-[110px] text-center pt-3 rounded-bl-md rounded-br-md">
              <h2 className="text-white text-[24px] font-semibold">M Waris</h2>
              <div className="flex gap-3 items-center justify-center text-white">
                <h2 className="text-white text-[18px] font-semibold flex  items-center">
                  Web developer{" "}
                </h2>
                <FaArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
