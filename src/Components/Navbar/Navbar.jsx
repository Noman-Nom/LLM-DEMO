import React from 'react'
import './Navbar.scss'
import { images } from '../../constants'


const Navbar = () => {
  return (
    <div className='nav'>

      <div className="nav__left">
        <div className="nav__logo">
          <img src={images.logo1} alt="" />

        </div>
        </div>

        <div className="nav__mid">
          <ul>
            <li><a href="#">Platform</a>
            <div />
            </li>
            <li><a href="#">Companey</a>
            <div />
            </li>
            <li><a href="#">Modules</a>
            <div />
            </li>
            <li><a href="#">Solutions</a>
            <div />
            </li>
            <li><a href="#">Resources</a>
            <div />
            </li>
            

          </ul>

          
        </div>

        <div className="nav__right">
          <div className="nav__right-login">
            <button className='login'>Login</button>
            <span></span>
          </div>

          <div className="nav__right-btns">
            <button className='btn-req'>Request a Demo</button>
            <button className='btn-sign'>Sign up</button>
          </div>

        </div>
     



    </div>
  )
}

export default Navbar
