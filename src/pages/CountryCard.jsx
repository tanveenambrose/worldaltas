import React from 'react'
import { NavLink } from 'react-router';
import { FaArrowRightToBracket } from "react-icons/fa6";

function CountryCard({country}) {
  const {name, population, region, capital, flags} = country;
  return (
    <>
    <li className='card border-4 rounded-3xl py-4 bg-gray-200' >
      <div className='container flex justify-center items-center'>
      <img src={flags.svg} alt={flags.png} className='w-[250px] h-[150px] border-2 hover: rounded-2xl' />
      </div>
      <div>
        <p className='font-mono text-2xl'>{name.common.length > 10 ? name.common.slice(0,11) +"..." : name.common}</p>
        <p className=''><span className='text-gray-400'>Capital: </span>{capital[0]}</p>
        <p className='text-sm'><span className='text-gray-400'>Population:</span> {population}</p>
        <p>{region}</p>
        <NavLink to={`/Country/${name.common}`}><button className='btn btn-success border-4 rounded-4xl text-black font-bold mt-2'>Read More<FaArrowRightToBracket /></button></NavLink>
      </div>
    </li>
    </>
  )
}

export default CountryCard
