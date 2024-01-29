"use client";

import React, { useState } from "react";
import Image from "next/image";
import TopBar from "./utils/TopBar";
import logo from "../assets/logo.png";
import Link from "next/link";
import HamBuger from "./HamBuger";

const NavBar = () => {
  const [toggle, setToggle] = useState(true);

  const Toggle = () => {
    setToggle((prev) => !prev);
  };

  const navLinks = {
    Home: "/",
    About: "/About-us",
    Service: "/services",
    "Contact Us": "/contact-us",
  };

  return (
    // SMALL SCREEN NAVIGATION

    <nav className="main bg-white relaive z-0 ">
      <div className=" container py-2 h-20 flex items-center justify-between relative sm:py-12 lg:hidden ">
        <Image src={logo} height={58} width={175} alt="logo" />
        <HamBuger toggle={toggle} Toggle={Toggle} />
        <div
          className={
            toggle
              ? "flex flex-col gap-y-4  h-fit py-6 absolute left-0 right-0 -bottom-1 container -z-30 transition-all ease-in-out duration-300"
              : "flex flex-col gap-y-4 h-fit py-6 absolute left-0 right-0 shadow-lg -bottom-13 container -z-30 transition-all ease-in-out duration-300"
          }
        >
          <ul className="flex flex-col gap-y-4  ">
            {Object.entries(navLinks).map(([key, value]) => (
              <li key={key}>
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

        <li className="hidden mt-6 lg:flex btnSec ">
          <Link href="/">Appointment</Link>
        </li>
      </div>
    </nav>
  );
};

export default NavBar;
