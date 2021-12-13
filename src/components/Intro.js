import React from 'react'

const Intro = (props) => {
  return (
    <div className={`${props.classes}`}>
      <h1 className="text-2xl font-medium mb-4 leading-6">Your Measurements</h1>
      <p className="text-sm">To find the right size bike for you, we'll need some basic size info:</p>
      <ul className="list-disc list-inside text-sm my-4">
        <li>Your height, measure From the floor to the top of the head with back against a wall</li>
        <li>Your inseam, measure from the crotch seam to the floor with the legs staight</li>
        <li>Your torso length, while sitting on a stool with back against a wall, measure from the top of the shoulder to the top of the stool</li>
      </ul>
      <p class="text-sm">It will also be helpful to get the saddle height and saddle to bar measurement from your current bike (if possible).</p>
    </div>
  )
}

export default Intro
