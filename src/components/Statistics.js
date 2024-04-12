import React from "react";
import stats from "./utils/Stats";

const Statistics = () => {
  return (
    <div className="w-full statContainer h-fit flex flex-col items-center mt-12 pt-10 gap-10 lg:flex-row border-t border-opacity-60 border-white">
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="statItem text-white text-center flex flex-col items-center gap-y-4"
        >
          <div className="value text-5xl font-semibold ">{stat.value}</div>

          <div className="label text-sm w-3/4 font-light uppercase tracking-spread ">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Statistics;
