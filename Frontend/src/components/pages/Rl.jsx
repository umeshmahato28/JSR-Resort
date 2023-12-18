
import React from 'react'
import '../css/rl.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const Rl = () => {
  return (
    <div>
        <div className='container-fluid'>       
        <div className='head'>
                <div className='col-12'>
                    <h2 id="results1" direction="right" >Checkout Our Rooms</h2>
                </div>
            </div> 
        <div className='rooms'>
        <div className='col-12'>
                    <div className='container-fluid'>
                        <div className='row'>

                            <div class="col-6 p-2">
                            <div class="card">
                            <img src="https://www.tajhotels.com/content/dam/luxury/hotels/St_James_Court_London/images/3x2/Classic_Room-Bedroom.jpg/jcr:content/renditions/cq5dam.web.756.756.jpeg" alt="card" class="card-imgg" height="200px"></img>
                                <div class="card-body">
                                    <h3>Classic Room</h3>
                                    <p>Step into a world of unparalleled luxury and comfort in this room with jungle views, butler service......</p>

                                    <a class="btn" href="./biryani" role="button"> Read More</a>

                                </div>
                        </div>
                    </div>


                    <div class="col-6 p-2">
                            <div class="card">
                                
                                <img src="https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="card" class="card-imgg"></img>
                                <div class="card-body">
                                    <h3> Deluxe Room</h3>
                                    <p> Our deluxe rooms are modern decorated, can accommodate up to 2 persons, totally soundproofed and equipped with high tech comforts ....</p>
                                    <a class="btn" href="./tiramisu" role="button"> Read More</a>
                                </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>

        <div className='col-12'>
                    <div className='container-fluid'>
                        <div className='row'>

                            <div class="col-6 p-2">
                            <div class="card">
                                <img src="https://images.pexels.com/photos/3316923/pexels-photo-3316923.jpeg?auto=compress&cs=tinysrgb&w=600" alt="card" class="card-imgg" height="200px"></img>
                                <div class="card-body">
                                    <h3>Premium Room</h3>
                                    <p> The large, spacious and well-furnished premium room with no view. On entering Denzong Shangrila, you will immediately sense its special intimate atmosphere...</p>
                                    <a class="btn" href="./frozen_blue" role="button"> Read More</a>
                                </div>
                        </div>
                    </div>


                    <div class="col-6  p-2">
                            <div class="card">
                                <img src="https://www.tajhotels.com/content/dam/luxury/hotels/St_James_Court_London/images/3x2/R&S_67704419-H1-St._James'_Court,_A_Taj_Hotel_Executive_Family_Room-3x2.jpg/jcr:content/renditions/cq5dam.web.756.756.jpeg" alt="card" class="card-imgg" height="200px"></img>
                                <div class="card-body">
                                    <h3>Dual Bed Room</h3>
                                    <p>  Airy and spacious, Quad rooms are designed for four, or two couples, making them an ideal base for exploring nature with loved ones........ </p>
                                    <a class="btn" href="./fam" role="button"> Read More</a>
                                </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
        </div>
              
        <br/>
        </div>
    </div>
  )
}

export default Rl