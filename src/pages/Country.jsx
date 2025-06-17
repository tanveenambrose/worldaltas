import React, { useEffect, useTransition } from 'react'
import Header from './Header'
import Footer from './Footer'
import { getCountryData } from '../api/postApi';


const Country = () => {

  const [isPending, startTransition]= useTransition();

  useEffect(()=>{
    startTransition(async()=>{
      const res = await getCountryData();
      console.log(res);
    })
  },[]);

  if(isPending) return <h1>Loading....</h1>;

  return (
     <>
    <Header/>
    <h1>Country Page</h1>
    <Footer/>
    </>
  )
}

export default Country
