import React from "react";
import Image from "next/image";
import robert from "../assets/robert.png";
import exclam from "../assets/exclamationMark.svg";
import { StarIcon } from "@heroicons/react/24/solid";

export const ReviewCard = () => {
  const starLength = 5;
  const stars = 3;
  return (
    <div className="bg-secondary3 px-8 py-10 max-w-1/2 space-y-5 md:px-12 md:py-16 ">
      <div className="header flex justify-between pb-5 border-b-2 ">
        <div className="UserInfo flex flex-col gap-5 md:flex-row md:items-center ">
          <div className="rounded-full h-16 w-16 relative overflow-hidden">
            <Image
              src={robert}
              quality={100}
              height="200px"
              width="200px"
              alt="headShot"
            />
          </div>
          <div className="Profile flex flex-col">
            <p className="text-xl font-semibold">Robert Davis</p>
            <span className="text-paragraphColor font-medium">
              Dental Patient
            </span>
          </div>
        </div>
        <Image src={exclam} height="100%" alt="exclamationMark" />
      </div>
      <div className="comment">
        <p>
          Completely synergize resource taxing relationships via premier niche
          markets. Professionally cultivate one-to-one customer service with
          robust ideas. Dynamically innovate.
        </p>
      </div>
      <div className="stars flex items-center gap-2 ">
        {Array.from({ length: stars }, (_, index) => (
          <svg key={index} className="w-6 h-6 text-amber-500">
            <StarIcon />
          </svg>
        ))}

        {Array.from({ length: starLength - stars }, (_, index) => (
          <svg
            key={index}
            className="w-6 h-6 text-transparent stroke-2 stroke-amber-500"
          >
            <StarIcon />
          </svg>
        ))}
      </div>
    </div>
  );
};
