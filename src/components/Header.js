import React from 'react'
import logo from '../images/contender-logo-white.png'

const Header = (props) => {
  return (
    <header className={`${props.classes} h-24 p-4 px-8 bg-red-600 rounded-md my-4 text-white shadow-lg flex justify-between items-center`}>
      <img src={logo} alt="Contender Bicycles Logo" className="h-full" /> 
      <h1 className="text-md sm:text-2xl font-bold">Contender Bike Sizer</h1>

      
    </header>
  )
}

export default Header
