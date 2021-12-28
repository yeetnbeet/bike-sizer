import React, { useState } from 'react'
const SizeForm = (props) => {
  const [name, setName] = useState('')
  const [height, setHeight] = useState('')
  const [inseam, setInseam] = useState('')
  const [torsoLength, setTorsoLength] = useState('')
  const [email,setEmail] = useState('')    
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
  const emailFieldHandler = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  }
  const handleForm = (e) => {
    e.preventDefault()    
    console.log('form submitted')    
    const user = {
      name: name,
      email: email,
      height: height,
      inseam: inseam,
      torsoLength: torsoLength,
      metricsFlag: false,
      riderFit: {saddleHeight:'',
        saddleStack:'',
        stackHeight:['',''],
        reach:''
      },      
      setRiderFit: function(){        
        const saddleHeight = this.inseam *.883 ; 
        const saddleStack = saddleHeight*Math.cos(.296706)
        const stemHeightRange = [Math.floor(.2*this.inseam - 11), Math.floor(.2*this.inseam - 13)]
        const stackHeight = [Math.floor(saddleStack-stemHeightRange[0]),Math.floor(saddleStack-stemHeightRange[1])] ;              
        const reach = .090909091*(3*this.height+1.5*this.torsoLength-105.5);        
        this.riderFit.saddleHeight = saddleHeight ;
        this.riderFit.saddleStack = saddleStack ;
        if(stackHeight[0] !== 11){
        this.riderFit.stackHeight = stackHeight ;} 
        this.riderFit.reach = [reach,reach+4] ;
      }
    }
    user.setRiderFit(); 
    props.onFormSubmit(user)    
    setName('')
    setHeight('')
    setInseam('')
    setTorsoLength('')
    setEmail('')   
  }
  return (
    <form onSubmit={handleForm} className={`flex flex-col ${props.classes}`}>
      <input type="text" placeholder="Name" value={name} onChange={nameFieldHandler} className="border-2 rounded-md my-2 p-2" />
      <input type="text" placeholder="Email" value={email} onChange={emailFieldHandler} className="border-2 rounded-md my-2 p-2" />
      <input type="text" placeholder="Height (cm)" value={height} onChange={heightFieldHandler} className="border-2 rounded-md my-2 p-2" />
      <input type="text" placeholder="Inseam (cm)" value={inseam} onChange={inseamFieldHanlder} className="border-2 rounded-md my-2 p-2" />
      <input type="text" placeholder="Torso Length (cm)" value={torsoLength} onChange={torsoLengthFieldHandler} className="border-2 rounded-md my-2 p-2" />
      <input type="submit" className="bg-blue-500 text-white p-2 my-2 rounded-md hover:bg-blue-300 hover:text-blue-800" />
    </form>
  )
}
export default SizeForm
