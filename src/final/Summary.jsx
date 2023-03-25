import React from "react";
import "../style/final.css";
import ItemsAvail from "./ItemsAvail";
import Slider from '../final/slider'
import '../style/final.css'

export default function Summary(props) {
  return (
  <div id="body">
        <div id="slider">
          <Slider/>
        </div>
       <div id="paraItems">
         <div id="items"> 
           <ItemsAvail cart={props.cart} handleClick={props.handleClick}/>
         </div>
        <div id="para">
         <div>
          <h1>Taste, For You !</h1>
          <p> Lorem ipsum dolor sit amet consectes veritatis unde quidem nostrum </p>
          <p> Lorem ipsnus ipsam cumquevab eos asperiores animi</p>
          <p> Lorem ipsnus ipsam cumquevab eos asperiores animi</p>
          <p> Lorem ipsnus ipsam cumquevab eos asperiores animi</p>
         </div>
        </div>
    </div>    
  </div>
  );
}
