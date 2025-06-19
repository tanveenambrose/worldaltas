
import Header from './Header';
import Footer from './Footer';
import { useParams} from 'react-router';
import React, { useEffect, useState, useTransition } from 'react';
import Loader from '../api/Loader';
import { getCountryIndiviData } from '../api/postApi';



function CountryDetails() {
    const params = useParams();
      const [isPending, startTransition]= useTransition();
      const [country, setCountry]= useState([]);

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
    console.log(params);
  return (
    <>
    <Header/>
    <h1>Done</h1>
    <Footer/>
    </>
  )
}

export default CountryDetails
