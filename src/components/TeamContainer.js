import Link from "next/link";
import React from "react";
import team from "../Teams";
import TeamCard from "./TeamCard";
import Statistics from "./Statistics";

const TeamContainer = () => {
  return (
    <section className="h-fit bg-primary1">
      <div className="container flex flex-col items-center py-sectionPsmall lg:py-sectionPlarge ">
        <div className="w-full flex justify-between items-center">
          <div className="heading text-center flex flex-col text-white items-center lg:items-start">
            <span className="sectionTitle text-white border-2">
              MEDICAL EXPERTS
            </span>
            <h1 className="text-3xl py-6 font-semibold lg:max-w-lg ">
              The Professional Doctors
            </h1>
          </div>
          <div className="hidden buttons lg:flex flex-col items-center gap-4 lg:flex-row ">
            <Link href="#" className="btnSec ">
              View All Doctors
            </Link>
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row lg:justify-between gap-10 mt-8 mb-14   ">
          <TeamCard />
        </div>
        <Link href="#" className="btnSec lg:hidden ">
          View All Doctors
        </Link>
        <Statistics />
      </div>
    </section>
  );
};

export default TeamContainer;
