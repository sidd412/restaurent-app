import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import './header.css'
import bg from './bg1.jpg'

export default function Header() {
  return (
    <>
    <div id='head'>
    <div id='ele1'><h2>SidMeals</h2></div>
    <div id='ele2'><b> &nbsp; <AiOutlineShoppingCart/> </b> &nbsp;&nbsp; Your Cart &nbsp;<b id='num'>&nbsp; 0 &nbsp; </b> </div>
    </div>
    <div id='image'><img src={bg} alt="imgError" id='img' /></div>
    </>
  )
}
