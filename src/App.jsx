import React from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Country from './pages/Country'
import About from './pages/About'
import Error404 from './pages/Error404'
import CountryDetails from './pages/CountryDetails'

const App = () => {
  return (
    <>
     <BrowserRouter>
       <Routes>
         <Route path='/worldaltas' element={<Home />} />
         <Route path='/Contact' element={<Contact />} />
         <Route path='/Country' element={<Country />} />
         <Route path='/About' element={<About />} />
         <Route path='*' element={<Error404/>} />
         <Route path='/Country/:id' element={<CountryDetails/>}/>
       </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
