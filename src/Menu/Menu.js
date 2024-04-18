import Categories from '../Body/Categories';
import Product from '../Products/Product';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import './Menu.css';
import { useState } from 'react';
import {connect } from 'react-redux';
import { addToCart } from '../Redux/Action';
import { Link } from 'react-router-dom';
import Pizzas from '../Products/Pizzas';
import Burger from '../Products/Burger';
import Drink from '../Products/Drink';
import Salad from '../Products/Salad';
import Toast from '../Products/Toast';

function Menu(){
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay:true,
        autoplaySpeed:2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        showArrow:true
      };
      
  

  function pizzas(){
    document.getElementById('pizza').style.display='block';
    document.getElementById('burgur').style.display='none';
    document.getElementById('drink').style.display='none';
    document.getElementById('toast').style.display='none';
    document.getElementById('salad').style.display='none';
  }

  function burgurs(){
    document.getElementById('pizza').style.display='none';
    document.getElementById('burgur').style.display='block';
    document.getElementById('drink').style.display='none';
    document.getElementById('toast').style.display='none';
    document.getElementById('salad').style.display='none';
  }
  function drinks(){
    document.getElementById('pizza').style.display='none';
    document.getElementById('burgur').style.display='none';
    document.getElementById('drink').style.display='block';
    document.getElementById('toast').style.display='none';
    document.getElementById('salad').style.display='none';
  }
  function toasts(){
    document.getElementById('pizza').style.display='none';
    document.getElementById('burgur').style.display='none';
    document.getElementById('drink').style.display='none';
    document.getElementById('toast').style.display='block';
    document.getElementById('salad').style.display='none';
  }
  function Salads(){
    document.getElementById('pizza').style.display='none';
    document.getElementById('burgur').style.display='none';
    document.getElementById('drink').style.display='none';
    document.getElementById('toast').style.display='none';
    document.getElementById('salad').style.display='block';
  }
  

    return(
        <div>
            <div className='menues'>
                <div>
                    <ul>
                        <Link to='#Pizzas'><li onClick={pizzas}>Pizzas</li></Link>
                        <Link to='#burgur'><li onClick={burgurs} >Burgurs</li></Link>
                        <Link to='#drink'><li onClick={drinks}>Drinks</li></Link>
                        <Link to='#toast'><li onClick={toasts}>toast</li></Link>
                        <Link to='#salad'><li onClick={Salads}>Salads</li></Link>
                       
                    </ul>
                </div> 
            </div>
    
   {/*---------------------------------------------burgur----------------------------------*/}        
   
           <div id='burgur'>
           <Burger/>
                
           </div>
   {/*---------------------------------------------pizza----------------------------------*/}        

           
           <div id='pizza'>
             <Pizzas/>
           </div>
   {/*---------------------------------------------drink----------------------------------*/}        

           <div>
           <div id='drink'>
           <Drink/>
           </div>
           </div>
{/*---------------------------------------------salad----------------------------------*/}        
            
           <div id='salad'>
                 <Salad/>
                </div>
            
           

  {/*---------------------------------------------toast----------------------------------*/}        
  <div>
           <div id='toast'>
               <Toast/>
           </div>
           
        </div>
        </div>
    )
}

export default connect(null,{addToCart})(Menu);