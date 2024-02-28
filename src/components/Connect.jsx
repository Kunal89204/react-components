import React from "react";

const Connect = () => {
  return (
    <div className="md:flex">
      <div className="w-full md:w-1/2">
        <img
          src="https://www.cukeragency.com/prodcuker/media/ctas/office_photo_cropped_r2-optimized.webp"
          alt=""
          className="w-full"
        />
      </div>
      <div className="bg-black text-white md:w-1/2 md:flex md:flex-col md:justify-center">
        <div className="py-4 text-center text-4xl md:px-20 px-6">A Culture Built Around Winning.</div>
        <div className="py-10 text-center text-xl md:px-16 px-6">We are passionate about helping our clients outperform the competition. With over 16 years experience and 180+ industry awards, we partner with brands we believe in to accelerate growth.</div>
        <div className="py-4 text-center"><button className="py-4 px-10 border text-xl hover:bg-red-700 hover:border-red-700">Let's Connect</button></div>
      </div>
    </div>
  );
};

export default Connect;
