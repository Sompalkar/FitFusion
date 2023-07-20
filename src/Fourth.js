import React from 'react'
import './Fourth.css';
import photo1 from './images/pngwing.png'
import photo2 from './images/pngwing (1).png'
import photo3 from './images/kindpng_218182.png'
import assistant4 from './images/Assistant4.png'



import instagram from './images/instagram 1.svg'
import  twitter from './images/Twitter.svg'
import  group from './images/Group.svg'
import  linkedIn from './images/Gmail.svg'

import { Fade } from 'react-reveal'
function Fourth() {
    return (
        <div className='Fourth'>

            <div className='headingMain'>
                <Fade bottom >
                    <p>Lorem Ipsum Dolor Emitt <span className='headingSubPart'> Enim id enim et non </span> </p>
                </Fade>
            </div>

            <div className='scrollableCardDiv'>

                <div className='scrollDivs'>
                    <img src={photo1} alt=' ' />

                    <p>  Michael </p>
                    <p> weight management </p>
                </div>

                <div className='scrollDivs'>
                    <img src={photo2} alt=' ' />

                    <p> John </p>
                    <p>  weight management </p>
                </div>

                <div className='scrollDivs'>
                    <img src={photo3} alt=' ' />

                    <p>  John Doe  </p>
                    <p> E-REPS </p>
                </div>

                <div className='scrollDivs'>
                    <img src={photo2} alt=' ' />

                    <p> John </p>
                    <p>  weight management </p>
                </div>



                <div className='scrollDivs'>
                    <img src={photo3} alt=' ' />

                    <p>  John Doe  </p>
                    <p> E-REPS </p>
                </div>



                <div className='scrollDivs'>
                    <img src={photo1} alt=' ' />

                    <p>  Michael </p>
                    <p> weight management </p>
                </div>








            </div>












            <div className='banner1'>

                <div className='divleft'>
                    <h1 className='divleftTitle'>Stay tuned!</h1>
                    <p className='divleftDesc'>Get the latest articles and business updates that you need to know, you’ll even get special recommendations weekly.</p>
                </div>
                <div className=' divmiddle '>
                    <input type='email' placeholder='Enter Your Email ID' />
                    <button className='divmiddleBtn'>Sign Up</button>
                </div>
                <div className='divright'>
                    <img className='divrightImg' src={assistant4} alt='' />
                </div>
            </div>


          <div>
              <div className='footerDivs'>

                   <div className='footerFirstDiv'>
                    <h1 className='footerFirstDivTitle' >LOGO</h1>
                    <p className='footerFirstDivDesc'>Get the latest articles and business updates that you need to know, you’ll even get special recommendations weekly.</p>
                   </div>
                   <div className='footerSecondDiv'>
                        <div className='footerSecondDivLinks'>
                        <h3>Website Links</h3>
                        <p>Home</p>
                        <p>About</p>
                        <p>Get in touch</p>
                        <p>FAQs</p>
                          </div>

                    <div className='footerSecondDivLinks'>
                        <h3>Services</h3>
                        <p>Service 1</p>
                        <p>Service 2</p>
                        <p>Service 3</p>

                    </div>

                    <div className='footerSecondDivLinks' >
                        <h3>Services</h3>
                        <p>Service 1</p>
                        <p>Service 2</p>
                        <p>Service 3</p>

                    </div>

                </div>
                <div className='footerSocials'>

                    <h2>Socials</h2>

                    <div className='footerSocialsSvg' >
                        <img src={instagram} alt='' />
                        <img src={twitter} alt='' />
                        <img src={group} alt='' />
                        <img src={linkedIn} alt='' />


                    </div>

                    </div>
               
              

                 </div>
                 <div  className=' copyright'> ©2023 BFF. All rights reserved.</div>
                


                </div>


                 
           





















        </div>
    )
}

export default Fourth
