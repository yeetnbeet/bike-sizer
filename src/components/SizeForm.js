//import { set } from 'core-js/core/dict'
import React, { useState } from 'react'
import steadyShard from 'steady-shard-key.json'

const { GoogleSpreadsheet } = require('google-spreadsheet');
//init the sheet
const doc = new GoogleSpreadsheet('1-e1YndrEsvlwQ13tUJii35fTR5PillBqZRYIX7JMQek');
//init the auth
(async function() {
  await doc.useServiceAccountAuth({
    client_email:steadyShard.client_email,
    private_key:steadyShard.private_key
  });
}());

//testing





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
        
        //const reach = (2*this.inseam-this.torsoLength+29)/3 ; //R=(2inseam-torso+29)/3 or r = .09090909091*(3H+1.5T-115.5) Font Should be Obvia regular
        
        const reach = .090909091*(3*this.height+1.5*this.torsoLength-105.5); // possibly a better equation
        
        this.riderFit.saddleHeight = saddleHeight ;
        this.riderFit.saddleStack = saddleStack ;
        if(stackHeight[0] !== 11){
        this.riderFit.stackHeight = stackHeight ;} //this is hacky, better solution must be found
        this.riderFit.reach = [reach-1,reach+1] ;
      }

    }

    user.setRiderFit();

    //const savedInfo = {name: user.name, height: user.height, inseam: user.inseam, torsoLength: user.torsoLength, saddleHeight: user.riderFit.saddleHeight,
      //stackHeightMin: user.riderFit.stackHeight[0], stackHeightMax: user.riderFit.stackHeight[1], reachMin: user.riderFit.reach[0], reachMax: user.riderFit.reach[1]
    //}

    //(async function() {
      //await doc.loadInfo(); // loads document properties and worksheets
      //const sheet = doc.sheetsByIndex[0];
      //const newRow = await sheet.addRow({Name:user.name,col2:SaddleHeight.saddleHeight},"insert") ;
      //console.log(sheet.columnCount);
      
    //}());
    
    (async function() {
     
    }());

    props.onFormSubmit(user)
    // alert(`${user.name} ${user.height} ${user.inseam} submitted`)
    
    
    //reset form
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
