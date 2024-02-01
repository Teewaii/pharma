import React from "react";
import AboutUsSticker from "./AboutUsSticker";

const AboutUs = () => {
  return (
    <section className="relative max-h-[100vh] bg-aboutBkg bg-cover bg-right bg-no-repeat mx-4 md:mx-8  lg:flex  lg:bg-top lg:h-[710px] lg:py-sectionPlarge xl:mx-18 xl:py-24 2xl:py-40 2xl:mx-24">
      <div className="p-6 lg:container lg:flex lg:justify-end items-center ">
        <AboutUsSticker />
      </div>
    </section>
  );
};

export default AboutUs;
