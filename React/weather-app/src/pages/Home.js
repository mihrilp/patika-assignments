import { useState } from "react";
import CustomSelect from "../components/CustomSelect/index";
import Card from "../components/Card/index";

import { useWeather } from "../context/WeatherContext";

const Home = () => {
  const { cityName, weather } = useWeather();
  const [loading, setLoading] = useState(true);

  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  setTimeout(function () {
    setLoading(false);
  }, 1000);

  return (
    <div className="home">
      <h1>Weather App</h1>
      <CustomSelect />
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          <h2>
            {cityName} - {date}
          </h2>
          <div className="todayWeather">
            {weather.list.map((item, index) => {
              return (
                <Card
                  key={index}
                  temp={item.main.temp}
                  weather={item.weather[0].main}
                  temp_min={item.main.temp_min}
                  temp_max={item.main.temp_max}
                  humidity={item.main.humidity}
                  icon={item.weather[0].icon}
                  wind={item.wind.speed}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
