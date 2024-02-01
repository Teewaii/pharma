import React from "react";
import Image from "next/image";
import Link from "next/link";
import angioplastyIcon from "../../src/assets/Angioplasty.svg";
import dentalPix from "../../src/assets/Dental.png";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import services from "./servicesData";

const ServiceCard = () => {
  return (
    <>
      {services.map((service, index) => (
        <div key={index} className={service.pix ? "md:flex " : " inline"}>
          <div className="left bg-secondary3 w-[fit] px-8 py-10 flex flex-col flex-[0.85] gap-y-4 lg:w-[285px] ">
            <sapn className="w-10 h-6">
              <Image src={service.icon} height="100%" alt="AngioplastyIcon" />
            </sapn>
            <Link
              href="#"
              className="text-xl font-semibold hover:text-primary1"
            >
              {service.heading}
            </Link>
            <p>{service.body}</p>
            <Link
              className="font-inter font-semibold flex items-center gap-1 group"
              href={service.readMore}
            >
              Read More
              <PlusCircleIcon className="w-5 text-primary2 group-hover:text-primary1 transition-all ease-in-out duration-300" />
            </Link>
          </div>
          {service.pix && (
            <div className="right flex-[1.15]">
              <Image
                src={service.pix}
                alt={`${service.heading}_Icon`}
                quality={100}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default ServiceCard;
