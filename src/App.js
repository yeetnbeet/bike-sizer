import React, { useState } from 'react'

import Header from './components/Header'
import Intro from './components/Intro'
import SizeForm from './components/SizeForm';
import Output from './components/Output'

import Footer from './components/Footer'


function App() {

  const [user, setUser] = useState('')

  const displaySize = (user) => {
    console.log(`inseam:${user.inseam}`)
    console.log(`torsolength:${user.torsoLength}`)
    console.log(`stack:${user.riderFit.stackHeight[0]}`)
    setUser(user)
  }

  return (
    <div className="container mx-auto px-8 flex flex-col sm:flex-row flex-wrap">
      <Header classes="w-full"/>
      <Intro classes="sm:w-1/2 p-4"/>
      <SizeForm onFormSubmit={displaySize} classes="sm:w-1/2 p-4" />
      <Output outputData={user} classes="w-full p-4 mt-4" />
      <Footer />
    </div>
  );
}

export default App;
