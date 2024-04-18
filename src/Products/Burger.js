import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { useState } from 'react';
import {connect } from 'react-redux';
import { addToCart } from '../Redux/Action';
import './Pizzas.css';
function Burger({addToCart}){
  var settings = {
    
    infinite: true,
    speed: 500,
    autoplay:true,
    autoplaySpeed:5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    showArrow:true
  };

      const burgurimg=['burgur-1.png','burgur-2.png','burgur-3.png','burgur-4.png','burgur-5.png'];
      const Productname=['product1','product2','product3','product4','product5']
      const price=[700,1999,399,699,499]
      const Categories='Burger'



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
          img:burgurimg[index],
          price:price[index]}))
      };
    
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
          img:burgurimg[index],
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
              <img className='burgur-product-image' src={ burgurimg[index]}/>
              <br></br>
              <h3>{price[index]}{''}</h3><br></br>
                <h2>{product}{''}</h2>
              <br></br>
            <button className='burgur-product-btn' onClick={()=>Handletocart(index,product)} >Add to Cart </button>
                </div>
            
            ))}
             </Slider>
            </div>
        </div>
    )
}


export default connect(null,{addToCart})(Burger);