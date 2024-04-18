
import React from 'react';
import { Provider } from 'react-redux';
import store from '../Redux/Store';
import Cart from '../Redux/Cart';



function Addtocart(){
    

    return(
        <div>
	        <Provider store={store}> 
		<div className="addtocart-detail">
            <Cart/>
		</div>
             </Provider>
		 
        </div>
        )
        }


export default Addtocart;