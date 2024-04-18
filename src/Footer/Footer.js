import './Footer.css'
function Footer(){
    return(
        <div className="Footer">
            <div className='detail'>
                <h1>Pizza.co</h1>
                <p><b>Address</b>:Delhi Sarita vihar 121013</p>
                <p><b>Email</b>:sagarmathur2588@gmail.com</p>
            </div>
            <div className='submenu'>

         <h1>OUR MENU</h1>
         <h2>Pizzas/Burgers<br></br>Toasts/Drinks</h2>
            </div>
         <div className='sub'>
          <h1>NEWSLETTER</h1>
         <input type='email'placeholder='Enter your Email'/>
         <button>Subscribe</button>
         </div>
        </div>
    )
}

export default Footer;