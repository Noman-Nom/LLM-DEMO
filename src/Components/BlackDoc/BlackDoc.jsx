import React from 'react'
import { BlackDocs  } from '../../SourcePage'

import './BlackDoc.scss'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa6'
const BlackDoc = () => {
  return (
    <div className='black'>

        <div className="black__content">
            <h3> <FaQuoteLeft /><span> We</span> provides you world class performance . <FaQuoteRight /></h3>
        </div>

        <div className="black__items">
            {BlackDocs.map((item)=>(
                    <div className='black__div' key={item.id}>
                        <div className="black__div-img">
                            <img src={item.img} alt="" />
                        </div>
                        <div className="black__div-content">
                            <h3>{item.title}</h3>
                            <span>{item.description}</span>
                        </div>
                    </div>
            ))}
        </div>

      

    </div>
  )
}

export default BlackDoc