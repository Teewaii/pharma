import React from "react";
import Image from "next/image";
import Insta from "../assets/Insta.svg";
import fb from "../assets/fb.svg";
import X_logo from "../assets/X_logo.svg";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { PhoneIcon } from "@heroicons/react/24/solid";
import LeftPattern from "../assets/TopLeftPattern.svg";
import RightPattern from "../assets/bottom_right_Pattern.svg";
import logo from "../assets/Logo.svg";
import Link from "next/link";

const Footer = () => {
  // FOOTER URL LINKS

  const Explore = {
    Home: "/",
    Service: "/our-services",
    "About us": "/about-us",
    "Contact Us": "/contact-us",
    Testimonials: "/testimonials",
    News: "/news",
  };

  const Uitility_Pages = {
    "Style Guide": "/style-Guide",
    Changelog: "/changelog",
    Licenses: "/licenses",
    "Protected Page": "/protected-Page",
    "404 Page": "/404-Page",
  };

  return (
    <section className="relative mx-4 md:mx-8 xl:mx-18 2xl:mx-24 overflow-hidden ">
      <div className="mainWrapper container bg-secondary2 h-[fit] py-16 ">
        <div className="top ">
          <div className="flex flex-col items-center lg:flex-row lg:justify-between">
            <Link href="/">
              <Image className="mb-6" src={logo} alt="Pharmalogo" />
            </Link>
            <div className="left flex flex-col items-center lg:flex-row gap-4 md:gap-10 ">
              <div className="contactIcons flex flex-col items-center md:flex-row gap-4 md:gap-10 ">
                <div className="flex items-center gap-4">
                  <span className="p-3 bg-primary2 rounded-full ">
                    <PhoneIcon className="w-5 text-primary1" />
                    {/* <Image src={phoneIcon} height={16} alt="phoneIcon" /> */}
                  </span>
                  <p>(404) 850 - 7080</p>
                </div>

                <div className="flex items-center gap-4">
                  <span className="p-3 bg-primary2 rounded-full ">
                    <EnvelopeIcon className="w-5 text-primary1" />
                    {/* <Image src={AtSymbolIcon} height={16} alt="emailIcon" /> */}
                  </span>
                  <a href="taiyeajimati.vercel.app">taiyeajimati@gmail.com</a>
                </div>
              </div>
              <div className="flex gap-3 items-cente">
                <Image src={Insta} height={22} alt="instagram_Icon" />
                <Image src={fb} height={22} alt="instagram_Icon" />
                <Image src={X_logo} height={22} alt="instagram_Icon" />
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="mt-8 flex flex-col gap-6 md:flex md:flex-row md:flex-wrap md:justify-between ">
          <h1 className="font-semibold md:text-2xl lg:leading-relaxed lg:max-w-xs 2xl:text-3xl">
            “A Simple Story About The Doctorate Medical Center & Health Care
            Foundation”
          </h1>

          <div>
            <p className="font-semibold mb-2">Explore</p>
            <ul className="space-y-2">
              {Object.entries(Explore).map(([key, value]) => (
                <li key={key}>
                  <Link href={value}>{key}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-2">Uitility Pages</p>
            <ul className="space-y-2">
              {Object.entries(Uitility_Pages).map(([key, value]) => (
                <li key={key}>
                  <Link href={value}>{key}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="appointmentBooking flex flex-col items-center lg:items-start gap-2">
            <p className="font-semibold">Book an appointment</p>

            <span className="text-center max-w-34 lg:text-left mb-2">
              It is a long established fact that a reader will be distracted
            </span>
            <form className="flex flex-col gap-6 md:max-w-[326px] ">
              <input
                className="inpuBox "
                name="email"
                placeholder="your email address"
              />
              <input
                className="SubmitPrim w-[100%] lg:w-fit"
                type="submit"
                name="submit"
                placeholder="Submit"
              />
            </form>
          </div>
        </div>
      </div>
      <Image
        className="absolute top-0 left-0 "
        src={LeftPattern}
        height={22}
        alt="leftBkgPatternIcon"
      />
      <Image
        className="absolute bottom-0 right-0 "
        src={RightPattern}
        height={22}
        alt="rightBkgPatternIcon"
      />
    </section>
  );
};

export default Footer;
