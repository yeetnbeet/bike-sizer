import React from 'react'

const Output = (props) => {

  const user = props.outputData

  return (
    <div className={`${props.classes}`}>
      <h1>Output</h1>
      <p>{user.name}</p>
      <p>{user.height}</p>
      <p>{user.inseam}</p>
    </div>
  )
}

export default Output
