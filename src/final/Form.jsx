import React, { useState} from 'react'
import '../style/final.css'

export default function Form(props) {
  const [qnt, setQnt] = useState(1)

  function saveLocal(e){
    e.preventDefault()
    const order = {
      id:props.id,
      name:props.name,
      price:props.price, 
      qnt:qnt
    }
    console.log(order)
    props.handleClick(order)
    console.log(props.cart)
    

    setQnt(1)
  }

  return (
    <>
    <form id='form' onSubmit={saveLocal}>
       <input type="number" id="qty" value={qnt}  min={1} placeholder={"Qty"} onChange={(e) => setQnt(e.target.value)} required />
      <button type='submit'> + Add To Cart</button>
    </form>
    </>
  )
}
