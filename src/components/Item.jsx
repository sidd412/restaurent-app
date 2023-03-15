import React from 'react'
export default function item(props) {
  return (
    <div style={{fontSize:"20px"}}>
      <div style={{fontWeight:"bold"}}>{props.foodNmae} </div>
      <div style={{fontStyle:"italic"}}>This is a delicious food</div>
      <div style={{color:"red", fontWeight:"bold"}}>$ {props.cost}.00</div> <hr />
    </div>
  )
}
