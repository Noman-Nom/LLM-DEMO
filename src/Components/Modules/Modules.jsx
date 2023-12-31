import React from 'react'
import './Modules.scss'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa6'
import { ModulesSource } from '../../SourcePage'
import { RiSingleQuotesL, RiSingleQuotesR } from 'react-icons/ri'

const Modules = () => {
    return (
        <div className='modules'>

            <div className="module__top">

                <h1> <FaQuoteLeft/> <span>Our Four Modules </span><br />
                Start learning from best platform<FaQuoteRight />
                </h1>
                <p> <RiSingleQuotesL />
                    Study any topic, anytime. explore thousands of courses and training for free
                    <RiSingleQuotesR />
                </p>
            </div>
            <div className="module__bottom">
                {ModulesSource.map((item) => (
                    <div className='module__item' key={item.id}>
                        <div className="module__img">
                            <img src={item.img} alt="" />
                        </div>
                        <div className="module__title">

                            <h1>{item.name}</h1>
                            <div />
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Modules