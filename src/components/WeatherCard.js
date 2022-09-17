// import React, { useEffect, useState } from "react";
// import icons
import {
  IoMdCloudy,
  IoMdRainy,
  IoMdSnow,
  IoMdSunny,
  IoMdThunderstorm,
} from "react-icons/io";

import {
  BsCloudDrizzleFill,
  BsCloudHaze2Fill,
  BsEye,
  BsThermometer,
  BsWater,
  BsWind,
} from "react-icons/bs";

import { ImSpinner8 } from "react-icons/im";
import { TbTemperatureCelsius } from "react-icons/tb";
// import moment from "moment/moment";

function WeatherCard({ loading, data }) {
  // const [date, setDate] = useState(new Date());

  // useEffect(() => {
  //   setDate(new Date());
  // }, []);
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const date = new Date();
  let icon;
  // eslint-disable-next-line default-case
  switch (data.weather[0].main) {
    case "Clouds":
      icon = <IoMdCloudy />;
      break;
    case "Haze":
      icon = <BsCloudHaze2Fill />;
      break;
    case "Rain":
      icon = <IoMdRainy />;
      break;
    case "Clear":
      icon = <IoMdSunny />;
      break;
    case "Drizzle":
      icon = <BsCloudDrizzleFill />;
      break;
    case "Snow":
      icon = <IoMdSnow />;
      break;
    case "Thunderstorm":
      icon = <IoMdThunderstorm />;
      break;
  }
  // date object
  //   console.log('I am Weather card.');
  console.log(data);
  return (
    <div>
      <div className="w-full min-w-[320px] sm:w-[450px] bg-black/20 h-[420px] sm:h-[570px] text-white backdrop-blur-sm rounded-lg py-6 sm:py-12 px-6">
        {loading ? (
          <div className="w-full h-full flex justify-center items-center">
            <ImSpinner8 className="text-white text-5xl animate-spin" />
          </div>
        ) : (
          <div className="h-full flex flex-col justify-between">
            {/* card top */}
            <div className="flex items-center gap-x-5">
              {/* icon */}
              <div className="text-[86px] sm:text-[98px]">{icon}</div>

              <div>
                {/* country name */}
                <div className="text-2xl font-semibold">
                  {data.name}, {data.sys.country}
                </div>

                {/* date */}
                <div>
                  {/* days[day] + ", " + date + " " + months[month] */}
                  {days[date.getDay()]}, {[date.getDate()]}'
                  {months[date.getMonth()]}
                </div>
                <div className="text-sm leading-4">
                  {/* Locale Time: {moment(data.timezone).format("h:mm:ss a")} */}
                </div>
              </div>
            </div>
            {/* card body */}
            <div className="-mt-[12px]">
              <div className="flex justify-center items-center">
                {/* temp */}
                <div className="text-[102px] sm:text-[144px] leading-none font-light">
                  {parseInt(data.main.temp)}
                </div>
                {/* celsius icon */}
                <div className="text-4xl">
                  <TbTemperatureCelsius />
                </div>
              </div>
              {/* weather description */}
              <div className="capitalize text-center sm:text-2xl">
                {data.weather[0].description}
              </div>
            </div>
            {/* card bottom */}
            <div className="w-full text-sm sm:text-base mx-auto flex flex-col gap-y-6">
              <div className="flex justify-between">
                <div className="flex items-center gap-x-2">
                  {/* icon */}
                  <div className="text-base sm:text-[20px]">
                    <BsEye />
                  </div>
                  <div>
                    Visibility{" "}
                    <span className="ml-2">{data.visibility / 1000} km</span>
                  </div>
                </div>
                <div className="flex items-center gap-x-2">
                  {/* icon */}
                  <div className="text-base sm:text-[20px]">
                    <BsThermometer />
                  </div>
                  <div className="flex">
                    Feels like
                    <div className="flex ml-2">
                      {parseInt(data.main.feels_like)}
                      <TbTemperatureCelsius />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center gap-x-2">
                  {/* icon */}
                  <div className="text-base sm:text-[20px]">
                    <BsWater />
                  </div>
                  <div>
                    Humidity
                    <span className="ml-2">{data.main.humidity} %</span>
                  </div>
                </div>
                <div className="flex items-center gap-x-2">
                  {/* icon */}
                  <div className="text-base sm:text-[20px]">
                    <BsWind />
                  </div>
                  <div>
                    Wind <span className="ml-2">{data.wind.speed} m/s</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
// export default React.memo(WeatherCard);
export default WeatherCard;
