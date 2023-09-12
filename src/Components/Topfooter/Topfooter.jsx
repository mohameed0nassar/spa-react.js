import React, { memo } from 'react'
import styles from './Topfooter.module.css'
// import { Link } from 'react-router-dom';


 function Topfooter() {
    return <>
        <section className='bg-main text-white py-5 text-center'>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-4 mb-5">
                        <div>
                            <h5 className='h1 mb-3'>Location</h5>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, reiciendis!</p>
                        </div>
                    </div>
                    <div className="col-md-4 mb-5">
                        <div>
                        <h5 className='h1 mb-3'>Around the web</h5>
                            <div>
                                <i className='fs-3 me-2 fa-brands fa-facebook border p-2 rounded-pill'></i>
                                <i className='fs-3 me-2 fa-brands fa-twitter border p-2 rounded-pill'></i>
                                <i className='fs-3 me-2 fa-brands fa-linkedin border p-2 rounded-pill'></i>
                                <i className='fs-3 me-2 fa-solid fa-globe border p-2 rounded-pill'></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-5">
                        <div>
                            <h5 className='h1 mb-3'>About Freelancer</h5>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, similique!</p>
                        </div>
                    </div>
                </div>
        </div>
        </section>
    
    </>
}

export default memo(Topfooter);