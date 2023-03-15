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
    <div id='body1'>
        <div id='img'><img src={bg} alt="imgError"/></div>
        <div id='summary'><p id='para'><h1>Delicious Food, For You </h1><p> Lorem ipsum dolor sit amet consectes veritatis unde quidem nostrum molestiae facilis quas iure recusandae? </p> <p>Lorem ipsum dolor r amet accusantium modi debitis minus ipsam cumque ab eos asperiores animi!</p> <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate placeat magni nihil is vel.</p></p> </div>
    </div>
    
    </>
  )
}
