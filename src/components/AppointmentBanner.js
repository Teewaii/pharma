import React from "react";
import Image from "next/image";
import Link from "next/link";
import schedulePatternLeft from "../../src/assets/schedulePatternLeft.svg";
import schedulePatternRight from "../../src/assets/schedulePatternRight.svg";

const AppointmentBanner = () => {
  return (
    <div className="container relative bg-primary1 h-[fit]">
      <div className="flex flex-col items-center py-32 lg:py-28">
        <div>
          <h1 className="text-white text-3xl font-semibold text-center leading-14 lg:leading-relaxed lg:max-w-lg">
            Schedule an imperson or virtual appointment today
          </h1>
        </div>
        <Link href="#" className="btnSec mt-11">
          Book an Appointment
        </Link>
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
