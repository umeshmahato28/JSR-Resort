import React, {useState, useContext} from 'react'
import './Booking.css'
import { Form, FormGroup, ListGroup, ListGroupItem} from "reactstrap";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { BASE_URL } from '../../utilise/config';
import { RiGroupFill } from "react-icons/ri";
import { BiRupee } from "react-icons/bi";

const Booking = () => {

    const navigate = useNavigate()

    const { user } = useContext(AuthContext)

    const [booking, setBooking] = useState({
      userId: user && user._id,
      userEmail: user && user.email,
      fullName: '',
      phone: '',
      guestSize: 1,
      bookAt: ''
   })

    const handleChange = e => {
      setBooking(prev => ({ ...prev, [e.target.id]: e.target.value }))
    }

    const room = Math.ceil( Number(booking.guestSize)/4 );
    const totalAmount = 10000 * room

    const handleClick = async e => {
      e.preventDefault()
      console.log(booking);
      
      try {
         if (!user || user === undefined || user === null) {
            return alert('Please sign in')
         }

         const res = await fetch(`${BASE_URL}/booking`, {
            method: 'post',
            headers: {
               'content-type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(booking)
         })

         const result = await res.json()

         if(!res.ok) {
            return alert(result.message)
         }
         navigate('/thank-you')
      } catch (error) {
         alert(error.message)
      } 
   }

  return (
    <div className='booking'>

    <div className="booking_form">
            <h5>Information</h5>
            <Form className='booking_info-form' onSubmit={handleClick}>
               <FormGroup>
                  <input type="text" placeholder='Full Name' id='fullName' required
                     onChange={handleChange} />
               </FormGroup>
               <FormGroup>
                  <input type="tel" placeholder='Phone' id='phone' required
                    onChange={handleChange} />
               </FormGroup>
               <FormGroup className='d-flex align-items-center gap-3'>
                  <input type="date" placeholder='' id='bookAt' required
                     onChange={handleChange} />
                  <input type="number" placeholder='Guest' id='guestSize' required
                     onChange={handleChange} />
               </FormGroup>
            </Form>
         </div>
            <div className='booking_bottom'>
               <ListGroup>
                  <ListGroupItem className='border-0 px-0'>
                     <h5 className='d-flex align-items-center gap-1'>1 Room Price</h5>
                     <span><i class='BiRupee'><BiRupee/></i>10000</span>
                  </ListGroupItem>
                  <ListGroupItem className='total border-0 px-0'>
                     <h5 className='d-flex align-items-center gap-1'>1 Room</h5>
                     <span><i class='BiRupee'><RiGroupFill/></i>4 Person</span>
                  </ListGroupItem>
                  <ListGroupItem className='total border-0 px-0'>
                     <h5>Total</h5>
                     <span><i class='BiRupee'><BiRupee/></i>{totalAmount}</span>
                  </ListGroupItem>
               </ListGroup>

               <button className='w-100 mt-4' onClick={handleClick}>Booking Now</button>

            </div>

    </div>
  )
}

export default Booking