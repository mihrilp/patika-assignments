import { createContext, useContext, useEffect, useState } from "react";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [cityName, setCityName] = useState("Istanbul");
  const [weather, setWeather] = useState({});

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&exclude=hourly&cnt=7&units=metric&appid=391fb2008226a97e2cb2635da3b4220d`
    )
      .then((response) => response.json())
      .then((data) => setWeather(data));
  }, [cityName]);

  const values = {
    cityName,
    setCityName,
    weather,
    setWeather,
  };

  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
