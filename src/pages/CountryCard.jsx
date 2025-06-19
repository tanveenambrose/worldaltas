import React from 'react'

function CountryCard({country}) {
  const {name, population, region, capital, flags} = country;
  return (
    <>
    <li className='card border-4 rounded-3xl py-4 bg-black' >
      <div className='container flex justify-center items-center'>
      <img src={flags.svg} alt={flags.png} className='w-[250px] h-[150px] rounded-2xl' />
      </div>
      <div>
        <p className='font-mono text-2xl'>{name.common}</p>
        <p className=''><span className='text-gray-400'>Capital: </span>{capital[0]}</p>
        <p className='text-sm'><span className='text-gray-400'>Population:</span> {population}</p>
        <p>{region}</p>
      </div>
    </li>
    </>
  )
}

export default CountryCard
