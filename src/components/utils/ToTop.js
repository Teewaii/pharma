"use client";

import { ChevronDoubleUpIcon } from "@heroicons/react/24/solid";
import React, { useState, useEffect } from "react";
import ScrollToTop from "react-scroll-up";

const ToTop = () => {
  //   const ScrollIndicator = () => {
  //     window.addEventListener("scroll", handleScroll);
  //     const [isVisible, setIsVisible] = useState(false);

  //     useEffect(() => {
  //       const handleScroll = () => {
  //         const scrollY = window.scrollY;

  //         if (scrollY > 100) {
  //           setIsVisible(true);
  //         } else {
  //           setIsVisible(false);
  //         }
  //       };
  //     }, []);
  //   };

  //   SCROLL TO TOP
  const toTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    // <div className="z-200">
    //   <ScrollToTop showUnder={160}>
    //     <p className=" ">
    //       <ChevronDoubleUpIcon />
    //     </p>
    //   </ScrollToTop>
    // </div>
    <div
      className={
        isVisible
          ? "hidden bg-black px-4 py-4 w-fit text-white fixed right-10 bottom-10 z-200"
          : "block bg-black px-4 py-4 w-fit text-white fixed right-10 bottom-10 z-200"
      }
    >
      scroll to Top
    </div>
  );
};

export default ToTop;
