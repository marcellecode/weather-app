import React from "react";
import weatherApi from "../services/weather-api";

const CurrentWeather = () => {

  weatherApi
    .get("/")
    .then((res) => console.log(res.data))
    .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
    });

  return (
    <>
      <h1>Current Weather</h1>
    </>
  );
};

export default CurrentWeather;
