import { Link } from 'react-router-dom';
import './Header.css'
function Header(){
    function showproducts(){

        document.getElementById('show').style.display='block';
        
    }
    
    return(
        <div>
            <div className='top-header-bar' >
               <Link to='/'> <h2>Welcome to Pizza.co</h2></Link>
                <ul>
                    <Link to='/'><li>Home</li></Link>
                    <li><Link to='/Allproducts'>
                       <select  id="store-pro">
                       <option >Menus</option>
                     <option> <Link to='/burgur'>BURGER</Link></option>
                     <option> <Link to='/pizza'>PIZZAS</Link></option>
                     <option> <Link to='/salad'>SALAD</Link></option>
                     <option> <Link to='/drink'>DRINK</Link></option>
                     <option> <Link to='/toast'> TOAST</Link></option>

                   </select>
                    </Link>
                    </li>
                    
                    <Link to='/news'><li>News</li></Link>
                    <Link to='/about'><li>About us</li></Link>




                </ul>
                <img src='bag.png' onClick={showproducts}/>
                
            </div>
        </div>
    )
}


export default Header;