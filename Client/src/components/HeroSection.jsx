import React from 'react'
import { Link } from 'react-scroll'

export default function HeroSection() {
  return (
    <section className='hero'>
      <img src="/restaurant.jpg" alt="restaurant" />
      <div className="item">
        <h3>Event Planner</h3>
        <div>
          <h1>Your Personal Event Planner</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <Link to='contact' spy={true} smooth={true} duration={500}>Book Now</Link>
        </div>
      </div>
    </section>
  )
}
