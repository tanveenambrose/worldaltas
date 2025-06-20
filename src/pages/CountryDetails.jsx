
import Header from './Header';
import Footer from './Footer';
import { NavLink, useParams} from 'react-router-dom';
import React, { useEffect, useState, useTransition } from 'react';
import Loader from '../api/Loader';
import { getCountryIndiviData } from '../api/postApi';
import { IoIosArrowDropleft } from "react-icons/io";



function CountryDetails() {
    const params = useParams();
      const [isPending, startTransition]= useTransition();
      const [countries, setCountry]= useState(null);

  useEffect(()=>{
    startTransition(async()=>{
      const res = await getCountryIndiviData(params.id);
      if(res.status ===200){
         setCountry(res.data[0]);
      }
      console.log(res);
    });
  },[]);

  if(isPending) return <Loader/>;
  if(!countries) return null;

    console.log(params);
  return (
    <>
    <Header/>
    <section className='container mx-auto grid sm:grid-cols-2 gap-2 py-20 bg-gray-600'>

      <div className='grid col-span-1 px-4 justify-center'>
        <NavLink to="/Country"><button className='border-3 btn bg-amber-600 mb-6 text-md '><IoIosArrowDropleft />Go Back</button></NavLink>
        <img src={countries.flags?.svg} alt={countries.name?.official || "flag"} className='object-cover border-4 w-[300px] h-auto rounded-2xl' />
        <p className='text-center text-xl font-bold text-white font-mono'>{countries.name?.common}</p>
      </div>

      <div className='grid col-span-1 text-center my-auto'>
        <p className='text-3xl font-semibold text-yellow-200 mb-6'>{countries.name?.official}</p>
         <p className='font-semibold text-yellow-200'><span className='text-gray-200'>Native Names : </span> {Object.keys(countries.name.nativeName)
                    .map((key) => countries.name.nativeName[key].common)
                    .join(", ")}</p> 
        <p className='font-semibold text-yellow-200'><span className='text-gray-200'>Official Names : </span> {Object.keys(countries.name.nativeName)
                    .map((key) => countries.name.nativeName[key].official)
                    .join(", ")}</p>
        <p className='font-semibold text-yellow-200'><span className='text-gray-200'>Capital : </span>{countries.capital}</p>
        <p className='font-semibold text-yellow-200'><span className='text-gray-200'>Population : </span>{countries.population.toLocaleString()}</p>
        <p className='font-semibold text-yellow-200'><span className='text-gray-200'>Region : </span>{countries.region}</p>
        <p className='font-semibold text-yellow-200'><span className='text-gray-200'>Sub-Region : </span>{countries.subregion}</p>
        <p className='font-semibold text-yellow-200'><span className='text-gray-200'>Top-Level Domain : </span>{countries.tld[0]}</p>
         <p className='font-semibold text-yellow-200'>
                  <span className='text-gray-200'> Currencies: </span>
                  {Object.keys(countries.currencies)
                    .map((curElem) => countries.currencies[curElem].name)
                    .join(", ")}
                </p>
        <p className='font-semibold text-yellow-200'>
                  <span className='text-gray-200'>Languages: </span>
                  {Object.keys(countries.languages)
                    .map((key) => countries.languages[key])
                    .join(", ")}
                </p>
      </div>
       
        
    </section>
    <Footer/>
    </>
  )
}

export default CountryDetails
