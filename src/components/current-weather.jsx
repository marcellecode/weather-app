import React, { useEffect, useState } from "react";
import weatherApi from "../services/weather-api";
import styled from "styled-components";

const Title = styled.h1`
  text-align: center;
  font-size: 36px;
  margin-bottom: 10px;
`;

const WeatherInfo = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 20px;
`;

const CurrentWeather = () => {
  const [weatherDay, setWeatherDay] = useState([]);

  useEffect(() => {
    weatherApi
      .get("/")
      .then((res) => {
        let weather_data = res.data;
        setWeatherDay(weather_data);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <>
      <Title>Current Weather</Title>

      <WeatherInfo>
        <p>Temperatura {weatherDay?.tempoAtual}°</p>
        <p>Chance de chuva {weatherDay?.chanceChuva}</p>
        <p>Umidade {weatherDay?.umidade}</p>
        <p>Vento {weatherDay?.vento}</p>
      </WeatherInfo>
    </>
  );
};

export default CurrentWeather;
