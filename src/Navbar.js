import React from 'react'
import { Link } from 'react-router-dom'
import sample from './135162 (1440p).mp4';
import './Navbar.css'
import Assistant from './Screenshot_2023-04-16_at_5.36 1.png'
import SecondBlock from './SecondBlock';


import Fade from 'react-reveal/Fade';
import ThirdBlock from './ThirdBlock';
import Fourth from './Fourth'; 
function Navbar() {
    return (
        <div>
            <div className='mainDiv'>

                <video className='videoTag' autoPlay loop muted>
                    <source src={sample} type='video/mp4' />
                </video>
                <div className='navBar'>
                    <div className='navBarLogo'>
                        <Link className='navBarLogo' to='/'> LOGO  </Link>
                    </div>
                    <div className='navbarLinks'>
                        <Link className='linkOptions' to='/'>Home</Link>
                        <Link className='linkOptions' to='/Programs'>Programs</Link>
                        <Link className='linkOptions' to='/Pricing'> Pricing</Link>
                        <Link className='linkOptions' to='/Blogs'>Blogs </Link>
                    </div>
                    <div >
                        <button className='navLoginBtn'>Login/SignUp</button>
                    </div>
                </div>

                <Fade bottom>
                <div className='quoteDiv'>
                    <p style={{color:'white'}}> Enim in  consectetur eiusod, <span className='quoteText'>
                        Enim id enim et non  </span> </p>
                    <button className='quoteDivBtn'>Explore</button>

                </div>
                </Fade>
                <div className='assistantDiv'>
                    <img className='' src={Assistant} alt='' />
                </div>


            </div> 

            <SecondBlock />
            <ThirdBlock />
            <Fourth/> 
 

        </div>

    )
}

export default Navbar
