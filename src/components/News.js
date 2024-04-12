import Link from "next/link";
import React from "react";

export const News = () => {
  return (
    <section className="h-fit ">
      <div className="container py-sectionPsmall lg:py-sectionPlarge ">
        <div className="heading text-center flex text-HeaderColor items-start lg:justify-between">
          <div className="headerLeft flex flex-col items-start">
            <span className="sectionTitle border-2">News Update</span>
            <h1 className="text-3xl py-6 font-semibold lg:max-w-lg ">
              Latest Healthcare Articles
            </h1>
          </div>
          <div className="right ">
            <Link href="#" className="text-primary1 btnWhite ">
              Read All News
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
