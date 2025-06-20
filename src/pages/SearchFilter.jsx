import React from 'react'

function SearchFilter({search, setSearch,filter, setFilter}) {
  const handleInputChange =(event)=>{
   event.preventDefault();
    setSearch(event.target.value);
  };

  const handleSelectChange =(event)=>{
    event.preventDefault();
    setFilter(event.target.value);
  };
  return (
    <section className='container grid grid-cols-2 mx-auto pb-8'>
    <div className='col-span-1 flex justify-center items-center'>
      <input type="text" className='bg-white px-4 py-2 border-2 font-bold rounded-2xl' placeholder='Search' value={search} onChange={handleInputChange} />
    </div>

    <div className='col-span-1 flex justify-center items-center'>
      <select value={filter} onChange={handleSelectChange} className='bg-white px-4 py-2 border-2 rounded-2xl text-black text-center font-semibold'>
        <option value="all">All</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
    </section>
  )
}

export default SearchFilter
