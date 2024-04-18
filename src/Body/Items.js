import './Items.css'
import { useState } from 'react';
import {connect } from 'react-redux';
import { addToCart } from '../Redux/Action';
function Items( {addToCart}){
  const products = ['Product 1', 'Product 2', 'Product 3','product 4','product 5','product 6','product 7','product 8'];
  const image = ['pizza1.jpeg','pizza2.jpeg','pizza3.jpeg','pizza4.jpeg','pizza6.jpg','pizza7.jpeg','pizza1.jpeg','pizza2.jpeg']; 
  const price=[200,100,400,1000,700,1200,300,180];
      
      function Handletocart(index,products){
        const productdetail={
          Name:products[index],
          img:image[index],
          price:price[index]
        }
        addToCart(productdetail);
        

      }
      
      
    return(
        <div className="items-products">
            <h1 className='headline'>Our Delicious Pizza</h1>
            <div className='inner'>
              <ul>

            {products.map((product, index) => (
            <li>
                <div className='container1' key={index}>
            <img className='product-image' src={image[index]}/>
            <br></br>
            {product}{' '}
            <h1 className='price-tag'>${price[index]}</h1>
            <br></br>
            <button className='product-btn' onClick={()=>Handletocart(index,product)} >Add to Cart </button>
            
            
                </div>
            </li>
        ))}
        </ ul>
          
            </div>
            
            
            
        </div>
    )
            }


export default connect(null,{addToCart})(Items);