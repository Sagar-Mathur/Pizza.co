// Cart.js
import React from 'react';
import { connect } from 'react-redux';
import { Store } from 'redux';
import './Cart.css';

const Cart = ({ cart}) => {
  
function hideproducts(){
  document.getElementById('show').style.display='none'
}
  
  
  return (
    <div>
      <div className='product-table' id='show'>

      <h2></h2>
      <table  > 
         <h3 id='hider' onClick={hideproducts}>x</h3>
          <tr>
            <th>product</th>
            
            <th>price</th>
          </tr>
        
        {cart.map((item) => (
          <tr >
            <td><img id='shop-image' src={item.img} /><span className='product-name'>{item.name}</span></td>
            <td ><span className='product-shop-price'>{item.price}</span></td>
          </tr>

))}
      </table>
      
      </div>
    
     <h1 className='cart-length'>{cart.length}</h1>
</div>
    


    
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps)(Cart);
