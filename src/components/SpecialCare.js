import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import leftImage from "../assets/Mark1.png";
import rightImage from "../assets/Mark2.png";

export const SpecialCare = () => {
  return (
    <section className="container h-full ">
      <div className=" flex flex-col gap-16 lg:flex-row lg:justify-between py-sectionPsmall lg:py-sectionPlarge">
        <div className="LeftInfo">
          <div className="heading">
            <span className="sectionTitle border-2 ">SPEACIAL CARE</span>
            <h1 className="text-3xl py-6 font-semibold lg:max-w-lg ">
              We provide a best care for your health with specialist
            </h1>
          </div>
          <p className="bodyText max-w-xl">
            Collaboratively administrate empowered markets via plug-and-play
            networks.
            <span className="font-bold text-primary1 mx-1 ">
              Dynamically procrastinate B2C
            </span>
            users after installed base benefits. Dramatically visualize
            customer.
            <br /> <br />
            Completely synergize resource taxing relationships via premier niche
            markets. Professionally cultivate one-to-one customer service with
            robust ideas. Dynamically innovate.
          </p>
          <div className="flex flex-col gap-3 my-10 ">
            <span className="flex items-center gap-2">
              <CheckBadgeIcon className="w-6 text-primary2" />
              <p className="font-medium">20+ years of excellence</p>
            </span>
            <span className="flex items-center gap-2">
              <CheckBadgeIcon className="w-6 text-primary2" />
              <p className="font-medium">Professional Experts</p>
            </span>
          </div>
          <Link href="#" className="btnPrim ">
            Discover Now
          </Link>
        </div>
        {/* <div className="photo relative flex flex-col items-center gap-5 lg:flex-row ">
          <Image src={leftImage} height="100%" alt="markPhoto1" />
          <Image src={rightImage} height="100%" alt="markPhoto2" />
          <div className="p-4 bg-HeaderColor absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
            <p className="text-white font-bold">Mark Broownn</p>
            <span className="text-secondary3">Multispecialist</span>
          </div>
        </div> */}

        <div className="DrMarkPhoto h-100vh flex flex-col items-center relative">
          <div className="imgWrapper h-full flex flex-col gap-2 items-center md:gap-6 md:flex-row ">
            <Image src={leftImage} height="100%" alt="markPhoto1" />
            <Image src={rightImage} height="100%" alt="markPhoto2" />
          </div>
          <div
            className="px-6 py-3 min-w-[200px] bg-HeaderColor absolute top-1/2 left-1/2 transform -translate-y-1/2
          -translate-x-1/2 md:top-3/4 md:-translate-y-1/2 md:-translate-x-1/2"
          >
            <p className="text-white text-lg font-bold md:text-xl ">
              Mark Broownn
            </p>
            <span className="text-slate-300">Multispecialist</span>
          </div>
        </div>
      </div>
    </section>
  );
};

{
  /* <div className="imgWrapper ">
<Image src={leftImage} height="100%" alt="markPhoto1" />
<Image src={rightImage} height="100%" alt="markPhoto2" />
</div>
<div className="px-6 py-3 bg-HeaderColor absolute bottom-[46%] left-[36%] ">

<p className="text-white text-xl font-bold">Mark Broownn</p>
<span className="text-slate-300">Multispecialist</span>
</div> */
}

{
  /* <div className="DrMarkPhoto  w-screen h-[70vh] bg-red-500 relative flex flex-col gap-6 items-center lg:flex-row">
          <div className="DrMarkPhoto absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-1/2 h-[20vh] bg-blue-500  "></div>
        </div> */
}
