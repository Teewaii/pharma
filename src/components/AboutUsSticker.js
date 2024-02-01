import React from "react";
import Link from "next/link";
import Image from "next/image";
import MultiSpeciality from "../assets/MultiSpeciality.svg";
import Hours from "../assets/hours.svg";

const AboutUsSticker = () => {
  return (
    <div className="bg-white opacity-85 px-4 py-8 md:px-8 md:py-12 lg:opacity-100 md:max-w-[550px] 2xl:max-w-[550px] xl:px-8 xl:py-12  ">
      <span className="sectionTitle border-2 ">About us</span>
      <h1 className="text-3xl py-6 font-semibold lg:max-w-lg ">
        The Heart And Science Of Medicate Test
      </h1>
      <p className="paragraphColor">
        Capitalize on low hanging fruit to identify a ballpark value added
        activity to beta test. Override the digital divide with information
        highway will close.
      </p>
      <div className="timing py-10 flex flex-col gap-4 md:flex-row">
        <div className="multiSpecialty flex items-center gap-3">
          <Image
            src={MultiSpeciality}
            height="100%"
            width="100%"
            alt="MultiSpecialityIcon"
          />
          <h1 className="font-lato HeaderColor font-semibold">
            Multi Speciality Pharma Treatment
          </h1>
        </div>
        <div className="hours flex items-center gap-3">
          <Image
            src={Hours}
            height="100%"
            width="100%"
            alt="MultiSpecialityIcon"
          />
          <h1 className="font-lato HeaderColor font-semibold">
            24 Hours Medical Service
          </h1>
        </div>
      </div>
      <Link href="#" className="btnPrim">
        More About Us
      </Link>
    </div>
  );
};

export default AboutUsSticker;
