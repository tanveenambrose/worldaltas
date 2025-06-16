import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Button, Checkbox, Label, TextInput } from "flowbite-react";

const Contact = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
    console.log("Checkbox checked:", e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isChecked) {
      alert("You must agree to remember me before submitting.");
      return;
    }
    alert("Form submitted successfully with checkbox checked: " + isChecked);
    // Here you can add further form submission logic
  };

  return (
    <>
      <Header/>

      <section className='bg-black text-white '>
        <div className='py-14'>
          <h1 className='text-center font-mono text-3xl'>Contact</h1>
        </div>

        <div className='flex justify-center'>
          <form className="flex max-w-md flex-col gap-4 pb-12" onSubmit={handleSubmit}>

            <div>
              <div className="mb-2 block ">
                <Label htmlFor="name" className='text-white'>Your Full Name</Label>
              </div>
              <TextInput id="name" type="name" placeholder="Enter Your Name" required />
            </div>

            <div>
              <div className="mb-2 block ">
                <Label htmlFor="email1" className='text-white'>Your email</Label>
              </div>
              <TextInput id="email1" type="email" placeholder="name@gmail.com" required />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="password1" className='text-white'>Your password</Label>
              </div>
              <TextInput id="password1" type="password" placeholder='Passworld Here !' required className='px-14' />
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" className='checkbox checkbox-primary bg-white' id="agree" checked={isChecked} onChange={handleCheckboxChange} />
              <Label htmlFor="agree" className='text-white'>Remember me</Label>
            </div>

            <Button type="submit" className='text-white btn btn-success'>Submit</Button>
          </form>
        </div>

      </section>

      <Footer/>
    </>
  )
}

export default Contact
