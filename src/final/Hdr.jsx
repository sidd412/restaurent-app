import React, { useState} from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import '../style/final.css'
import MyCart from './MyCart'

export default function Hdr(props) {
  const [showCart, setShowCart] = useState(false) ;


  function cartVisibility(){
    let flag = showCart 
    setShowCart(~flag)
  } 

  return (
    <div id='headCart' >
      <div id="head">
        <div>
          <b style={{fontSize:"20px",letterSpacing:"02px"}} >SID-SAT | RESTAURENT</b>
        </div>
        <div id='cartBtn' onClick={cartVisibility}>
          <b style={{fontSize:"20px"}}>
            <AiOutlineShoppingCart />
          </b>
          <i> Your Cart </i> <b id="nett"> {props.cart.length} </b>
        </div>
      </div>
      
      <div id='cart'> 
        {
          showCart? <MyCart cart={props.cart} handleChange={props.handleChange} setCart={props.setCart}/> : <></>
        }
      </div>
    </div >
  )
}
