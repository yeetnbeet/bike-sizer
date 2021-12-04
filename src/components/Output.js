import React from 'react'

const Output = (props) => {
  
  const user = props.outputData
  
  return (
    <div className={`${props.classes} bg-gray-100 rounded-lg h-96`}>
      <h1 >Your Bike Measurements</h1>
      <p className="text-lg"><strong>Name:</strong> {user.name}</p>
      <p className="text-lg"><strong>Height:</strong> {user.height}</p>
      <p className="text-lg"><strong>Inseam:</strong> {user.inseam}</p>
      <p className="text-lg"> <strong>Torso Length:</strong> {user.torsoLength} </p>
      <p className="text-lg"><strong>Saddle Height:</strong> {user.riderFit.saddleHeight}</p>
      <p className="text-lg"><strong>Stack Height:</strong> {user.riderFit.stackHeight[0]} to {user.riderFit.stackHeight[1]}</p>
      <p className="text-lg"><strong>Reach:</strong>{user.riderFit.reach}</p>
    </div>
  )
}

export default Output
