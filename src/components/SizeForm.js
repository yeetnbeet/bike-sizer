import React, { useState } from 'react'

const SizeForm = () => {

  const [name, setName] = useState('')
  const [height, setHeight] = useState('')
  const [inseam, setInseam] = useState('')



  const handleForm = () => {
    console.log('form submitted')
  }

  const nameFieldHandler = (e) => {
    e.preventDefault()
    setName(e.target.value)
  }

  const heightFieldHandler = (e) => {
    e.preventDefault()
    setHeight(e.target.value)
  }

  const inseamFieldHanlder = (e) => {
    e.preventDefault()
    setInseam(e.target.value)
  }


  return (
    <form onSubmit={handleForm} className="flex flex-col">
      <input type="text" placeholder="Name" value={name} onChange={nameFieldHandler} className="border-2 rounded-md my-1" />
      <input type="text" placeholder="Height" value={height} onChange={heightFieldHandler} className="border-2 rounded-md my-1" />
      <input type="text" placeholder="Inseam" value={inseam} onChange={inseamFieldHanlder} className="border-2 rounded-md my-1" />
      <input type="submit" />
    </form>
  )
}

export default SizeForm
