import React from "react";
import { ReviewCard } from "./ReviewCard";

const FeedBack = () => {
  return (
    <section className="container h-full">
      <div className=" py-sectionPsmall lg:py-sectionPlarge border-t-2 border-gray-100">
        <div className="heading flex flex-col items-center">
          <span className="sectionTitle border-2 ">FEEDBACK</span>
          <h1 className="text-3xl text-center py-6 font-semibold lg:max-w-lg ">
            Feedbacks about our service from the bottom of heart
          </h1>
        </div>
        <div className="flex flex-col items-center gap-6 lg:flex-row">
          <ReviewCard />
          <ReviewCard />
        </div>
      </div>
    </section>
  );
};

export default FeedBack;
