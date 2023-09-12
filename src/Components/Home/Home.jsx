import React, { memo } from 'react'
import style from './Home.module.css'
import avataaar from '../../Assets/images/avataaars.svg'
import {Helmet} from 'react-helmet'
function Home() {
    return <>
         <Helmet>
             <title>Home</title>
        </Helmet>
        <section id='home' className='py-5 bg-sec text-white'>
            <div className="container my-5 ">
                <div className="row justify-content-center">
                    <div className="col-md-6 text-center">
                        <img src={avataaar} alt="" className='w-75' />
                        <h2 className='main-title'>START FRAMEWORK</h2>
                        <div className='main-icon'>
                            <i className='fa-solid fa-star bg-sec'></i>
                        </div>
                        <p className='fs-4'>Graphic Artist - Web Designer - Illustrator</p>
                    </div>
                </div>
            </div>
    </section>
    
    </>
}

export default memo(Home);