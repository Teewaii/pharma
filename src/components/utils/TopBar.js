import React from "react";
import Image from "next/image";
import phoneIcon from "../../assets/phone_1.svg";
import emailIcon from "../../assets/thick@.svg";

const TopBar = () => {
  return (
    <div className="main bg-primary1 relative z-20">
      <div className="wrapper text-white flex flex-col items-center container py-6">
        <p className="text-center mb-4">
          Welcome to Pharma. We provides medical accessories
        </p>
        <div className="contactIcons flex flex-col items-center md:flex-row gap-2 ">
          <span className="flex items-center gap-4">
            <span className="p-3 bg-[#095FBA] rounded-full ">
              <Image src={phoneIcon} height={16} alt="phoneIcon" />
            </span>
            <p>(404) 850 - 7080</p>
          </span>

          <span className="flex items-center gap-4">
            <span className="p-3 bg-[#095FBA] rounded-full ">
              <Image src={emailIcon} height={16} alt="emailIcon" />
            </span>
            <a href="taiyeajimati.vercel.app">taiyeajimati@gmail.com</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
