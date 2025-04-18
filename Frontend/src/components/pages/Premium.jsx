import React from 'react'

const Premium = () => {
  return (
    <div>
    <div className='container-fluid'>

        <div className='container-fluid' id='deluxe'>
                <div className='row'>
                    <div className='col-7' >
                        <img src="https://images.pexels.com/photos/376531/pexels-photo-376531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=''></img>
                    </div>

                    <div className='col-5'>
                        <article class="recipe-info">
                            <h2>Premium Room</h2>
                            <p>
                            The large, spacious and well-furnished premium room with no view. On entering Denzong Shangrila, you will immediately sense its special intimate atmosphere that makes you feel like being in your own home. Each detail has been passionately chosen and each room deserves a visit.
                            </p> 
                            <div class="recipe-icons text-center d-flex p-5">
                                <article className='p-4'>
                                    <i class="fas fa-bed"></i>
                                    <h5>Bed</h5>
                                    <p>For 2 ppl</p>
                                </article>
                                <article className='p-4'>
                                    <i class="fas fa-wifi"></i>
                                    <h5>Free</h5>
                                    <p>Internet Acces</p>
                                </article>
                            <article className='p-4'>
                                <i class="fas fa-car"></i>
                                <h5>Parking</h5>
                                <p>Avaiable</p>
                            </article>
                        </div>
                        
                        </article>
                        <a class="btn" href="booknow" role="button">Book Now</a>
                    </div>
                </div>
            </div>

        
        <br/>
    </div>
    </div>
  )
}

export default Premium