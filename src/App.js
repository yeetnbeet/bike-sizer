import React, { useState } from 'react'

import Intro from './components/Intro'
import SizeForm from './components/SizeForm';
import Output from './components/Output'

function App() {

  const [user, setUser] = useState('')

  const displaySize = (user) => {
    console.log(`${user.inseam}`)
    setUser(user)
  }

  return (
    <div className="container mx-auto px-8">
      <Intro />
      <SizeForm onFormSubmit={displaySize} />
      <Output outputData={user} />
    </div>
  );
}

export default App;
