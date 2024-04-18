
import Slider from './Slider/Slider';
import './App.css';
import Header from './Header/Header';
import Items from './Body/Items';
import Categories from './Body/Categories';
import Feature from './Feature/Feature';
import UserForm from './Form/UserForm';
import Footer from './Footer/Footer';
import Chef from './Chef/Chef';
import Links from './Body/Links';
import Addtocart from './Addtocart/Addtocart';
import Menu from './Menu/Menu';
import Component from './Components/Component';

function Home() {
  return (
    <div className="App">
      
      <Slider/>
      <Feature/>
      <Links/>
      <Component/>
       <Chef/>
      <UserForm/>
      <Footer/>
    </div>
  );
}

export default Home;
