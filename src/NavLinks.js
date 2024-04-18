import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import App from './App';
import Items from './Body/Items';
import Header from './Header/Header';
import Slider from 'react-slick';
import Home from './Home';
import Categories from './Body/Categories';
import slider from './Slider/Slider';
import Feature from './Feature/Feature';
import Pizzas from './Products/Pizzas';
import E404 from './E404';
import Burger from './Products/Burger';
import Salad from './Products/Salad';
import Drink from './Products/Drink';
import Toast from './Products/Toast';
import Footer from './Footer/Footer';
import Allproducts from './Allproducts';
import Aboutus from './About/Aboutus';

function NavLinks(){
    return(
        <div>
    <BrowserRouter> 
      <Header/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Allproducts' element={<Categories/>}/>
        <Route path='/Pizza' element={<Pizzas/>}/>
        <Route path='/burgur' element={<Burger/>}/>
        <Route path='/salad' element={<Salad/>}/>
        <Route path='/drink' element={<Drink/>}/>
        <Route path='/toast' element={<Toast/>}/>
        <Route path='/about' element={<Aboutus/>}/>
        <Route path='/*' element={<E404/>}/>
        
    </Routes>

    </BrowserRouter>

        </div>
    )
}


export default NavLinks;