"use client";

import React, { useState } from "react";
import Image from "next/image";
import phoneIcon from "../../assets/phone_1.svg";
import emailIcon from "../../assets/thick@.svg";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const TopBar = () => {
  const [show, setShow] = useState(false);
  const showAddress = () => {
    setShow((prev) => !prev);
  };
  return (
    <div
      className={
        show
          ? "main bg-primary1 relative h-20 md:h-fit overflow-hidden z-20"
          : "main bg-primary1 relative h-fit overflow-hidden z-20"
      }
    >
      <div className="wrapper text-white flex flex-col items-center container py-6  lg:flex-row lg:justify-between lg:items-center lg:py-3">
        <p className="text-center mb-4 lg:text-left lg:mb-0 ">
          Welcome to Pharma. We provides medical accessories
        </p>
        <div className="contactIcons flex flex-col items-center md:flex-row gap-2 lg:gap-6 ">
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
      {show ? (
        <ChevronDownIcon
          onClick={showAddress}
          className="w-6 rounded-full bg-primary3 p-1 text-white absolute top-12 right-5 cursor-pointer transition-all ease-in-out duration-300
          md:hidden z-70"
        />
      ) : (
        <ChevronUpIcon
          onClick={showAddress}
          className="w-6 rounded-full bg-primary3 p-1 text-white absolute top-12 right-5 cursor-pointer transition-all ease-in-out duration-300
          md:hidden z-70"
        />
      )}
    </div>
  );
};

export default TopBar;
