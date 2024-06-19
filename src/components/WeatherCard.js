import React from "react";

const WeatherCard = ({ icon: Icon, title, value }) => (
  <div className="border rounded-lg bg-gradient-to-b from-blue-500 to-blue-900 grid grid-cols-5 p-5">
    <div className="col-span-2 flex items-center justify-center h-full">
      <Icon />
    </div>
    <div className="col-span-3 flex flex-col justify-center">
      <div className="mb-3 text-sm font-bold sm:text-md md:text-sm lg:text-sm text-gray-300">
        {title}
      </div>
      <div className="text-sm font-bold sm:text-md md:text-lg lg:text-xl text-gray-100">
        {value}
      </div>
    </div>
  </div>
);

export default WeatherCard;
