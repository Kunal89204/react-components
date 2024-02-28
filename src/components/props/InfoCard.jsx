import React from "react";

const InfoCard = ({no, title, desc, link}) => {
  return (
    <div className="flex items-center  py-6 border-b border-yellow-500 group">
      <div className="border border-yellow-500 h-[40px] w-[40px] aspect-square rounded-full flex justify-center items-center lg:group-hover:ml-2">
        {no}
      </div>
      <div className="px-4 lg:flex lg:items-center lg:justify-between lg:group-hover:ml-2">
        <div className="py-1  lg:w-1/3  lg:group-hover:ml-2">
          {title}
        </div>
        <div className="text-lg  lg:mr-20 lg:w-1/3 lg:group-hover:ml-2">
          {desc}
        </div>
        <div className="text-lg font-semibold lg:ml-4   lg:group-hover:ml-2 w-fit">
          <a href={link}>Read More</a>
          <div className="h-1 w-0 lg:group-hover:w-full bg-yellow-500"></div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
