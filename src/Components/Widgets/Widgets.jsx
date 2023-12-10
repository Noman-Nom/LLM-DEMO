import React from 'react'
import './Widgets.scss'
import { images } from '../../constants'
import { PiChalkboardTeacherFill } from "react-icons/pi";

const Widgets = () => {
    return (
        <div className='widgets'>

            <div className="widgets__count">
                <div className="students">
                    <h1>7000+</h1>
                    <span>Happy 😊 <br /> Students</span>
                </div>

                <div className="line__img">
                    <img src={images.lineImg} alt="" />
                </div>
                <div className="students">
                    <h1>7000+</h1>
                    <span>Experienced <PiChalkboardTeacherFill />  <br /> Students</span>
                </div>
            </div>

            <div className="widgets__box">

            </div>
        </div>
    )
}

export default Widgets