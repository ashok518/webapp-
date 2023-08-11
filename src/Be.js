import React from 'react'
import { Switch,Route, Router, Link} from 'react-router-dom'
const Be = () => {
  return (
   <>
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/service">Service</Link>
          </li>
        </ul>
        </div>
</Router>
   </>
  )
}

export default Be
