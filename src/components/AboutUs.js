import React from "react";
import AboutUsSticker from "./AboutUsSticker";

const AboutUs = () => {
  return (
    <section className="relative max-h-[100vh] bg-aboutBkg bg-cover bg-right bg-no-repeat mx-4 md:mx-8 md:flex md:bg-top md:h-[710px] md:py-sectionPlarge xl:mx-18 xl:py-24 2xl:py-40 2xl:mx-24 2xl:h-[710px]">
      <div className="p-7 md:container md:flex md:justify-end items-center ">
        <AboutUsSticker />
      </div>
    </section>
  );
};

export default AboutUs;
