import React from "react";
import TopBar from "./utils/TopBar";
import HeroInfo from "./HeroInfo";

const Hero = () => {
  return (
    <section className="relative h-[fit] py-24 bg-heroBkg bg-cover bg-left bg-no-repeat mx-4 md:mx-8 lg:bg-top xl:mx-20 xl:py-24 2xl:py-44 2xl:min-h-[80vh] 2xl:mx-28 -z-40">
      <div className="container  ">
        <HeroInfo />
      </div>
    </section>
  );
};

export default Hero;
