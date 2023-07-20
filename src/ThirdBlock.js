import React from 'react'
import './ThirdBlock.css'
import pic01 from './images/Rectangle 42.png'
import pic2 from './images/Rectangle 43.png' 
import pic5 from './images/SnowMountain.png' 
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
                
                <Fade bottom >
                <div className='thirdBlockText'> eiusmod nostrud labore et velit culpa commodo. Ipsum anim reprehenderit id nostrud  </div>
                </Fade>
            </div>
        </div>
    )
}

export default ThirdBlock
