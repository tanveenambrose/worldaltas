import React from 'react'
import CountryDatas from "./CountryData.json";

function Information() {
  return (
    <section className='container mx-auto sextion-about'>
        <h1 className='text-3xl mt-10 text-center font-mono  '>Here Are Some Intresting Facts <br /> we're proud of</h1>
        
        
        <div className="card-sections grid lg:grid-cols-3 sm:grid-cols-2  gap-4">
          {
            CountryDatas.map((country)=>{
              const {id,countryName,capital,population,interestingFact} = country;
              return(
                <div className="card size-64 rounded-tl-4xl rounded-br-4xl bg-cyan-500 text-gray-800 mt-12 w-auto" key={id} >
  <div className="card-body">
  <h2 className="card-title font-bold text-3xl">{countryName}</h2>
    <p className='font-serif'>{capital}</p>
    <p className='font-semibold'>{population}</p>
    <p className='font-mono'>{interestingFact}</p>
    <div className="card-actions justify-end">
      <button className="btn">Buy Now</button>
    </div>
  </div>
</div>
              )
            })
          }
        </div>


    </section>
  )
}

export default Information
