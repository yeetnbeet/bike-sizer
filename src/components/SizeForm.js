import React, { useState } from 'react'

const SizeForm = (props) => {

  const [name, setName] = useState('')
  const [height, setHeight] = useState('')
  const [inseam, setInseam] = useState('')
  const [torsoLength, setTorsoLength] = useState('')
  const [wingSpan, setWingSpan] = useState('')
  const [riderFit, setRiderFit2] = useState('')
  

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

  const torsoLengthFieldHandler = (e) => {
    e.preventDefault()
    setTorsoLength(e.target.value)
  }

  const wingSpanFieldHandler = (e) => {
    e.preventDefault()
    setWingSpan(e.target.value)
  }

  const handleForm = (e) => {
    e.preventDefault()
    
    console.log('form submitted')
    
    const user = {
      name: name,
      height: height,
      inseam: inseam,
      torsoLength: torsoLength,
      metricsFlag: false,
      riderFit: '',
      
      setRiderFit: function(){
        
        const saddleHeight = this.inseam *.833 ; //add math
        const saddleStack = saddleHeight*Math.cos(.296706)
        const stemHeightRange = [Math.floor(.2*this.inseam - 11), Math.floor(.2*this.inseam - 13)]

        const stackHeight = [Math.floor(saddleStack-stemHeightRange[0]),Math.floor(saddleStack-stemHeightRange[1])] ;
        
        const reach = 1 ; //R=(2inseam-torso+29)/3        
        
        if(false){
          saddleHeight = saddleHeight*2.6 //todo this whole thing is for input in inches
          stackHeight = stackHeight*2.6 //todo
          reach = reach*2.6        //todo
        }
        
        const rideFit={
          saddleHeight: saddleHeight,
          stackHeight: stackHeight,
          reach: reach
        }
        
        this.riderFit = rideFit ;
      }

    }

    user.setRiderFit();


    props.onFormSubmit(user)
    // alert(`${user.name} ${user.height} ${user.inseam} submitted`)
    
    //reset form
    setName('')
    setHeight('')
    setInseam('')
    setTorsoLength('')
    setWingSpan('')
    setRiderFit2('')

    //this is one location where I might be able to pass up rider fit data might be better here
    //just need to add a second btn that acts as a reset and use form submit as the calculator
    
    
  }


  return (
    <form onSubmit={handleForm} className={`flex flex-col ${props.classes}`}>
      <input type="text" placeholder="Name" value={name} onChange={nameFieldHandler} className="border-2 rounded-md my-2 p-2" />
      <input type="text" placeholder="Height" value={height} onChange={heightFieldHandler} className="border-2 rounded-md my-2 p-2" />
      <input type="text" placeholder="Inseam" value={inseam} onChange={inseamFieldHanlder} className="border-2 rounded-md my-2 p-2" />
      <input type="text" placeholder="Torso Length" value={torsoLength} onChange={torsoLengthFieldHandler} className="border-2 rounded-md my-2 p-2" />
      <input type="text" placeholder="Wing Span" value={wingSpan} onChange={wingSpanFieldHandler} className="border-2 rounded-md my-2 p-2"/>
      <input type="submit" className="bg-blue-500 text-white p-2 my-2 rounded-md hover:bg-blue-300 hover:text-blue-800" />
    </form>
  )
}

export default SizeForm
