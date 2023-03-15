import React from 'react'
import Form from './Form'
import './item.css'
export default function item(props) {
  return (
    <>
    <div id="mainBox">
    <div style={{fontSize:"20px"}}>
      <div style={{fontWeight:"bold"}}>{props.foodNmae} </div>
      <div style={{fontStyle:"italic"}}>This is a delicious food</div>
      <div style={{color:"red", fontWeight:"bold"}}>$ {props.cost}.00</div> 
    </div>
    <Form/>
    </div><hr/>
    </>
  )
}
