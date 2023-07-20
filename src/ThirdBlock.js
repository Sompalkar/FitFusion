import React from 'react'
import './ThirdBlock.css'
import pic01 from './images/Rectangle 42.png'
import pic2 from './images/Rectangle 43.png'
import pic4 from './images/BlackSand Beach.png'
import pic5 from './images/SnowMountain.png'
import pic6 from './images/Rectangle 48.png'
import pic7 from './images/Rectangle 49.png'
import pic8 from './images/Rectangle 50.png'
import pic9 from './images/Rectangle 60.png'
import pic11 from './images/Rectangle 61.png'
import { Fade } from 'react-reveal'

function ThirdBlock() {
    return (
        <div className='thirdBlock'>
            <div className='threeDivs'>
                <div className='divLeft'>
                    <img src={pic5} alt='' />
                    <img src={pic01} alt=' ' />
                    <img src={pic2} alt=' ' />

                </div>
                <div className='divMiddle'>
                    <img src={pic4} alt='' />
                    <img src={pic6} alt='' />

                    <img src={pic7} alt='' />
                </div>
                <div className='divRight'>

                    <img src={pic8} alt='' />
                    <img src={pic9} alt='' />
                    <img src={pic11} alt='' />
                </div>
                <Fade bottom >
                <div className='thirdBlockText'> eiusmod nostrud labore et velit culpa commodo. Ipsum anim reprehenderit id nostrud  </div>
                </Fade>
            </div>
        </div>
    )
}

export default ThirdBlock
