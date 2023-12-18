import React from "react";
import "../css/About.css";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div>
      <main class="page">
        <section class="about-page">
          <article>
            <h2>JSR</h2>
            <h4>THE BEST RESORT OUT THERE</h4>
            <p>
              Resort and hotel are both suitable facilities for vacationers and
              guests. In general, the difference between the two is that resort
              has additional leisure and sports facilities framed in a natural
              environment. In comparison, a hotel is just a lodging place. Even
              though many hotels already have this type of facility, resorts
              attract guests beyond the room. The main benefit of booking a
              Resort Hotel is that vacationers and guests find a comprehensive
              service within the premises. It is very convenient for couples,
              friends, and families. They are also offering kids clubs,
              shopping, evening entertainment program, etc.
            </p>
            <a href="Rl" class="btn">
              {" "}
              Visit These Resorts to Enjooy your Weekend
            </a>
          </article>

          <img
            src="https://images.pexels.com/photos/594077/pexels-photo-594077.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Person Pouring Salt in Bowl"
            class="img about-img"
          />
        </section>
        <div className="review">
          <h3 className="container-fluid">Guest Reviews</h3>
        </div>
        <div className="review2">
          <h4 className="guestname"><i class="fas fa-user-tie"></i> Alejandro Rodriguez</h4>
          <p>"JSR Resort exceeded all our expectations. The stunning location, luxurious accommodations, and top-notch service made our stay truly unforgettable. The staff went above and beyond to ensure every detail of our vacation was perfect. We can't wait to return to this hidden gem in paradise!"</p>
          </div>
        <div className="review2">
          <h4 className="guestname"><i class="fas fa-user-tie"></i> Mateo Oliveira</h4>
          <p>"JSR provided the perfect escape from our busy lives. The tranquil surroundings, impeccable landscaping, and well-designed facilities created a serene oasis. The resort's attention to detail and commitment to guest satisfaction set it apart. This was more than just a vacation; it was a rejuvenating experience."</p>
          
          </div>
        <div className="review2">
          <h4 className="guestname"><i class="fas fa-user-tie"></i> Carlos Gutierrez</h4>
          <p>
          "From the moment we arrived at JSR, we were treated like royalty. The staff's warmth and attentiveness made us feel right at home. The resort's commitment to exceptional service is evident in every aspect, from the gourmet dining options to the well-curated activities. JSR has set a new standard for luxury hospitality."
          </p>
          </div>
        <div className="review2">
          <h4 className="guestname"><i class="fas fa-user-tie"></i> Raj Singhania</h4>
          <p>
          "JSR Resort is synonymous with luxury and natural beauty. The well-appointed rooms, world-class amenities, and the mesmerizing views created a dreamlike atmosphere. Whether lounging by the pool, enjoying a spa treatment, or exploring the nearby attractions, every moment at JSR felt like a chapter from a fairy tale. We can't recommend it enough!"
          </p>
          </div>
        

        <section class="featured-recipes">
          <h3 class="featured-title">Check Out Our Other Attractions!</h3>
          <div class="recipes-list">
            <a href="Spinner" class="recipe">
              <img
                src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                class="img recipe-img"
                alt=""
              />
              <h5> SEA Side Pool</h5>
              <p>Accessible according to scheduled time</p>
            </a>

            <a href="single-recipe.html" class="recipe">
              <img
                src="https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                class="img recipe-img"
                alt=""
              />
              <h5>Restro cum Bar</h5>
              <p>Unimited Food and Drinks</p>
            </a>

            <a href="single-recipe.html" class="recipe">
              <NavLink to="./biryani">
                <img
                  src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  class="img recipe-img"
                  alt=""
                />
                <h5>Gym</h5>
                <p>Open MORNING 6am to 11am & EVENING 4pm to 8pm</p>
              </NavLink>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
