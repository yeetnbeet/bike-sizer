//import { set } from 'core-js/core/dict'
import React, { useState } from 'react'

const { GoogleSpreadsheet } = require('google-spreadsheet');
//init the sheet
const doc = new GoogleSpreadsheet('1-e1YndrEsvlwQ13tUJii35fTR5PillBqZRYIX7JMQek');
//init the auth
(async function() {
  await doc.useServiceAccountAuth({
    client_email:"bikesizer@steady-shard-335719.iam.gserviceaccount.com",
    private_key:"-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDEzctOa89Q6xjl\niPPg8wOCtsNz21EG2Ub/7l6bJONHH30hB73+guO9m9w58NuE2zsANwGVTVBv6OCh\nwwYyMAkWUHWZl3TMqM1s4Z3XFHy2arOVrAZbsAeCbnD6a898y+8//7Fe2lSyjLmk\n53BHL/71OEQQf1uml/2PTcz5BP6X9HSpdEtL4W747WmaNnGie1hanXMROFVb+8QC\nGEar0icA5hu7uecZWAwig3/JZndcm9fuPD+jpHI6Dez5VYU50xIxac7LuEv2/xVS\nmoU7An4yv0kqb+rqDCkY5GstClP3Y0eAeyHfVcnGLNquVLj8UYw8YQBMFZKXkZD6\nB4pGE/ltAgMBAAECggEACJHk6bAkfHkTAffMlZNE0rMuYAQBC254ZYUAm0/oEmeg\nIB6WsEJh3sFZPdqrrHrhdFkbhAq0VyiJvkbgT7Irdcx2JS86YlPIHOwsM+VL/aON\ng2sqHGGrdLYQzGQtH67qZwaK4j8D/ixw7xSMR+/38b9hU2NAX0jyEoSdnuBlTReV\nS3raLJId9Llhyd41v4l2Qx1plhQw6wQBQQPm6mhlL5eLmoDX3xF3XDYxU1u8Zqaf\ncYd7386aPT+pULIUGTMDt/Vbw4NKP5BS2zSCEe5I4Y4DhhCo9Po/M2Q7A4TDNLS5\nXROTk0J1EE52x/b8jst2/1WFcBV9n8Bgzg2pCMDynwKBgQDu3ZAk19zDZpCw46P6\n9zxLlnslm9BjOCn4+H1zokFeHVR9cjvm+DsSPdhFWDWhfKfMMozbf/6d8x87jUeF\nRXWkxsFQMVi0UdsP8SvQgF9xDgJ3dJ0mdc1SmH0udn2Ln3pRnOMdhaflLHiYndaL\nWioy1m1ms2hLWLt93k6iEtRRNwKBgQDS69Pa6houieonT4R1ldVDGtjY0H2MwYag\ngEi05iJwxVza2QnFO1JAccDfnMQyGcAZS3EwrtNR5A7Fe9ZP6mXOoNFGYppHt5GD\nBfYqAeed8KTcd7d+1N5BcjTRLjwp2rgzP9wS3f1XdSHiIeqRhfwSHducFW53h38G\n4oJfyICsewKBgQDbw21C+HdcL5kfpdDQrXcD9EcIqvpmzt2O+tAw+y8477M0V01V\nizyN4+h+pFFzacTX0gpWSMRxfaVWnP0YWHeMSnDA3yXFgSoS2Mh+5BzrXwBV9yw+\nnlNxkmpZvRp0wx0+ySELoFSAPRIXF+C0BRid/TpaKuXhrJmTjFy8MKa2sQKBgQCb\nTGRapU/NwGIVu6it4zp5BEVxrmEiyENV3d6qw1/MZKTvxio5fGodZSQ8APM8aFVW\nyoN28uJJQ3/UzE+J2+5F64brKiKqd3C+Zh9P4sMlOVBJvCPxUM6spWhaNI67yn0h\nzv09LxIf2PCvzYUmzN5CgJV4IReLDsrqyNBxsfF8DQKBgQDmEEijp3VxnfKGoXTs\nqyqmPSGejvItT6fv1e9RB3ziPaKrXO2m/yVOydAozMTGdGwV55iv5qnsz3AAAGo5\ndD8KT7SrJ/HfieEQQiBWGW/Atz5vZzJGm7P9Vl0fxRExbnNAaV5dmKrgTrxQzxBW\n5/xEkecnxYBJSor2h0cJZsS+vQ==\n-----END PRIVATE KEY-----\n"
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

    (async function() {
      await doc.loadInfo(); // loads document properties and worksheets
      const sheet = doc.sheetsByIndex[0];
      const newRow = await sheet.addRow({col1:user.name,col2:user.saddleHeight},"insert") ;
      console.log(doc.title);
      
    }());
    
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
