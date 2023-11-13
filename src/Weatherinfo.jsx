import React from 'react'
export const WeatherIcons={
    sunset:"/castling-clouds/icons/temp.svg",   
    sunrise:"/castling-clouds/icons/temp.svg",
    humidity:"/castling-clouds/icons/humidity.svg",
    wind:"/castling-clouds/icons/wind.svg",
    pressure:"/castling-clouds/icons/pressure.svg",

};
const Weatherinfo = (props) => {
    const {name,value}=props
  return (
    <div className='flex my-1 mx-2.5 justify-evenly items-center'>
        <img src={WeatherIcons[name]} alt="" className='w-9 h-9'/>
        <span className='flex flex-col text-sm m-3.5'>{value}<span className='text-xs caplitalize'>{name}</span></span>
    </div>
  )
}

export default Weatherinfo;
