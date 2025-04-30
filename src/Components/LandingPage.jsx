import React from 'react'
import './Home.css';
import { NavLink } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className='Home   flex text-center  item-center justify-center flex-col' >
      <div className="pageContent flex flex-col justify-center items-center">
        <h1 >Welcome to WeatherX!</h1>
        <p>Get real-time weather updates from around the world!</p>
        <br />
        <br />
        <div class="button-container items-center text-center justify-center">
  <NavLink to='/application' className="btn weather-btn">CLICK HERE TO PROCEED <i class="ri-arrow-right-double-fill"></i> </NavLink>
  
</div>
      </div>
    </div>
  )
}

export default LandingPage
