import React, { useState } from 'react'
import './form.css'
export default function Form() {
     const [counter, setCounter] = useState(0);
     const incrementCounter = () => setCounter(counter + 1);
    //  let decrementCounter = () => setCounter(counter - 1);
    //  if(counter<=0) {
    //     decrementCounter = () => setCounter(0);
    //   }

  return (
    <div id='form'>
      <div id='el1'><b>Amount</b> <em id='count'>{counter}</em></div>
      <div id='el2'><button onClick={incrementCounter}> + Add </button></div>
    </div>
  )
}
