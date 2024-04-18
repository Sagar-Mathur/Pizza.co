
import React from 'react';
import { Provider } from 'react-redux';
import store from '../Redux/Store';
import Cart from '../Redux/Cart';

import Allproducts from '../Allproducts';



function Categories(){
    

    return(
        <div>
		<div className="sec2-arrivals">
	        <Provider store={store}> 
          <div className="App">
              <Allproducts/>
            <div>
              <Cart/>
            </div>
          </div>
        
             </Provider>
		</div>
		 
        </div>
        )
        }


        export default Categories;