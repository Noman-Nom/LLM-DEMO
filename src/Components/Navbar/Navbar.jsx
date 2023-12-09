import React from 'react'
import './Navbar.scss'
import { images } from '../../constants'
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="conatiner">

      <div className="upNav">
        <div className="upNav__left">
          <span>+92-304-5456318 <FaPhone/></span>
          <span>m.noman@s4scorp.com < MdEmail /></span>
          

        </div>
        <div className="upNav__right">
          <select name="" id="">
            <option value="">English</option>
            <option value="">Arabic</option>
            <option value="">urdu</option>
            <option value="">French</option>
            <option value="">Hindi</option>
            <option value="">Russian</option>

          </select>
        </div>
      </div>

   <div className='nav'>

      <div className="nav__left">
        <div className="nav__logo">
          <img src={images.logo1} alt="" />

        </div>
        </div>

        <div className="nav__mid">
          <ul>
            <li><a href="#">Courses</a>
            <div />
            </li>
            <li><a href="#">Course Bundle</a>
            <div />
            </li>
            <li><a href="#">Bootcamp</a>
            <div />
            </li>
            <li><a href="#">Ebook</a>
            <div />
            </li>
            <li><a href="#">Find a tutor</a>
            <div />
            </li>
            <li><a href="#">More</a>
            <div />
            </li>
            

          </ul>

          
        </div>

        <div className="nav__right">
          <div className="nav__right-login">
            <button className='login'>Login</button>
            <span className='single-line'></span>
          </div>

          <div className="nav__right-btns">
            <button className='btn-req'>Request a Demo</button>
            <button className='btn-sign'>Sign up</button>
          </div>

        </div>
     



    </div>
    </div>
 
  )
}

export default Navbar
