import React from 'react'

const Footer = () => {
  return (
    <div className="flex flex-col text-center container justify-center border-t-2 border-gray-200 mt-4 py-4 sm:flex-row sm:justify-between">
      <small >&copy;copyright 2021-2022 Contender Bicycles</small>
      <small >Questions: <a href="mailto:info@contenderbicycles.com">info@contenderbicycles.com</a></small>
    </div>
  )
}

export default Footer
