import Image from "next/image";
import React from "react";
import teams from "../Teams";
import Socials from "./utils/Socials";

const TeamCard = () => {
  return (
    <>
      {teams.map((member) => (
        <div
          key={member.id}
          className="bg-deepColor flex flex-col items-center max-w-[350px] p-8 text-white"
        >
          <Image
            className="mb-5"
            src={member.pix}
            height="auto"
            alt={member.name}
          />
          <div className="flex flex-col space-y-2 team_info text-center">
            <p className="text-xl font-semibold">{member.name}</p>
            <span>{member.position}</span>
          </div>
          <div className="socials flex items-center gap-7 mt-6">
            <Socials />
          </div>
        </div>
      ))}
    </>
  );
};

export default TeamCard;
