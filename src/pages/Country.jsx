import React, { useEffect, useState, useTransition } from 'react'
import Header from './Header'
import Footer from './Footer'
import { getCountryData } from '../api/postApi';
import Loader from '../api/Loader';


const Country = () => {

  const [isPending, startTransition]= useTransition();
  const [countries, setCountries]= useState([]);

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
    <section className='container mx-auto bg-gray-500'>
      <ul className='grid md:grid-cols-4'>
        {
        
        }
      </ul>
    </section>
    <Footer/>
    </>
  )
}

export default Country
