import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import './Product.css';
function Product(){
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode:true,
        showArrow:true
      };

  const img=['burgur-1.png','burgur-2.png','burgur-3.png','burgur-4.png','burgur-5.png']
  const Productname=['product1','product2','product3','product4','product5']
    return(
        <div className="product-burgur-list">
            <div className="burgur-list">

             <Slider className="slider-burgur"{...settings}>
             
            {Productname.map((product, index) => (
                <div className='burgur-index' key={index}>
              <img className='burgur-product-image' src={img[index]}/>
              <br></br>
              <br></br>
            <button className='burgur-product-btn'  >Add to Cart </button>
                </div>
            
            ))}
             </Slider>
            </div>
        </div>
    )
}


export default Product;