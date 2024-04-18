import { connect } from "react-redux"
import { addToCart } from "./Redux/Action"
import Pizzas from "./Products/Pizzas";
import Burger from "./Products/Burger";
import Drink from "./Products/Drink";
import Salad from "./Products/Salad";
import Toast from "./Products/Toast";
import './Allproducts.css';
import Footer from "./Footer/Footer";

function Allproducts(){
    return(
        <div className="all-categories">
            <div className="cat-pizza-1">
            
               <Pizzas/>
            </div>
            <div className="cat-burger-1">
                
               <Burger/>
            </div>
            <div className="cat-drink-1">
                
                <Drink/>
            </div>
            <div className="cat-salad-1">
                
                <Salad/>
            </div>
            <div className="cat-toast-1">
                <Toast/>
            </div>
            <div className="foot">
            <Footer/>
            </div>
        </div>
    )
}


export default connect(null,{addToCart})(Allproducts);