import React  from 'react'
import '../style/final.css'
import Form from './Form';

const foods = [
    { id:1, name: "paratha", price: 20 },
    { id:2, name: "sandwitch", price: 30 },
    { id:3, name: "biryani", price: 25 },
    { id:4, name: "bread-jam", price: 10 },
    { id:5, name: "curry-rice", price: 30 },
  ];

export default function ItemsAvail(props) {
  return (
     <div>
          {foods.map((food) => {
            return (
              <>
                <div id="boxes">

                  <div id="box1">
                    <div>
                      <b style={{fontStyle:"italic"}} > {food.name} </b>
                    </div>
                    <i>This is a delicious dish </i>
                    <div>
                      <b style={{fontStyle:"italic"}}>$ {food.price}.00</b>
                    </div>
                  </div>

                  <div id="box2">
                    {/* <Form fun={addToCart} fun2={removeToCart}/> */}
                    <Form id={food.id} name={food.name} price={food.price} cart={props.cart} handleClick={props.handleClick} />
                  </div>

                </div>
                <hr />
              </>
            );
          })}
        </div> 
  )
}
