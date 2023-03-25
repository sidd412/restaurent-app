import React, {useState, useEffect} from 'react'


export default function MyCart(props) {

  const [price, setPrice] = useState(0);
  const handlePrice = ()=>{
    let ans = 0;
    props.cart.map((item)=>(
        ans += item.qnt * item.price
    ))
    setPrice(ans);
}

const handleRemove = (id) =>{
  const arr = props.cart.filter((item)=>item.id !== id);
  props.setCart([...arr]);
  // handlePrice();
}

useEffect(()=>{
  handlePrice();
})

  return (
    <>
    <div>
      {
        props.cart.map((order)=>{
          return(
            <>
            <div style={{margin:"20px", display:"flex", justifyContent:"space-around"}}>
              <div>
                <div>{"Name : "}{order.name}</div>
                <div>
                <button onClick={()=>props.handleChange(order, +1)}> + </button>
                   {order.qnt} 
                   <button onClick={()=>props.handleChange(order, -1)}> - </button>

                    </div>
                <div>{"Price : "} {order.qnt}*{order.price} = {order.price*order.qnt}</div>
              </div>
              <div>
              <button onClick={()=>handleRemove(order.id)}>- Remove</button>
              </div>
            </div>
             <hr />
            </>
            
          )
        })
      }
    </div>
   
   <div> <hr /> <h2>Total : $<i>{price}</i></h2> <hr /> </div>


    </>
  )
}
