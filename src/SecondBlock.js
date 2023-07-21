import React from 'react'
import div1 from './div.png'
import div2 from './div (1).png'
import div3 from './div (2).png'
import './SecondBlock.css'
import { Fade } from 'react-reveal'
function SecondBlock() {
    return (
        <div className='secondBlock'>

            <div className='leftDiv'>
                 
                    <img src={div1} alt='' />
                    <img src={div2} alt='' />
                    <img src={div3} alt='' />

                    <img src={div1} alt='' />
                    <img src={div2} alt='' />
                    <img src={div3} alt='' />
                 

            </div>

            <div className='rightDiv'>

                <div  className='rightDivTitle'>
                    <Fade bottom>
                        <h1> Lorem Ipsum Dolor
                            <span style={{ color: 'rgba(242, 189, 77, 1)' }}> lorem ipsum    </span></h1>
                    </Fade>
                </div>

                <div className='rightDivDesc '>

                    <div className=' rightDescText'>

                        <h3 className='rightDivDescTitle'> Lorem Ipsum Dolor </h3>
                        Enim in cupidatat consectetur eiusmod nostrud labore et velit culpa commodo. Ipsum anim reprehenderit id nostrud ullamco mollit sunt. Id enim consequat irure aute est qui veniam officia consectetur do sint cillum. Enim in cupidatat consectetur eiusmod nostrud labore et velit culpa commodo. Ipsum anim reprehenderit id nostrud ullamco mollit sunt. Id enim consequat irure aute est qui veniam officia consectetur do sint cillum. Enim in cupidatat consectetur eiusmod nostrud labore et velit culpa commodo. Ipsum anim reprehenderit id nostrud ullamco mollit sunt. Id enim consequat irure aute est qui veniam officia consectetur do sint cillum.
                    </div>
                    <div>

                    <button className='rightDivBtn'> Join Now </button>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default SecondBlock
