import React from 'react'
import './Navbar.scss'
import { images } from '../../constants'


const Navbar = () => {
  return (
    <div className='nav'>

      <div className="nav__left">
        <div className="nav__logo">
          <img src={images.logo} alt="" />

        </div>

        <div className="nav__mid">
          <ul>
            <li><a href="#">Platform</a></li>
            <li><a href="#">Companey</a></li>
            <li><a href="#">Modules</a></li>
            <li><a href="#">Solutions</a></li>
            <li><a href="#">Resources</a></li>
            

          </ul>

          
        </div>

        <div className="nav__right">
          <div className="nav__right-login">
            <button>Login</button>
          </div>

          <div className="nav__right-btns">
            <button>Request a Demo</button>
            <button>Sign up</button>
          </div>

        </div>
      </div>



    </div>
  )
}

export default Navbar
