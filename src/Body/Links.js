
import React from 'react';
import { Provider } from 'react-redux';
import store from '../Redux/Store';
import Cart from '../Redux/Cart';
import Menu from '../Menu/Menu';



function Links(){
    

    return(
        <div>
		<div className="sec2-arrivals">
	        <Provider store={store}> 
          <div className="App">
              <Menu/>
            <div>
              <Cart/>
            </div>
          </div>
        
             </Provider>
		</div>
		 
        </div>
        )
        }


        export default Links;