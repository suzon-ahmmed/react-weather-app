// import React, { useEffect, useState } from "react";

import {
  BsEye,
  BsThermometer,
  BsWater,
  BsWind,
} from "react-icons/bs";

import { ImSpinner8 } from "react-icons/im";
import { TbTemperatureCelsius } from "react-icons/tb";

function WeatherCard({ loading, data }) {
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

  let localeTime = `${
    date.getHours() >= 12 ? date.getHours() - 12 : date.getHours()
  }:${date.getMinutes()} ${date.getHours() >= 12 ? "PM" : "AM"}`;

  let sunset = new Date(data.sys.sunset * 1000);
  let setSunset = `${
    sunset.getHours() >= 12 ? sunset.getHours() - 12 : sunset.getHours()
  }:${sunset.getMinutes()} ${sunset.getHours() >= 12 ? "PM" : "AM"}`;

  let sunrise = new Date(data.sys.sunrise * 1000);
  let setSunrise = `${
    sunrise.getHours() >= 12 ? sunrise.getHours() - 12 : sunrise.getHours()
  }:${sunrise.getMinutes()} ${sunrise.getHours() >= 12 ? "PM" : "AM"}`;
  // console.log(setSunset);

  return (
    <div>
      <div className="w-full min-w-[320px] sm:w-[450px] bg-black/20 h-[420px] sm:h-[570px] text-white backdrop-blur-sm rounded-lg p-4 sm:py-12 sm:p-6">
        {loading ? (
          <div className="w-full h-full flex justify-center items-center">
            <ImSpinner8 className="text-white text-5xl animate-spin" />
          </div>
        ) : (
          <div className="h-full flex flex-col justify-between">
            {/* card top */}
            <div className="flex items-center space-x-0 sm:space-x-4">
              {/* icon */}
              <div className="w-[78px] sm:w-[118px]">
                <img className="w-full -my-4"
                  src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
                  alt="wthr img"
                />
              </div>
              <div>
                {/* country name */}
                <div className="text-2xl font-semibold">
                  {data.name}, {data.sys.country}
                </div>

                {/* date */}
                <div>
                  {days[date.getDay()]}, {[date.getDate()]}'
                  {months[date.getMonth()]}, {localeTime}
                </div>
                {/* <div className="text-sm">Locale Time: {localeTime}</div> */}
                <div className="flex justify-center text-sm leading-none text-gray-100 mt-1">
                  <div className="pr-2 border-r-2 flex items-center">
                    Sunrise: {setSunrise}
                  </div>
                  <div className="pl-2 flex items-center">
                    Sunset: {setSunset}
                  </div>
                </div>
              </div>
            </div>
            {/* card body */}
            <div className="-mt-[12px]">
              <div className="flex justify-center">
                {/* temp */}
                <div className="text-[102px] sm:text-[144px] leading-none font-light">
                  {parseInt(data.main.temp)}
                </div>
                {/* celsius icon */}
                <div className="text-4xl mt-6">
                  <TbTemperatureCelsius />
                </div>
              </div>
              <div className="flex justify-center text-sm leading-none text-gray-100">
                <div className="pr-2 border-r-2 flex items-center">
                  Min: {data.main.temp_min} <TbTemperatureCelsius />{" "}
                </div>
                <div className="pl-2 flex items-center">
                  Max: {data.main.temp_max} <TbTemperatureCelsius />
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
