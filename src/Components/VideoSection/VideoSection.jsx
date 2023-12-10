import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa6'
import { images } from '../../constants'

const VideoSection = () => {
    return (

        <div className="videoSection">

            <div className="left">
                <div className="left__content">
                    <h1><FaQuoteLeft /> Come for the <span>training,</span> stay for the <span>experience</span><FaQuoteRight /></h1>
                </div>
            </div>
            <div className="right">

                <div className="right__content">
                    <div className="video">

                    

                        <video autoPlay  src={images.logo1} type="video/mp4"></video>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoSection