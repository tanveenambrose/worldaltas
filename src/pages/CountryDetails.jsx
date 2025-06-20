
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
        <NavLink to="/Country"><button className='pb-6 text-md text-white'><IoIosArrowDropleft />Go Back</button></NavLink>
        <img src={countries.flags?.svg} alt={countries.name?.official || "flag"} className='object-cover border-4 w-[300px] h-auto rounded-2xl' />
        <p className='text-center font-bold text-white font-mono'>{countries.name?.common}</p>
      </div>
      <div className='grid col-span-1 text-center my-auto'>
        <p className='text-3xl font-semibold text-yellow-200 mb-6'>{countries.name?.official}</p>
        <p className='font-semibold text-yellow-200'><span className='text-gray-200'>Capital : </span>{countries.capital}</p>
        <p className='font-semibold text-yellow-200'><span className='text-gray-200'>Population : </span>{countries.population}</p>
        <p></p>
      </div>
       
        
    </section>
    <Footer/>
    </>
  )
}

export default CountryDetails
