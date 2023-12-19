import React, { useState, useContext } from "react";
import "../css/Contact.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../../context/AuthContext'
import { BASE_URL } from "../../utilise/config";

const Contact = () => {
  const navigate = useNavigate()
  const { user } = useContext(AuthContext)

  const [contact, setContact] =useState({
    name: '',
    email: '',
    messege:''
  })

  const handleChange= e => {
    setContact(prev => ({ ...prev, [e.target.id]: e.target.value}))
  }

  const handleClick = async e => {
    e.preventDefault()
    console.log(contact);

    try {
      if (!user || user === undefined || user === null) {
         return alert('Please Sign in')
      }

      const res = await fetch(`${BASE_URL}/contact`, {
         method: 'post',
         headers: {
            'content-type': 'application/json'
         },
         credentials: 'include',
         body: JSON.stringify(contact)
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
    <div>
      <main class="page">
        <section class="contact-container">
          <article class="contact-info">
            <h3>Want To Get In Touch?</h3>
            <p>
              JSR resort promises a quick and user friendly contact experience, to everyone who reaches out to us.
            </p>
            <p>
              I mean if we could dedicate so much time on a project with no marks, we could definately dedicate few minutes to our loving customers.
            </p>
          </article>
          <article>
            <form class="form contact-form">
              <div class="form-row">
                <label html="name" class="form-label">
                  Your name
                </label>
                <input type="text" name="name" id="name" class="form-input" required onChange={handleChange} />
              </div>
              <div class="form-row">
                <label html="email" class="form-label">
                  your email
                </label>
                <input type="text" name="email" id="email" class="form-input" required onChange={handleChange}/>
              </div>
              <div class="form-row">
                <label html="message" class="form-label">
                  message
                </label>
                <textarea
                  name="message"
                  id="message"
                  class="form-textarea"
                  required onChange={handleChange}
                ></textarea>
              </div>
              <button type="submit" class="btn btn-block" onClick={handleClick}>
                submit
              </button>
            </form>
          </article>
        </section>

        <section class="featured-recipes">
          <h3 class="featured-title">Check Out Our Other Attractions!</h3>
          <div class="recipes-list">
            <a href="Spinner" class="recipe">
              <img
                src="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=600"
                class="img recipe-img"
                alt=""
              />
              <h5>Swimming Pool</h5>
              <p>Accessible all day All Night</p>
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
                <p>Open 24*7</p>
              </NavLink>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;
