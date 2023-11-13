import React,{useState} from 'react'

const City = (props) => {

 const {setCity,fetchWeather} = props
  return (
    <>
      <img src="/castling-clouds/icons/perfect-day.svg" alt="" className='w-36 h-36 mx-auto my-10'/>
      <span className='text-lg font-black font-monsterrat mx-auto my-2.5'>Search for a City</span>
      <div className='flex rounded-sm'>
        <form className='flex' onSubmit={fetchWeather}>
          <input className="border border-black rounded-sm p-2" type="text" placeholder='City' onChange={(e)=>setCity(e.target.value)}/>
          <button className='bg-black text-white p-2 ' type='submit'>Search</button>
        </form>
      </div>
    </>
  )
}

export default City
