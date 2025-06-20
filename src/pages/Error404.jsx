import React from 'react'
import { NavLink } from 'react-router-dom'

function Error404() {
  return (
    <>
    <img src="/worldaltas/error.jpg" alt="" />
    <NavLink to='/'><button>GO HOME</button></NavLink>
    </>
  )
}

export default Error404
