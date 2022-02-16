import React from 'react'
import logo from '../images/contender-logo-white.png'

const Header = (props) => {
  return (
    <header className={`${props.classes} h-36 sm:h-24 p-4 px-4 sm:px-8 bg-red-600 rounded-md my-4 text-white shadow-lg flex sm:flex-row flex-col justify-between items-center`}>
      <img src={logo} alt="Contender Bicycles Logo" className="h-1/2 sm:h-full" /> 
      <h1 className="mt-4 sm:mt-0 text-xl sm:text-2xl font-bold">Contender Bike Sizer</h1>
    </header>
  )
}

export default Header
