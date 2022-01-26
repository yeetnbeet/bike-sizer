import React from 'react'

const Output = (props) => {
  
  const user = props.outputData

  if(user.height>0 && user.inseam>0 && user.torsoLength>=0){
  return (
    <div className={`${props.classes} bg-gray-100 rounded-lg h-auto flex flex-col justify-around lg:flex-row sm:text-3xl items-center`}>

      <div className="py-8 flex-1">
        <h1 className="text-xl">Your Measurements</h1>
        <p className="text-lg"><strong>Name:</strong> {user.name}</p>
        <p className="text-lg"><strong>Height:</strong> {user.height} cm</p>
        <p className="text-lg"><strong>Inseam:</strong> {user.inseam} cm</p>
        <p className="text-lg"> <strong>Torso Length:</strong> {user.torsoLength} cm</p>
      </div>

      <div className="py-8 border-t-2 border-gray-300 lg:border-l-2 lg:border-t-0 flex-grow lg:justify-center text-center flex flex-col justify-end items-stretch">
        <h1 className="text-xl">Your Suggested Bike Measurements</h1>
        <div className="flex justify-evenly space-x-2">
        <p className="text-base sm:text-lg block text-center"><span className="text-2xl md:text-4xl px-8 py-6 block">{Math.round(user.riderFit.saddleHeight*10)/10}</span><strong className="block">Saddle Height (cm)</strong> </p>
        <p className="text-base sm:text-lg block text-center"><span className="text-2xl md:text-4xl px-8 py-6 block ">{user.riderFit.stackHeight[0]} to {user.riderFit.stackHeight[1]}</span><strong className="block">Stack Height (cm)</strong> </p>
        <p className="text-base sm:text-lg block text-center"><span className="text-2xl md:text-4xl px-8 py-6 block ">{Math.round(user.riderFit.reach[0]*10)/10} to {Math.round(user.riderFit.reach[1]*10)/10}</span><strong className="block">Reach (cm)</strong></p>
       


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
