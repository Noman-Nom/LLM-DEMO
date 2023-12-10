import React from 'react'
import './UpCommingCourse.scss'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa6'
import { UpcommingCoursesSource } from '../../SourcePage'
import { CiStopwatch } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { images } from '../../constants';
import { RiSingleQuotesL, RiSingleQuotesR } from 'react-icons/ri';

const UpCommingCourse = () => {
  return (
    <div className='courses'>
        <div className="course__top">
            <h1><FaQuoteLeft/> Upcoming courses <FaQuoteRight/> </h1>
            <p> <RiSingleQuotesL/> Unlock new expertise with industry experts and thought leaders in our  <br /> upcoming courses. <RiSingleQuotesR/></p>

        </div>

        <div className="course__bottom">

            {UpcommingCoursesSource.map((item)=>(
                    <div className='course__item' key={item.id}>
                        <div className="course__img">
                            <img src={item.img} alt="" />
                        </div>
                        <div className="course__content">
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>


                        </div>

                        <div className="course__rating">
                            <h4><CiStopwatch/> 10+ Hours</h4>
                            <span><FaStar/></span>
                        </div>

                        <div className="course__teacher">

                         
                            <div className="teacher-img">
                                   <img src={item.teacher__img} alt="" />
                            </div>
                            <h2>{item.teacher_name}</h2>
                        </div>
                    </div>
            ))}

        </div>


    </div>
  )
}

export default UpCommingCourse