import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Chef.css';

function Chef(){
    const chefs=['chef1.jpeg','chef2.jpeg','chef3.jpeg','chef4.jpeg','chef5.jpeg','chef6.jpeg']
    const chefname=['kelvin','Ashtha','Heven','Kin','Autha','steph']

    var Chef = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
      };
    
    return(
        <div>
            <div className="chefs">
                <div>
                    <h1 className="headline">Our Chefs</h1>
                </div>
                <Slider {...Chef}>
                          
                            {chefname.map((product,index) => (                        
                                 <div className="chef-index" key={index}>
                                  <img src={chefs[index]} />
                                  <h1> {product}{' '}</h1>
                                </div>
                               ))}
                
                    
                </Slider>
            </div>

        </div>
    )
}


export default Chef;