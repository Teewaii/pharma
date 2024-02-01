import React from "react";
import ServiceCard from "./ServiceCard";

function Services() {
  return (
    <section className="container h-fit ">
      <div className="py-sectionPsmall lg:py-sectionPlarge">
        <div className="heading text-center flex flex-col items-center">
          <span className="sectionTitle border-2 ">Services</span>
          <h1 className="text-3xl py-6 font-semibold lg:max-w-lg ">
            Feel Like Home With Best Medical Care
          </h1>
        </div>
        <div className="services flex flex-col justify-center gap-5 md:flex-row md:flex-wrap md:gap-4">
          <ServiceCard />
        </div>
      </div>
    </section>
  );
}

export default Services;
