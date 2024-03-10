import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="flex items-center gap-6">
      <Link href="#">
        <FaInstagram
          size={25}
          className="text-white hover:text-primary2 transition-all ease-in-out duration-300 cursor-pointer"
        />
      </Link>
      <Link href="#">
        <FaFacebook
          size={25}
          className="text-white hover:text-primary2 transition-all ease-in-out duration-300 cursor-pointer"
        />
      </Link>
      <Link href="#">
        <FaTwitter
          size={25}
          className="text-white hover:text-primary2 transition-all ease-in-out duration-300 cursor-pointer"
        />
      </Link>
    </div>
  );
};

export default Socials;
