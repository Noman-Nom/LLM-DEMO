import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa6'
import { images } from '../../constants'

const VideoSection = () => {
    return (

        <>

            <div className="videoSection">

                <div className="left">
                    <div className="left__content">
                        <h1><FaQuoteLeft /> Come for the <span>training,</span> stay for the <span>experience</span><FaQuoteRight /></h1>
                    </div>
                </div>
                <div className="right">

                    <div className="right__content">

                        <div className="video1">

                            <video autoPlay loop muted  >
                                <source src={images.video1} type="video/mp4" />

                            </video>
                        </div>

                        <div className="video1_1">

                            <video autoPlay loop muted  >
                                <source src={images.video1_1} type="video/mp4" />

                            </video>
                        </div>


                    </div>
                </div>

            </div>


            {/* 2nd */}
            <div className="videoSection">


                <div className="right">

                    <div className="right__content">

                        <div className="video1">

                            <video autoPlay loop muted  >
                                <source src={images.video2} type="video/mp4" />

                            </video>
                        </div>

                       


                    </div>
                </div>
                <div className="left">
                    <div className="left__content">
                        <h1><FaQuoteLeft /> Ready to <span>go,</span> right out of the <span>box</span><FaQuoteRight /></h1>
                    </div>
                </div>


            </div>
        </>
    )
}

export default VideoSection