import React from 'react'
import '../css/Deluxe.css'




const Deluxe = () => {
  return (
    <div>
        <div className='container-fluid'>


            <div className='container-fluid' id='deluxe'>
                <div className='row'>
                    <div className='col-7' >
                        <img src="https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=''></img>
                    </div>

                    <div className='col-5'>
                        <article class="recipe-info">
                            <h2>Deluxe Rooms</h2>
                            <p>
                             Our deluxe rooms are modern decorated, can accommodate up to 2 persons, totally soundproofed and equipped with high tech comforts such as high speed internet access, USB ports , smart TV, room cleaning touch system and private hydromassage bathtub.
                            </p> 
                            <div class="recipe-icons text-center d-flex p-5">
                                <article className='p-4'>
                                    <i class="fas fa-wifi"></i>
                                    <h5>Internet access</h5>
                                    <p>Unlimited</p>
                                </article>
                                <article className='p-4'>
                                    <i class="fas fa-bed"></i>
                                    <h5>Bed</h5>
                                    <p>For 2 ppl</p>
                                </article>
                            <article className='p-4'>
                                <i class="fas fa-car"></i>
                                <h5>Car Parking </h5>
                                <p>Available</p>
                            </article>
                        </div>
                        
                        </article>
                        <a class="btn" href="Bk" role="button">Book Now</a>
                    </div>
                </div>
            </div>

           


           
            <br/>
        </div>
    </div>
  )
}

export default Deluxe