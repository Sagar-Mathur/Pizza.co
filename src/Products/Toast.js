import Slider from "react-slick";
import { useState } from 'react';
import {connect } from 'react-redux';
import { addToCart } from '../Redux/Action';

import "slick-carousel/slick/slick.css";
import './Pizzas.css';
function Toast({addToCart}){
    var settings = {
        
        infinite: true,
        speed: 500,
        autoplay:true,
        autoplaySpeed:8000,
        slidesToShow: 3,
        slidesToScroll: 1,
        showArrow:true
      };

      const toastimg=['Toast1.png','toast2.png','toast3.png','toast4.png','toast5.png'];
      const Productname=['product1','product2','product3','product4','product5']
      const price=[700,1999,399,699,499]
      const Categories='Toast'



      const [formdata, setFormdata] = useState({
       Categories:'',
        Name: '',
        img: '',
        price:'',
      
      });
    
      const handleChange = (index,products) => {
        setFormdata(prevState => ({
          ...prevState,
          Categories:Categories,
          Name:products,
          img:toastimg[index],
          price:price[index]})
        )};
    
      const handleSubmit = async () => {
        
        try {
          const response = await fetch('http://localhost:5000/Product', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formdata)
          }); 
          console.log(formdata) 
        } catch (error) {
          console.error('Error:', error);
        }
      };
    





      function Handletocart(index,products){
        var productdetail={
          Categories:Categories,
          Name:products,
          img:toastimg[index],
          price:price[index]
        }
        addToCart(productdetail);
        handleSubmit(productdetail)
        handleChange(index,products)
      }

    return(
        <div className="product-burgur-list">
            <div className="burgur-list">

             <Slider className="slider-burgur"{...settings}>
             
            {Productname.map((product, index) => (
                <div className='burgur-index' key={index}>
              <img className='burgur-product-image' src={ toastimg[index]}/>
              <br></br>
              <h3>{price[index]}{''}</h3><br></br>
                <h2>{product}{''}</h2>
              <br></br>
            <button className='burgur-product-btn'  onClick={()=>Handletocart(index,product)} >Add to Cart </button>
                </div>
            
            ))}
             </Slider>
            </div>
        </div>
    )
}


export default connect(null,{addToCart})(Toast);