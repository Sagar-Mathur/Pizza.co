import './Feature.css'
function Feature(){
    const picture=['pizzaclone.png','bikeclone.png','plateclone.png'];
    const picname=['DELICIOUS RECIPES','DELIVERY OR PICK UP','ORDER YOUR FOOD'];
    const discribtion=['Make perfect pizza at home with this classic homemade pizza recipe, including a pizza dough recipe, topping suggestions, and step-by-step instructions with ..'];
    return(
        <div className='Feature'>
              <ul>
                {picname.map((picname,index)=>(
                    
                    <li> 
                    <div className='feature-table' key={index}>
                     <img src={picture[index]}/>
                     <br></br>
                     <h3>{picname}</h3>
                     
                    </div>

                </li>
                ))}
              </ul>
        </div>
        )
}


export default Feature;