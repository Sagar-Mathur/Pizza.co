import './Slider.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function slider(){
    var settings = {
        dots: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        autoplay:true,
        slidesToScroll: 1,
        autoplaySpeed:4000
      };
    
    return(
        <div>
             <div className='slider-div'>
             <Slider {...settings}>
                    <div className='slider-1'>
                        
                        <img className='slider-img-1' src='/Home.jpg'/>
                        
                        
                    </div>
                    <div className='slider-2'>
                         <img className='slider-img-2' src='/Home2.jpg'/>
                         <h3>HOT STUFF</h3>
                        <h1>MEXICAN</h1>
                        <h2>BURGER</h2>
                    </div>
                    
             </Slider>
             </div>
        </div>
    )
}


export default slider;