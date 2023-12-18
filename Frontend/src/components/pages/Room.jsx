import React from 'react'

const room = () => {
  return (
    <div>
         <div className='container-fluid'>


<h1>
        Best HOTELS for YOU ***
</h1>

<div className="container text-center">
  <div className="row">
    <div className="col">
    <div class="card">
        <img src="room1" class="card-img-top" alt="..."> </img>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                
                </div>
        
    </div>
</div>
    <div className="col">
    <div class="card">
        <img src="..." class="card-img-top" alt="..."> </img>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
    </div>
    <div className="col">
      <div class="card">
  <img src="..." class="card-img-top" alt="..."> </img>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
    </div>
  </div>
</div>


<div className='container-fluid'>
<section class="formdown">
    <h2>Contact Us for your Suggestions</h2>
    <form>
        <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" class="form-control" id="name" placeholder="Enter your name"></input>
        </div>
        <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" class="form-control" id="email" placeholder="Enter your email"></input>
        </div>
        <div class="form-group">
            <label for="message">Message:</label>
            <textarea class="form-control" id="message" rows="4" placeholder="Enter your message"></textarea>
        </div>
        <div class="form-check">
            <input type="checkbox" class="form-check-input" id="subscribe"></input>
            <label class="form-check-label" for="subscribe">Subscribe to our newsletter</label>
        </div>
        <button type="submit" class="btn mt-3" id='submit'>Submit</button>
    </form>
</section>
</div>
<br/>
</div>
</div>
)
}

export default room
