import React from 'react'

const Intro = (props) => {
  return (
    <div className={`${props.classes} `}>
      <h1 className="text-2xl font-medium mb-4 leading-6">Your Measurements</h1>
      <p className="text-sm">To find the right size bike for you, we'll need some basic size info:</p>
      <ul className="list-disc list-inside text-sm my-4">
        <li>Your height</li>
        <li>Your inseam</li>
        <li>Your upper body height</li>
      </ul>
      <p class="text-sm">It will also be helpful to get the saddle height and saddle to bar measurement from your current bike (if possible).</p>
    </div>
  )
}

export default Intro
