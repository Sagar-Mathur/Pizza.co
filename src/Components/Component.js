import './Component.css';
import { Link } from 'react-router-dom';

function Component(){
return(
    <div>
         <div>
                <div className='free-delivery-banner' style={{backgroundImage:'url(bg-shade.jpg)'}}>
                    <h2>Free Delivery</h2>
                    <h1>SANDWICH DAY</h1>
                    <h3><text>$</text>3<span>99rs</span></h3>
                    <p>Sandwich<br></br>Salads<br></br>Drinks</p>
                    <Link to='/men'><button>ORDER ONLINE</button></Link>
              <img src='lines.png'/>  
                </div>
            </div>
    </div>
)
}

export default Component;