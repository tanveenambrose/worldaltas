import React from 'react'

function CountryCard({country}) {
  return (
    <>
    <li>{country.name.common}</li>
    </>
  )
}

export default CountryCard
