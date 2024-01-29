"use-client";

import React from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";

const HamBuger = ({ toggle, Toggle }) => {
  return (
    <div>
      {toggle ? (
        <div className="hamBurger flex items-center bg-primary1 rounded-full transition-all ease-in-out duration-300">
          <Bars3Icon
            onClick={Toggle}
            className="w-12 text-white p-2 sm:w-16 transition-all ease-in-out duration-300"
          />
        </div>
      ) : (
        <div className="hamBurger flex items-center bg-primary2 rounded-full transition-all ease-in-out duration-300">
          <XMarkIcon
            onClick={Toggle}
            className="w-12 text-primary1 p-2 sm:w-16 transition-all ease-in-out duration-300 "
          />{" "}
        </div>
      )}
    </div>
  );
};

export default HamBuger;
