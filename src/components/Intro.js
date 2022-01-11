import React from 'react'

const Intro = (props) => {
  return (
    <div className={`${props.classes}`}>
      <h1 className="text-2xl font-medium mb-4 leading-6">Your Measurements</h1>
      <p className="text-sm"> We created this handy Self Fit Guide to help you determine the best bike size for your needs. Use a partner to help measure and record your fit measurements and we’ll be better prepared to help you find the ideal bike for your body and preferred riding style:</p>
      <ul className="list-disc list-inside text-sm my-4">
        <li>HEIGHT: In socks or bare feet and with your heels and buttocks against the wall, stand straight without slouching and place a ruler or other straight edge on top of your head. Mark the spot and measure from the ground up to determine your height in inches or centimeters.</li>
        <li>INSEAM: Don’t just enter your pant size, that’s not what we’re after here. Instead, stand with your feet 6-8 inches apart and with your heels against the wall. Place the straight edge snug to your crotch - about the same pressure as you feel when seated on your bike saddle - and measure from that point to the ground.</li>
        <li>TORSO: While seated on a stool with your back and pelvis touching the wall, find your shoulder’s Acromioclavicular joint, also known as the AC joint. Measure from the AC to the top of the stool. Measure from both shoulders and average the distance.</li>
      </ul>
      <p className="text-sm">If you currently have a bike fit you enjoy please measure that bike and reach out to us with your fit at info@contenderbicycles.com</p>
      <p className="text-sm"><br/>For information on how to properly measure your bike click <a href="https://www.youtube.com/watch?v=nQ-G5ZH46kI" rel="noreferrer" target="_blank">here</a></p>
    </div>
  )
}

export default Intro
