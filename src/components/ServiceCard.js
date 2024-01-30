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
        <div key={index} className="flex flex-col lg:flex-row">
          <div className="left bg-secondary3 px-9 py-11 flex flex-col flex-[0.8] gap-y-4">
            <Image
              src={service.icon}
              width="50%"
              height={48}
              alt="AngioplastyIcon"
            />
            <h1 className="text-xl font-semibold">{service.heading}</h1>
            <p>{service.body}</p>
            <Link
              className="font-inter font-semibold flex  items-center gap-1"
              href={service.readMore}
            >
              Read More
              <PlusCircleIcon className="w-5 text-primary2" />
            </Link>
          </div>
          {service.pix && (
            <div className="right min-w- flex-[1.2]">
              <Image
                src={dentalPix}
                alt="DentalPix"
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
