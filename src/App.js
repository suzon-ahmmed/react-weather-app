import React, { useEffect, useState } from "react";
import SearchLocation from "./components/SearchLocation";
import WeatherCard from "./components/WeatherCard";

// import axios
import axios from "axios";

// import icons

import { ImSpinner8 } from "react-icons/im";

const App = () => {
  const [data, setData] = useState(null);
  const [location, setLocation] = useState("Dhaka");

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // fetch the data
  useEffect(() => {
    // set loading to true
    setLoading(true);

    // const url = `${process.env.REACT_APP_OPEN_WERARTHER_URL}?q=${location}&units=metric&appid=${process.env.REACT_APP_API_KEY}`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=4c21d1e655f2f2c4588a138da8873e1f`;

    axios
      .get(url)
      .then((res) => {
        // set the data after 1500 ms
        setTimeout(() => {
          setData(res.data);
          // set loading to false
          setLoading(false);
        }, 1500);
      })
      .catch((err) => {
        setLoading(false);
        setErrorMsg(err);
      });
  }, [location]);

  // error message
  useEffect(() => {
    const timer = setTimeout(() => {
      setErrorMsg("");
    }, 2000);
    // clear timer
    return () => clearTimeout(timer);
  }, [errorMsg]);

  // if data is false show the loader
  if (!data) {
    return (
      <div className="w-full h-screen bg-gradientBg bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center">
        <div>
          <ImSpinner8 className="text-5xl animate-spin text-white" />
        </div>
      </div>
    );
  }
  // console.log('data');
  // console.log('description = '+ data.weather[0].description);
  // set the backgroundImage according to the weather
  let bgImg;

  switch (data.weather[0].main) {
    case "Clouds":
      bgImg = "bg-Clouds";
      break;
    case "Haze":
      bgImg = "bg-Haze";
      break;
    case "Rain":
      bgImg = "bg-rain";
      break;
    case "Clear":
      bgImg = "bg-clearSky";
      break;
    case "Drizzle":
      bgImg = "bg-brizzle";
      break;
    case "Snow":
      bgImg = "bg-snow";
      break;
    case "Thunderstorm":
      bgImg = "bg-Thunderstorm ";
      break;
    default:
      bgImg = "bg-default";
  }

  return (
    <div
      className={`w-full h-screen ${bgImg}  bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center px-4 lg:px-0 `}
    >
      {errorMsg && (
        <div className="w-[320px] sm:w-[450px] text-center bg-red-500 text-white absolute top-2 z-10 lg:top-4 p-3 capitalize rounded-md">{`${errorMsg.response.data.message}`}</div>
      )}
      {/* form */}
      <SearchLocation setLocation={setLocation} />
      {/* card */}
      <WeatherCard data={data} loading={loading} />
    </div>
  );
};

// export default React.memo(App);
export default App;
