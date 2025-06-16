import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Information from '../api/Information.jsx'



const About = () => {
  return (
     <div className='bg-gray-300'>
     <Header/>
     <Information/>
    <Footer/>
    </div>
  )
}

export default About
