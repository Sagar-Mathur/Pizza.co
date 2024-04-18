import React, { useState } from 'react';

function Duplicate() {
 const [cart,setCart]=useState([]);
 const addTocart=(product)=>{const existingIndex=cart.findIndex(item=>item.id===product.id);
  if(existingIndex!==-1)
  {
    const updatedCart=[...cart];
    updatedCart[existingIndex].quantity+=1;
    setCart(updatedCart);
  }
  else
  {
    setCart([...cart,{...product,quantity:1}]);
  }

};
const removeFromcart=(productid)=>{
  const updatedCart=cart.filter(item=>item.id!==productid);
  setCart(updatedCart);
}
  return(
    <div>
      <h1>Shopping cart</h1>
      <div>
        <h2>Products</h2>
        <ul>
          <li>
            Product 1
            <button onClick={()=>addTocart({id:1,name:'Product1'})}>Add to cart</button>
          </li>
          <li>
            Product 2
            <button onClick={()=>addTocart({id:2,name:'Product2'})}>Add to cart</button>
          </li>
        </ul>
      </div>
      
      <ul>
        {cart.map(item=>(
          <li key={item.id}>{item.name}-Quantity:{item.quantity} <button onClick={()=>removeFromcart(item.id)}>Remove</button></li>
        ))}
      </ul>
    </div>
  )
}

export default Duplicate;