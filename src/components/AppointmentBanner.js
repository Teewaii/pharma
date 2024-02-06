import React, { Children } from "react";
import Image from "next/image";
import Link from "next/link";
import schedulePatternLeft from "../../src/assets/schedulePatternLeft.svg";
import schedulePatternRight from "../../src/assets/schedulePatternRight.svg";

const AppointmentBanner = ({ children, title }) => {
  return (
    <div className="container relative bg-primary1 h-full">
      <div className="flex flex-col items-center py-32 lg:py-28">
        <div>
          <h1 className="text-white text-3xl mb-10 font-semibold text-center leading-14 lg:max-w-lg">
            {title}
          </h1>
        </div>
        <div className="flex items-center gap-10 ">{children}</div>
      </div>
      <div className="absolute left-0 bottom-0 w-32 sm:w-32 lg:w-fit ">
        <Image
          src={schedulePatternLeft}
          width="100%"
          height="100%"
          alt="left_pattern"
        />
      </div>
      <div className="absolute right-0 top-0 w-32 sm:w-32 lg:w-fit ">
        <Image
          src={schedulePatternRight}
          width="100%"
          height="100%"
          alt="right_pattern"
        />
      </div>
    </div>
  );
};

export default AppointmentBanner;
