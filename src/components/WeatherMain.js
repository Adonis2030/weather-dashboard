import React from "react";

const WeatherMain = ({
  date,
  tempMax,
  tempMin,
  location,
  icon: Icon,
  tempMaxUnit,
  tempMinUnit,
  LocationIcon,
  CalendarIcon,
  weatherStatus,
}) => {
  return (
    <div className="flex flex-col p-5 text-center items-center justify-center h-full">
      <Icon />
      <div className="grid grid-cols-2 mt-5 gap-5">
        <div className="text-2xl text-gray-300">
          {tempMax + " " + tempMaxUnit}
        </div>
        <div className="text-2xl text-gray-300">
          {tempMin + " " + tempMinUnit}
        </div>
      </div>
      <div className="my-5 pb-5 text-lg text-gray-200 border-b">
        {weatherStatus}
      </div>
      <div className="pb-5 text-lg text-gray-200 flex items-center">
        <LocationIcon className="mr-2" />
        {location.split("/")[1]}
      </div>
      <div className="pb-5 text-lg text-gray-200 flex items-center">
        <CalendarIcon className="mr-2" />
        {date}
      </div>
    </div>
  );
};

export default WeatherMain;
