import React from 'react'
import './Widgets.scss'
import { images } from '../../constants'
import { PiChalkboardTeacherFill } from "react-icons/pi";
import { WidgetBox } from '../../SourcePage'

const Widgets = () => {
    return (
        <div className='widgets'>

            <div className="widgets__count">
                <div className="students">
                    <h1>7000<span>+</span></h1>
                    <span>Happy 😊 <br /> Students</span>
                </div>

                <div className="line__img">
                    <img src={images.lineImg} alt="" />
                </div>
                <div className="students">
                    <h1>54<span>+</span></h1>
                    <span>Experienced 👨‍🏫 <br /> Instructors</span>
                </div>
            </div>

            <div className="widgets__box">

                    {WidgetBox.map((item)=>(

                            <div className='Widget__item' key={item.id}>
                                <div className="item__img">
                                    <img src={item.img} alt="img" />
                                </div>
                                <div className="content">
                                    <h3>{item.title}</h3>
                                    <span>{item.description}</span>
                                </div>
                            </div>
                    ))}

            </div>
        </div>
    )
}

export default Widgets