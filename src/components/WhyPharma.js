import React from "react";
import LeftPattern from "../assets/TopLeftPattern.svg";
import RightPattern from "../assets/bottom_right_Pattern.svg";
import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

const WhyPharma = () => {
  const whyPharma = [
    "Blood clotting disorder",
    "Prescription Filling",
    "Health Consultation",
    "Vaccination Services",
    "Medication Review",
    "General Check-ups",
    "Pediatric Care",
  ];
  return (
    <section className=" relative bg-secondary1">
      <div className=" container py-sectionPsmall lg:py-sectionPlarge flex flex-col items-center relative  z-50">
        <div className="heading flex flex-col items-center">
          <span className="sectionTitle border-2 border-white ">
            WHY CHOOSING PHARMA
          </span>
          <p className="text-center py-6 lg:max-w-3xl ">
            Completely synergize resource taxing relationships via premier niche
            markets. Professionally cultivate one-to-one customer service with
            robust ideas. Dynamically innovate.
          </p>
        </div>
        <div className="mt-9 flex flex-col items-start gap-4 lg:flex-row lg:flex-wrap lg:gap-8 lg:items-center lg:justify-center lg:w-3/4">
          {whyPharma.map((item) => (
            <div key="index" className="why flex items-center gap-2">
              <svg className="text-primary1 w-6 h-6">
                <CheckCircleIcon />
              </svg>
              <p className="text-primary1 font-medium">{item}</p>
            </div>
          ))}
        </div>
      </div>

      <Image
        className="absolute top-0 left-0   "
        src={LeftPattern}
        alt="leftBkgPatternIcon"
      />
      <Image
        className="absolute bottom-0 right-0 "
        src={RightPattern}
        alt="rightBkgPatternIcon"
      />
    </section>
  );
};

export default WhyPharma;
