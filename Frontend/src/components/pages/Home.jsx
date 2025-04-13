import React from "react";
import "../css/Home.css";

import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import video1 from "../Image/video1.mp4";
import video2 from "../Image/video2.mp4";
import video3 from "../Image/video3.mp4";
import video4 from "../Image/video4.mp4";

const Home = () => {
  return (
    <div>
      <div className="container-fluid" id="Home">
        <div className="container-fluid" id="Header">
          <div className="row" id="french_cafe">
            <div className="container text-center">
              <h1>WELCOME TO J$R RESORT</h1>
              <h4>Pampering you to the fullest!</h4>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          {/* <div className='Carosel'>
        <Carousel>
            <Carousel.Item>
            <img
                className="d-block w-100 "
                src={cl1}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>Front Site</h3>
                <p1>Welcome to the best resort you can Pay for</p1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
                className="d-block h-70 w-100 "
                src={cl2}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>Pool Site</h3>
                <p1>First in class Amenities!</p1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
                className="d-block w-100 "
                src={cl3}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>Back Site</h3>
                <p1>
                For your heavenly experience
                </p1>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </div> */}
          <div className="col-12">
            <div className="container-fluid">
              <div className="row">
                <div class="col-6 p-2">
                  <div class="card p-3">
                    <video
                      className="video"
                      src={video1}
                      muted
                      autoPlay
                      loop
                      type="video/mp4"
                    ></video>

                    <div class="card-body">
                      <h5>
                        <b>RECEPTION </b>
                      </h5>
                    </div>
                  </div>
                </div>

                <div class="col-6 p-2">
                  <h1>About Reception</h1>
                  <p>
                    Hotel receptionists deliver a wide range of guest services:
                    welcome guests to the hotel, make reservations for them and
                    attend to their other needs to keep them happy during their
                    stay. Receptionists work for large hotel chains and smaller,
                    private facilities. Hotel receptionists work mainly in the
                    hotel’s front office and need to use a wide range of skills,
                    including tourist information, good verbal and written
                    English, computer literacy, good manners, conduct and
                    grooming, excellent communication and social skills, problem
                    solving, competence with figures and cash handling, and the
                    application of procedures for reservations, reception, guest
                    services and check out. Hotel receptionists are vital to
                    every hotel enhancing its reputation and encouraging repeat
                    business.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12">
            <div className="container-fluid">
              <div className="row">
                <div class="col-6 p-2">
                  <h1>About Swimming Pool</h1>
                  <p>
                    Hotel swimming pools remain one of the key attractions for
                    all types of resorts. In fact, they are among the main
                    trends in the hospitality sector, and continue to be a
                    must-have for some customers in both urban hotels and
                    resorts. The photo opportunities and the fun activities
                    typically associated with hotel swimming pools (relaxation,
                    fun, sports) are two of the main motivations attracting
                    clients today. The addition of surrounding elements (from
                    cocktail bars to water shows or water parks) help build a
                    unique leisure space that pushes these businesses’ economic
                    performance further. Choosing the right aquatic installation
                    is most important to ensure end-users are satisfied and pool
                    operators’ investments are efficient. In this context, the
                    current swimming pool sector offers innovative applications
                    such as automation technologies and systems informed by
                    real-time data, as well as modern building techniques that
                    reduce the pool’s construction time and minimise maintenance
                    and operating costs. Types of pools for hotels and resorts
                    Current options in hotel swimming pools allow hotels and
                    resorts to choose from appealing and modern designs that fit
                    within their distinctive business models and attract the
                    right type of guests.
                  </p>
                </div>

                <div class="col-6 p-2">
                  <div class="card p-3">
                    <video
                      src={video2}
                      muted
                      autoPlay
                      loop
                      type="video/mp4"
                    ></video>

                    <div class="card-body">
                      <h5>
                        <b>SWIMMING POOL </b>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12">
            <div className="container-fluid">
              <div className="row">
                <div class="col-6 p-2">
                  <div class="card p-3">
                    <video
                      src={video3}
                      muted
                      autoPlay
                      loop
                      type="video/mp4"
                    ></video>
                    <div class="card-body">
                      <h5>
                        <b>BAR </b>
                      </h5>
                    </div>
                  </div>
                </div>

                <div class="col-6 p-2">
                  <h1>About Bar</h1>
                  <p>
                    Introduction and definition Bar is defined as a counter
                    where goods and services of a specified kind are sold and
                    dispensed. Specifically in hospitality industry, it is
                    defined as a counter where food and/or beverages are sold
                    and provided. Thus, there are food bars as well as beverage
                    bars. Food bars include Oyster bars, Snack bars, Sandwich
                    bars etc. However, in food and beverage business, the term
                    'bar' invariably mean the beverage bars - particularly the
                    ones that serve alcohol. The, term 'bar' connoted as a
                    counter for dispensing goods and services Bars can be
                    classified in various ways. It may be classified on the
                    basis of its function; architectural concepts, themes,
                    interiors and ambience: patronizing clientele: key beverage
                    (product) served; location; payment of drinks; in-situ
                    (on-premises) entertainment offered, etc. However,
                    noteworthy point is that a certain type of bar may fit more
                    than one classification.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12">
            <div className="container-fluid">
              <div className="row">
                <div class="col-6 p-2">
                  <h1>About Live Performance</h1>
                  <p>
                    Sound is a powerful manipulating tool. There are numerous
                    researches on how music influences human behavior and the
                    results are interesting. In one research article, after
                    conducting a comprehensive experiment the authors (Kemp,
                    Williams, Min and Chen, 2019) proved that the congruency
                    between human emotions and music really exists. They came up
                    with the statement that people will grade product and
                    service quality better when they are exposed to music. Also,
                    people not exposed to music would not make efforts to feel
                    better as people exposed to music. Why is that? This part of
                    the introduction is about considering different
                    psychological impacts of sounds to consumers experience and
                    decision making. Music is a good tool to control the length
                    of the stay. Any kind of music is better than no music, if
                    you want to keep customers at one place (Sullivan, 2002).
                    Compatibility of music and environment encourages customers
                    to stay even longer (Milliman, 1982; 1986). However, people
                    eat more quickly when faster tempo music is playing
                    (Milliman, 1986), which can also be useful if your venue is
                    small and you want a fast guests turnover.{" "}
                  </p>
                </div>

                <div class="col-6 p-2">
                  <div class="card p-3">
                    <video
                      src={video4}
                      muted
                      autoPlay
                      loop
                      type="video/mp4"
                    ></video>

                    <div class="card-body">
                      <h5>
                        <b>LIVE PERFORMANCE </b>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="cards ">
            <div className="col-12">
              <div className="container-fluid">
                <div className="row">
                <NavLink to="./premium" className="col-3 p-2">
                  <div >
                    <div class="card">
                      
                        <img
                          src="https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          alt="card"
                          class="card-img"
                          height="200px"
                        ></img>
                      
                      <div class="card-body">
                        <h5>Deluxe Rooms</h5>
                        <p>Check out full details</p>
                      </div>
                    </div>
                  </div>
                    </NavLink>
                  <NavLink to="./premium" className="col-3 p-2">
                    <div>
                      <div class="card">
                        <img
                          src="https://images.pexels.com/photos/376531/pexels-photo-376531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          alt="card"
                          class="card-img"
                          height="200px"
                        ></img>
                        <div class="card-body">
                          <h5>Premium Room</h5>
                          <p>Check out full details</p>
                        </div>
                      </div>
                    </div>
                  </NavLink>
                  <NavLink to="./classic" className="col-3 p-2">
                    <div>
                      <div class="card">
                        <img
                          src="https://www.theclassichotel.in/wp-content/uploads/2021/08/Presidential-Suite.jpg"
                          alt="card"
                          class="card-img"
                          height="200px"
                        ></img>

                        <div class="card-body">
                          <h5>Classic Room</h5>
                          <p>Check out full details</p>
                        </div>
                      </div>
                    </div>
                  </NavLink>
                <NavLink to="./dualbed" className="col-3 p-2">
                  <div >
                    <div class="card">
                        
                        <img
                          src="https://djmzubtjl6upi.cloudfront.net/wp-content/uploads/sites/3/2017/12/Deluxe-Double-Guestroom2.jpg"
                          alt="card"
                          class="card-img"
                          height="200px"
                        ></img>

                      <div class="card-body">
                        <h5>Duel Bed Room</h5>
                        <p>Check out full details</p>
                      </div>
                    </div>
                  </div>
                      </NavLink>
                </div>
              </div>
              <br />
              <div></div>

              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
