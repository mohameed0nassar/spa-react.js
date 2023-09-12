import React, { memo } from 'react'
import styles from './Portfolio.module.css'
import port1 from '../../Assets/images/poert1.png'
import port2 from '../../Assets/images/port2.png'
import port3 from '../../Assets/images/port3.png'
import {Helmet} from 'react-helmet'
         
function Portfolio() {
     function displayFolio(e) {
         let bigImg =e.target.querySelector('img').getAttribute('src')
         let myFrame =document.querySelector('#bigImg')
         let myImg =document.querySelector('#bigImg img')
         myImg.setAttribute('src', bigImg)
             myFrame.style.display = 'flex'

    }
    function displayMain() {
        let myFrame =document.querySelector('#bigImg')
             myFrame.style.display = 'none'
    }
    return <>
        <Helmet>
             <title>Portfolio</title>
        </Helmet>
        <section id='portfolio' className='py-5 main-color'>
            <div id='bigImg' onClick={displayMain} className={styles.bigImg}>
                <img src={``}  alt="" />
            </div>
            <div className="container my-5 ">
                    <div className='row justify-content-center' >
                    <div className="col-md-6 text-center ">
                        <h2 className='main-title'>PORTFOLIO COMPONENT</h2>
                        <div className='main-icon'>
                                <i className='bg-white fa-solid fa-star'></i>
                        </div>

                    </div>
                    </div>
                <div className="row mt-3 gy-4">
                <div className="col-lg-4 col-sm-6">
                    <div onClick={displayFolio} className={`${ styles.portHover }`}>
                        <img  src={port1} className='w-100 rounded-3' alt="" />
                    </div>
                    </div>
                <div className="col-lg-4 col-sm-6">
                    <div onClick={displayFolio} className={`${ styles.portHover }`}>
                        <img  src={port2} className='w-100 rounded-3' alt="" />
                    </div>
                    </div>
                <div className="col-lg-4 col-sm-6">
                    <div onClick={displayFolio} className={`${ styles.portHover }`}>
                        <img  src={port3} className='w-100 rounded-3' alt="" />
                    </div>
                    </div>
                <div className="col-lg-4 col-sm-6">
                    <div onClick={displayFolio} className={`${ styles.portHover }`}>
                        <img  src={port1} className='w-100 rounded-3' alt="" />
                    </div>
                    </div>
                <div className="col-lg-4 col-sm-6">
                    <div onClick={displayFolio} className={`${ styles.portHover }`}>
                        <img  src={port2} className='w-100 rounded-3' alt="" />
                    </div>
                    </div>
                <div className="col-lg-4 col-sm-6">
                    <div onClick={displayFolio} className={`${ styles.portHover }`}>
                        <img  src={port3} className='w-100 rounded-3' alt="" />
                    </div>
                    </div>
                </div>
            </div>
    </section>
    
    </>
}

export default memo(Portfolio);