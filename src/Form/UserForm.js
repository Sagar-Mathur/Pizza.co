import './Form.css';
import { useState } from 'react';
function UserForm(){
   const [formdata, setFormdata] = useState({
   
      name: '',
      Number: '',
      email:'',
      member:'',
      date:'',
    
    });
  
    const handleChange = (e) => {
      setFormdata({ ...formdata, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch('http://localhost:5000/booked', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formdata)
        });
        console.log(formdata)
        const data = await response.json();
        if(response.ok){
          alert('your table has been Booked ')
         
        }
        
      } catch (error) {
        console.error('Error:', error);
      }
    };
    return(
     <div className="booking-form" style={{backgroundColor:'whitesmoke'}}>
         <div className='couple-table-img'>
            <img src='couple-table.png'/>
         </div>
         <div className='form'>
            <h1>BOOK A TABLE</h1>
            <form onSubmit={handleSubmit}>
               <label>Name</label>
              <br></br> 
               <input type='text'name='name' placeholder='Enter Your Name' onChange={handleChange}/>
              <br></br>
               <label>Email</label>
               <br></br>
               <input type='text'name='email' placeholder='Enter Your Email'onChange={handleChange} />
               <br></br>
               <label>Mobile Number</label>
               <br></br>
               <input type='text' name='number' placeholder='Enter Your Mobile Number'onChange={handleChange} />
               <br></br>
               <label>No. Of Persons</label>
               <br></br>
               <input type='number' name='member' placeholder='How Many Persons?'onChange={handleChange} />
               <br></br>
               <label>Date Of Booking</label>
               <br></br>
               <input type='date' name='date' placeholder='Enter Your Name'onChange={handleChange} />
               <br></br>
               <br></br>
               <button type='submit'>BOOK NOW</button>
            </form>
         </div>
     </div>
    )
}


export default UserForm;