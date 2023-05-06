import React, { useState, useEffect } from "react";
import LeftPanel from "../LeftPanel/LeftPanel";
import { SunIcon } from "@heroicons/react/24/outline";
const WeatherPanel = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [weather, setWeather] = useState("");
  const [localization, setLocalization] = useState("London");
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${localization}&appid=${process.env.WEATHER_API}`
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div className="w-4/4 flex justify-center">
      <div className="w-4/6 flex flex-wrap justify-center items-center">
        <label
          htmlFor="price"
          className="block text-sm font-medium leading-6 text-white"
        >
          Localizaton
        </label>
        <div className="relative mt-2 rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-500 sm:text-sm">
              <SunIcon className="h-4 w-3" aria-hidden="true" />
            </span>
          </div>
          <input
            type="text"
            name="localization"
            id="localization"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="London"
            onChange={(e) => setLocalization(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default WeatherPanel;
