import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Button, Checkbox, Label, TextInput } from "flowbite-react";



const Contact = () => {
 

  const handleFormSubmit =(formData)=>{
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);
  }

  return (
    <>
      <Header/>

      <section className='bg-gray-800 text-white '>
        <div className='py-14'>
          <h1 className='text-center font-mono text-3xl'>Contact Us:</h1>
        </div>

        <div className='flex justify-center'>
          <form className="flex max-w-md flex-col gap-4 pb-12" action = {handleFormSubmit}>

            <div>
              <div className="mb-2 block ">
                <Label htmlFor="name" className='text-white'>Your Full Name</Label>
              </div>
              <TextInput id="name" type="name" name='username' placeholder="Enter Your Name" required />
            </div>

            <div>
              <div className="mb-2 block ">
                <Label htmlFor="email1" className='text-white'>Your email</Label>
              </div>
              <TextInput id="email" name='email' type="email" placeholder="name@gmail.com" required />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" className='text-white'>Your password</Label>
              </div>
              <TextInput id="messege" name='messege' type="text" placeholder='Having Issue ?' required className='px-14' />
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" name='checkbox' className='checkbox checkbox-primary bg-white' id="agree"/>
              <Label htmlFor="agree" className='text-white'>Remember me</Label>
            </div>

            <Button type="submit" value='send' className='text-white btn btn-success'>Send</Button>
          </form> 
        </div>

      </section>

      <Footer/>
    </>
  )
}

export default Contact
