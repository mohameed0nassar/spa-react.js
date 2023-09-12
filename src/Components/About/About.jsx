import React, { memo } from 'react'
import style from './About.module.css'
import {Helmet} from 'react-helmet'

 function About() {
    return <>
         <Helmet>
             <title>About</title>
        </Helmet>
        <section id='about' className='py-5 bg-sec text-white'>
            <div className="container my-5 ">
                    <div className='row justify-content-center' >
                    <div className="col-md-6 text-center">
                        <h2 className='main-title'>ABOUT COMPONENT</h2>
                        <div className='main-icon'>
                                <i className='fa-solid fa-star bg-sec'></i>
                        </div>

                    </div>
                    </div>
                <div className="row mt-3 gy-3">
                    <div className="col-md-6 px-5">
                        <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam voluptatibus assumenda optio odit et! Mollitia, exercitationem, nisi sequi animi ad eaque possimus officiis illum rem, pariatur inventore quis quae assumenda!</p></div>
                    </div>
                    <div className="col-md-6 px-5">
                        <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, sunt. Aperiam assumenda odio maxime quaerat illo sequi reiciendis eius vero blanditiis iure natus nisi incidunt, consequatur fuga architecto libero eum.</p></div>
                    </div>
                </div>
            </div>
    </section>
    
    </>
}

export default memo(About);