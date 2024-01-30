import React from "react";
import ServiceCard from "./ServiceCard";

function Services() {
  return (
    <section className="container h-fit">
      <div className="py-sectionPsmall lg:py-sectionPlarge">
        <div className="heading text-center">
          <span className="sectionTitle border-2 ">Services</span>
          <h1 className="text-3xl py-6 font-semibold  ">
            Feel Like Home With Best Medical Care
          </h1>
        </div>
        <div className="services flex flex-col gap-5 lg:flex-row flex-wrap">
          <ServiceCard />
        </div>
      </div>
    </section>
  );
}

export default Services;
