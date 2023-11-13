import React from 'react';
import Weatherinfo from './Weatherinfo';
export const WeatherIcons = {
  
  "01d": "/castling-clouds/icons/sunny.svg",
  "01n": "/castling-clouds/icons/night.svg",
  "02d": "/castling-clouds/icons/day.svg",
  "02n": "/castling-clouds/icons/cloudy-night.svg",
  "03d": "/castling-clouds/icons/cloudy.svg",
  "03n": "/castling-clouds/icons/cloudy.svg",
  "04d": "/castling-clouds/icons/perfect-day.svg",
  "04n": "/castling-clouds/icons/cloudy-night.svg",
  "09d": "/castling-clouds/icons/rain.svg",
  "09n": "/castling-clouds/icons/rain-night.svg",
  "10d": "/castling-clouds/icons/rain.svg",
  "10n": "/castling-clouds/icons/rain-night.svg",
  "11d": "/castling-clouds/icons/storm.svg",
  "11n": "/castling-clouds/icons/storm.svg",
};
const Weather = (props) => {
  const { weather}=props;
  const isDay=weather?.weather[0].icon?.includes('d');
  const getTime=(timestamp)=>{
    return `${new Date(timestamp*1000).getHours()} : ${new Date(timestamp*1000).getMinutes()}`
  }
  return (
    <>
      <div className='flex items-center w-[100%] justify-between mx-auto my-7'>
        <h1 className='mx-auto my-5 text-sm'><span className='text-3xl'>{`${Math.floor(weather?.main?.temp-273)}°C`}</span>{` | ${weather?.weather[0].description}`}</h1>
        <img src={WeatherIcons[weather?.weather[0].icon]} alt="" className='w-24 h-24 mx-auto my-1'/>
      </div>
      <h1 className='text-3xl'>{`${weather?.name}, ${weather?.sys.country}`}</h1>
      <h1 className='text-sm mt-5 mx-6 mb-2.5 w-[90%]'>Weather Info</h1>
      <div className='flex w-[90%] justify-evenly items-center flex-wrap'>
        <Weatherinfo name={isDay?"sunset":"sunrise"} value={getTime(weather?.sys[isDay?"sunset":"sunrise"])}/>
        <Weatherinfo name="humidity" value={weather?.main?.humidity}/>
        <Weatherinfo name="wind" value={weather?.wind?.speed}/>
        <Weatherinfo name="pressure" value={weather?.main?.pressure}/>
      </div>
    </>
  );
};

export default Weather;
