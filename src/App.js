import React from "react";
import axios from "axios";
import { useState } from "react";
import City from "./City"
import Weather from "./Weather"

const API_KEY="cb62ec6ed988011a7aa21606e6993196";
export default function App() {
  const [city,setCity] =useState();
  const [weather,setWeather] =useState();
  const fetchWeather=async(e)=>{
    e.preventDefault();
    const response= await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
    setWeather(response.data);

  }
  return (
    <div className="flex flex-col m-auto items-center shadow-xl px-5 py-5 rounded w-96 bg-white font-monsterrat">
      <span className="text-black-500 text-lg font-bold">Castling Clouds</span>
      {weather?<Weather weather={weather}/>:(<City setCity={setCity} fetchWeather={fetchWeather}/>)}
      {/* <Weather/> */}
    </div>
  )
}