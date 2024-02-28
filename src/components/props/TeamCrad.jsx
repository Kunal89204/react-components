import React from 'react'
import { FaLinkedin } from "react-icons/fa6";

const TeamCard = ({img, name, designation}) => {
  return (
    <div className="card h-max md:w-1/5 w-fit mx-auto mt-10 md:m-0 relative">
    <img
      src={img}
      alt="no img"
      className='h-full'
    />
    <div className="absolute bottom-5 w-full  text-white">
      <div className="text-center  flex justify-center py-2"><FaLinkedin className="text-xl"/></div>
      <div className="text-center font-semibold text-2xl">{name}</div>
      <div className="text-center text-xl pt-2">{designation}</div>
    </div>
  </div>
  )
}

export default TeamCard
