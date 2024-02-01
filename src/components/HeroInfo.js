import React from "react";
import Link from "next/link";

const HeroInfo = () => {
  return (
    <div className="flex flex-col gap-y-4 mt-4 sm:w-[55vw] lg:w-[45vw] xl:w-[35vw] 2xl:w-[30vw]">
      <span className="sectionTitle bg-primary2 ">MEDICAL PROFESSIONALS</span>
      <h1 className="text-4xl leading-10 text-primary3 font-[700] xl:text-heroHeaderXl lg:leading-12 xl:leading-tight 2xl:text-heroHeader2Xl">
        Makes Your Health Better Will Makes Us Better
      </h1>
      <span className="tracking-wide d:max-w-2/6 2xl:max-w-2xl xl:text-lg">
        Our team of highly trained professionals uses the latest healing
        technologies to restore you to pain-free health quickly and easily.
      </span>
      <Link className="btnPrim mt-6 lg:mt-8 " href="#">
        Get Started
      </Link>
    </div>
  );
};

export default HeroInfo;
