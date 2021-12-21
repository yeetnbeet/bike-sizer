import React from 'react'

const Output = (props) => {
  
  const user = props.outputData

  if(user.height>=0 && user.inseam>=0 && user.torsoLength>=0){
  return (
    <div className={`${props.classes} bg-gray-100 rounded-lg h-96 flex flex-col justify-around lg:flex-row sm:text-3xl items-center`}>

      <div className="">
        <h1>Your Measurements</h1>
        <p className="text-lg"><strong>Name:</strong> {user.name}</p>
        <p className="text-lg"><strong>Height:</strong> {user.height}</p>
        <p className="text-lg"><strong>Inseam:</strong> {user.inseam}</p>
        <p className="text-lg"> <strong>Torso Length:</strong> {user.torsoLength}</p>
      </div>

      <div className="text-center flex flex-col justify-end items-stretch">
        <h1 className="">Your Suggested Bike Measurements</h1>
        <div className="flex justify-evenly space-x-2">
        <p className="text-base sm:text-lg block text-center"><span className="text-2xl md:text-4xl p-8 block">{Math.round(user.riderFit.saddleHeight*10)/10}</span><strong className="block">Saddle Height</strong> </p>
        <p className="text-lg block text-center"><span className="text-2xl md:text-4xl p-8 block ">{user.riderFit.stackHeight[0]} to {user.riderFit.stackHeight[1]}</span><strong className="block">Stack Height</strong> </p>
        <p className="text-lg block text-center"><span className="text-2xl md:text-4xl p-8 block ">{Math.round(user.riderFit.reach*10)/10}</span><strong className="block">Reach</strong></p>
        </div>
      </div>
      
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
