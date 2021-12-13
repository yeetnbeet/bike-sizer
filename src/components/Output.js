import React from 'react'

const Output = (props) => {

  //this is outdated and wil soon be eliminated (handled in the form now)
  const user = props.outputData
  const saddleHeight = user.inseam * .882
  const saddleStack = saddleHeight*Math.cos(.305)
  //(.296706)
  const stemHeightRange = [Math.floor(.2*user.inseam - 11), Math.floor(.2*user.inseam - 13)]
  const stackHeightRange = [Math.floor(saddleStack-stemHeightRange[0]),Math.floor(saddleStack-stemHeightRange[1])]

  
  return (
    <div className={`${props.classes} bg-gray-100 rounded-lg h-96`}>
      <h1 >Your Bike Measurements</h1>
      <p className="text-lg"><strong>Name:</strong> {user.name}</p>
      <p className="text-lg"><strong>Height:</strong> {user.height}</p>
      <p className="text-lg"><strong>Inseam:</strong> {user.inseam}</p>
      <p className="text-lg"> <strong>Torso Length:</strong> </p>
      <p className="text-lg"><strong>Saddle Height:</strong> {saddleHeight}</p>
      <p className="text-lg"><strong>Stem Height:</strong> {stemHeightRange[0]} to {stemHeightRange[1]}</p>
      <p className="text-lg"><strong>Stack Height:</strong> {stackHeightRange[0]} to {stackHeightRange[1]}</p>
    </div>
  )
}

export default Output
