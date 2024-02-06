"use client";

"use client";

import React, { useState } from "react";
import Image from "next/image";
import TopBar from "./utils/TopBar";
import logo from "../assets/Logo.svg";
import Link from "next/link";
import HamBuger from "./HamBuger";
import OverLay from "./OverLay";

const NavBar = () => {
  const [toggle, setToggle] = useState(true);

  const Toggle = () => {
    setToggle((prev) => !prev);
  };

  const navLinks = {
    Home: "/",
    About: "/about-us",
    Service: "/our-services",
    "Contact Us": "/contact-us",
  };

  return (
    <header>
      <nav className="main bg-white relaive z-0  ">
        {/* SMALL SCREEN NAVIGATION */}
        <div className=" container py-2 h-20 flex items-center justify-between relative sm:py-12 lg:hidden ">
          <Link href="/">
            <Image src={logo} width={160} alt="logo" />
          </Link>
          <HamBuger toggle={toggle} Toggle={Toggle} />
          <div
            className={
              toggle
                ? "flex flex-col gap-y-4  h-fit py-6 absolute left-0 right-0 -bottom-1 container -z-30 transition-all ease-in-out duration-300"
                : "bg-white shadow-xl flex flex-col gap-y-4 h-fit py-6 absolute left-0 right-0 -bottom-13 container z-30 transition-all ease-in-out duration-300"
            }
          >
            <ul className="flex flex-col gap-y-4 ">
              {Object.entries(navLinks).map(([key, value]) => (
                <li className="text-black" key={key}>
                  <Link className="text-lg " href={value}>
                    {key}
                  </Link>
                </li>
              ))}
            </ul>

            <Link className=" lg:hidden btnSec relative my-2 " href="/">
              Appointment
            </Link>
          </div>
        </div>

        {/* LARGE SCREEN NAVIGATION */}
        <div className="wrapper max-lg:hidden container py-8 flex items-center justify-between relative">
          <Link href="/">
            <Image src={logo} width={190} alt="logo" />
          </Link>
          <ul className="flex gap-x-8 ">
            {Object.entries(navLinks).map(([key, value]) => (
              <li
                key={key}
                className="relative hover:after:absolute after:top-36 after:left-0 after:right-0 after:border-b-4 after:border-primary1"
              >
                <Link className="text-lg font-medium" href={value}>
                  {key}
                </Link>
              </li>
            ))}
          </ul>
          <li className="hidden btnSec lg:flex ">
            <Link href="/">Appointment</Link>
          </li>
        </div>
      </nav>
      {/* {!toggle && <OverLay toggle={Toggle} />} */}
    </header>
  );
};

export default NavBar;
