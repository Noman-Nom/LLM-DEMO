import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa6'
import { images } from '../../constants'
import { RiSingleQuotesL, RiSingleQuotesR } from 'react-icons/ri'

const VideoSection = () => {
    return (

        <>

            <div className="videoSection">

                <div className="left">
                    <div className="left__content">
                        <h1><FaQuoteLeft /> Come for the <span>training,</span> stay for the <span>experience</span><FaQuoteRight /></h1>
                        <p> <RiSingleQuotesL/> An intuitive interface means training feels right from the very first click. And with easy access on any device, learners jump in anytime, anywhere. Feel good introducing a tool that people actually use. <RiSingleQuotesR/></p>
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
                        <p> <RiSingleQuotesL/> Skip the months-long setup times that cause your training programs to just fizzle out. Create new courses with a few simple clicks, add users, and go live by the end of the day.<RiSingleQuotesR/></p>
                    </div>
                </div>


            </div>

            {/* 3rd */}

            <div className="videoSection">

<div className="left">
    <div className="left__content">
        <h1><FaQuoteLeft /> Come for the <span>training,</span> stay for the <span>experience</span><FaQuoteRight /></h1>
        <p> <RiSingleQuotesL/>Teams embrace training when it’s relevant. Personalize their experience  experience to match your branding and localize to your users’ languages languages  for training that feels like it’s built just for them<RiSingleQuotesR/></p>
    </div>
</div>
<div className="right">

    <div className="right__content">

        <div className="video1">

            <video autoPlay loop muted  >
                <source src={images.video3} type="video/mp4" />

            </video>
        </div>

      

    </div>
</div>

</div>
        </>
    )
}

export default VideoSection