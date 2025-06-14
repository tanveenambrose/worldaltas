import React from 'react';
import Header from './Header';
import Footer from './Footer';


const Home = () => {
  return (
    <>
      <Header />

      <main className=" mx-auto container hero-section main">
        <div className="container mx-auto grid grid-cols-6">
          <div className="hero-content">
            <h1 className="text-4xl"> Explore the world, One Country at a Time</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto veritatis, quisquam ex, vel nam minima suscipit corrupti temporibus earum accusamus animi molestias cumque. Quod a natus, rerum repellendus repudiandae aspernatur!</p>
            <button className='btn btn-darken btn-inline bg white-box'>Start Exploring</button>
          </div>
          <div className="hero-image"></div>
        </div>

        <div className="container mx-auto grid grid-cols-6">

        </div>
      </main>

      <Footer />
    </>
  );
};

export default Home;
