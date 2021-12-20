import React from 'react'

const Output = (props) => {
  
  const user = props.outputData

  if(user.height>=0 && user.inseam>=0 && user.torsoLength>=0){
  return (
    <div className={`${props.classes} bg-gray-100 rounded-lg h-96`}>
      <h1 >Your Bike Measurements</h1>
      <p className="text-lg"><strong>Name:</strong> {user.name}</p>
      <p className="text-lg"><strong>Height:</strong> {user.height}</p>
      <p className="text-lg"><strong>Inseam:</strong> {user.inseam}</p>
      <p className="text-lg"> <strong>Torso Length:</strong> {user.torsoLength} </p>
      <p className="text-lg"><strong>Saddle Height:</strong> {Math.round(user.riderFit.saddleHeight*10)/10}</p>
      <p className="text-lg"><strong>Stack Height:</strong> {user.riderFit.stackHeight[0]} to {user.riderFit.stackHeight[1]}</p>
      <p className="text-lg"><strong>Reach:</strong> {Math.round(user.riderFit.reach[0]*10)/10} to {Math.round(user.riderFit.reach[1]*10)/10}</p>
    </div>
  )}
  else{
    return(
      <div>
        
      </div>
    )
  }
}

export default Output
