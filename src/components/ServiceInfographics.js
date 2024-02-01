import React from "react";
import Image from "next/image";
import spinalCare from "../../src/assets/spinalCare.svg";
import medic from "../../src/assets/medic.svg";
import TwoHands from "../../src/assets/TwoHands.svg";
import HealthCare from "../../src/assets/HealthCare.svg";
import medical from "../../src/assets/medical.svg";

const ServiceInfographics = () => {
  return (
    <section className="w-screen flex flex-col gap-6 py-6 items-center justify-center  md:flex-row md:flex-wrap container lg:justify-between lg:py-12">
      <Image src={spinalCare} width="100%" alt="Icon" />
      <Image src={medic} width="100%" alt="Icon" />
      <Image src={TwoHands} width="100%" alt="Icon" />
      <Image src={HealthCare} width="100%" alt="Icon" />
      <Image src={medical} width="100%" alt="Icon" />
    </section>
  );
};

export default ServiceInfographics;
