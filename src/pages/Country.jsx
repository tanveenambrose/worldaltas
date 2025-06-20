import React, { useEffect, useState, useTransition } from 'react'
import Header from './Header'
import Footer from './Footer'
import { getCountryData } from '../api/postApi';
import Loader from '../api/Loader';
import CountryCard from './CountryCard';
import SearchFilter from './SearchFilter';


const Country = () => {

  const [isPending, startTransition]= useTransition();
  const [countries, setCountries]= useState([]);

  const [search, setSearch]= useState('');
  const [filter, setFilter]= useState('all');

  useEffect(()=>{
    startTransition(async()=>{
      const res = await getCountryData();
      setCountries(res.data);
    });
  },[]);

  if(isPending) return <Loader/>;

  return (
     <>
    <Header/>
    <section className='container mx-auto bg-gray-500 py-10 px-4'>

      <SearchFilter search={search} setSearch={setSearch} filter={filter} setFilter={setFilter}/>


      <ul className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-center text-black font-bold'>
        {
         countries.map((curCountry, index) => {
          return <CountryCard country={curCountry} key={index}/>
         })
        }
      </ul>
    </section>
    <Footer/>
    </>
  )
}

export default Country
