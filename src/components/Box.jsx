import React from "react";

const Box = () => {
  return (
    <div className="bg-white p-4 lg:p-0 lg:flex 2xl:px-40">
      <div className="lg:w-1/2 lg:relative lg:pr-10">
        <h1 className="p-6 font-semibold text-2xl md:text-3xl lg:absolute lg:text-4xl">Driving Transformational Growth through Digital Excellence</h1>
        <img src="https://www.techmagnate.com/alpha/images/about_top.png" alt="" className="h-full"/>
      </div>
      <div className="lg:w-1/2 lg:py-10">
        <h1 className="py-2 text-xl font-semibold md:text-2xl">Who we are</h1>
        <p className="py-2 md:text-xl">
          Techmagnate is a full suite digital marketing agency, based in New
          Delhi, India. We challenge the notion that business growth must come
          at the expense of ethics and customer well-being.
        </p>
        <p className="py-2 md:text-xl">
          We have worked with some of the most notable brands across the
          country, such as Apollo Hospitals, Bajaj Finserv, Airtel, Honda,
          Mahindra, and many more.
        </p>
      </div>
    </div>
  );
};

export default Box;
