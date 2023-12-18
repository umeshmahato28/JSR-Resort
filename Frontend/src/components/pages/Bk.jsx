import React from 'react'
import vid from '../Image/vid.mp4'
import '../css/bk.css'
import Booking from '../Booking/Booking'


const Bk = () => {
  return (
    <div>
    <div className='container-fluid'>
    <section className='home'>
        
        <div classname ="bg"><video src={vid} muted autoPlay loop type="video/mp4"></video>
        
            <div className='smalltext'>
                <h1 classname ="b">BOOK DOWN BELOW!</h1>
                <div className='Book' id=''>
                    <Booking/>
                </div>
                
            </div>

        </div>
    </section>
  
        <br/>
    </div>
 
    </div>
  )
}

export default Bk