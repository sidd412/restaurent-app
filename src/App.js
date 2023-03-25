import React, { useState } from 'react'
import Hdr from './final/Hdr'
import Summary from './final/Summary'
import './style/final.css' ;
import Footer from './final/Footer';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function App() {

  const [cart, setCart] = useState([])
  const [warning, setWarning] = useState(false);

  function handleClick(item){
    let isPresent = false;
		cart.forEach((product)=>{
			if (item.id === product.id)
			isPresent = true;
		})
		if (isPresent){
			setWarning(true);
			setTimeout(()=>{
				setWarning(false);
			}, 5000);
			return ;
		}
    
    cart.push(item)
    setCart([...cart])
  }

  function handleChange(item, d){
    let ind = -1;
    cart.forEach((data, index)=>{
			if (data.id === item.id)
				ind = index;
		});
    const tempArr = cart;
		tempArr[ind].qnt += d;
		
		if (tempArr[ind].qnt === 0)
			tempArr[ind].qnt = 1;
		setCart([...tempArr])
  }


  return (
    <div id='bg'>
	  <Hdr cart={cart} handleChange={handleChange} setCart={setCart} />
      <Summary cart={cart} handleClick={handleClick}/>
      {
    	warning && <div>Item is already added to your cart</div>
	  }
	  <Footer/>
    </div>
  )
}

