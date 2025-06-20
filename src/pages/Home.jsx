import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { SlRocket } from "react-icons/sl";
import Information from '../api/Information.jsx'


const Home = () => {
  return (
    <>
      <Header />

      <main className="mx-auto container bg-gray-700 text-white mt-2 rounded-b-2xl px-4 hero-section main">
        <div className="grid sm:grid-cols-3 gap-4">

          <div className="sm:col-span-2 hero-content flex flex-col">
            <h1 className="text-4xl ">Explore the world, One Country at a Time</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto veritatis, quisquam ex, vel nam minima suscipit corrupti temporibus earum accusamus animi molestias cumque. Quod a natus, rerum repellendus repudiandae aspernatur!</p>
            <button className='btn btn-darken btn-inline bg-white-box space-x-2'>
              <span>Start Exploring</span>
              <SlRocket />
            </button>
          </div>
          
    
            <div className="sm:col-span-1  bg-gray-700 hero-image flex justify-center items-center-safe">
              <img src="/worldaltas/world.png" alt="world"  className="hover:rotate-360 transition-transform duration-2000"/>
            </div>
        </div>
      </main>

      <Information/>

      <Footer />
    </>
  );
};

export default Home;
