import React, { useState } from 'react'

const SizeForm = () => {

  const [name, setName] = useState('')


  const handleForm = () => {
    console.log('form submitted')
  }

  const nameFieldHandler = (e) => {
    e.preventDefault()
    setName(e.target.value)
    console.log(name)
  }


  return (
    <form onSubmit={handleForm}>
      <input type="text" placeholder="Name" value={name} onChange={nameFieldHandler}></input>
    </form>
  )
}

export default SizeForm
