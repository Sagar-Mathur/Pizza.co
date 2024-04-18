import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
function Tabpen(){
    return(
       <div>

        <h1>TabPanel</h1>
<div class="nav-tabs-outer">
  <ul class="nav nav-tabs js-tabs">
    <li class="active text-center"><a href="#tab1" data-toggle="tab">TAB1</a></li>
    <li class="text-center"><a href="#tab2" data-toggle="tab">TAB2</a></li>
    <li class="text-center"><a href="#tab3" data-toggle="tab">TAB3</a></li>
    </ul>
    <div class="tab-content">
    	<div id="tab1" role="tabpanel" class="tab-pane active fade in">
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
   		</div>
      <div id="tab2" role="tabpanel" class="tab-pane fade in">
	    	<img src="https://placehold.jp/150x150.png"/><p>text text text text text text text text text text text text text text text text text text</p>
   		</div>
      <div id="tab3" role="tabpanel" class="tab-pane fade in">
	    	<img src="https://placehold.jp/150x150.png"/><p>text text text text text text text text text text text text text text text text text text text text text text text text text</p>
   		</div>
    </div>
</div>
</div>
)}