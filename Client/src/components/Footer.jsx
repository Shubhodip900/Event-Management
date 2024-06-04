import React from 'react'

export default function Footer() {
  return (
    <footer>
      <div className="banner">
        <div className="title">
          <h1>Event Planner</h1>
          <p>Plan your events</p>
        </div>
        <div className="tag">
          <label>News Letter</label>
          <div>
            <input type="text" placeholder='email' />
            <button>Submit</button>
          </div>
          <p>Signup With your email to recive news and updates!</p>
        </div>
      </div>
    </footer>
  )
}
