import React from 'react'

import Intro from './components/Intro'
import SizeForm from './components/SizeForm';
import Output from './components/Output'

function App() {

  const displaySize = (user) => {
    console.log(`${user.name}`)

    const sizeOutput = user

  }


  return (
    <div>
      <Intro />
      <SizeForm onFormSubmit={displaySize} />
      <Output  outputData={sizeOutput} />
    </div>
  );
}

export default App;
