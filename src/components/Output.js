import React from 'react'

const Output = (props) => {

  const user = props.outputData

  return (
    <div className={`${props.classes} bg-gray-100 rounded-lg h-96`}>
      <h1 >Your Bike Measurements</h1>
      <p className="text-lg"><strong>Name:</strong> {user.name}</p>
      <p className="text-lg"><strong>Height:</strong> {user.height}</p>
      <p className="text-lg"><strong>Inseam:</strong> {user.inseam}</p>
    </div>
  )
}

export default Output
