import React, { useState, useEffect } from "react";

import { SunIcon } from "@heroicons/react/24/outline";
const WeatherPanel = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState("");
  const [localization, setLocalization] = useState("London");

  const checkWeather = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${localization}&appid=${process.env.REACT_APP_WEATHER_API}&units=metric`
    )
      .then((res) => res.json())
      .then((data) => setWeather(data));
  };
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
        <button
          className={`leftPanel_header-item text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium`}
          onClick={() => checkWeather()}
        >
          Click to check
        </button>
        {weather ? (
          <div className="weather_content mt-6">
            <div>
              <div className="px-4 sm:px-0 ">
                <h3 className="text-base font-semibold leading-7 text-gray-100 flex justify-center">
                  Weather Information
                </h3>
              </div>
              <div className="mt-6 border-t border-gray-100">
                <dl className="divide-y divide-gray-100">
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-100">
                      Temperature {"(min/avg/max)"}
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-100 sm:col-span-2 sm:mt-0">
                      {weather.main.temp_min}/{weather.main.temp}/
                      {weather.main.temp_max}
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-100">
                      Clouds
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-100 sm:col-span-2 sm:mt-0">
                      {weather.clouds.all}%
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-100">
                      Weather Description
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-100 sm:col-span-2 sm:mt-0">
                      {weather.weather[0].description}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default WeatherPanel;
