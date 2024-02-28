import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import TeamCard from "./props/TeamCrad";


const Team = () => {
  return (
    <div className="2xl:px-40">
      <h1 className="text-4xl font-semibold text-center py-10">Leadership Team</h1>

      <div className="md:flex md:justify-around ">
        <TeamCard
        img='https://www.techmagnate.com/alpha/images/Sarvesh-Bagla.jpg'
        name='Sarvesh Bagla'
        designation='CEO'
        />
        <TeamCard
        img='https://www.techmagnate.com/alpha/images/Sarvesh-Bagla.jpg'
        name='Sarvesh Bagla'
        designation='CEO'
        />
        <TeamCard
        img='https://www.techmagnate.com/alpha/images/Sarvesh-Bagla.jpg'
        name='Sarvesh Bagla'
        designation='CEO'
        />
        <TeamCard
        img='https://www.techmagnate.com/alpha/images/Sarvesh-Bagla.jpg'
        name='Sarvesh Bagla'
        designation='CEO'
        />
        
      </div>
      <div className="md:flex md:justify-center md:space-x-10 md:py-8">
      <TeamCard
        img='https://www.techmagnate.com/alpha/images/Sarvesh-Bagla.jpg'
        name='Sarvesh Bagla'
        designation='CEO'
        />
      <TeamCard
        img='https://www.techmagnate.com/alpha/images/Sarvesh-Bagla.jpg'
        name='Sarvesh Bagla'
        designation='CEO'
        />
      <TeamCard
        img='https://www.techmagnate.com/alpha/images/Sarvesh-Bagla.jpg'
        name='Sarvesh Bagla'
        designation='CEO'
        />
      </div>
    </div>
  );
};

export default Team;
