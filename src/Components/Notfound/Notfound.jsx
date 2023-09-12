import React, { memo } from 'react'
import style from './Notfound.module.css'
import { Link } from 'react-router-dom';


 function Notfound() {
    return <>
        <section className="bg-sec text-white py-5">
            <div className="container my-5 py-5 ">
                <div className="row py-5 text-center">
                    <h2>97 Not Found</h2>
                    <p>sorry something wrong in your url you can enter here and go back for home page 
                        <Link to=""> <span className='main-color fw-bold'>Home</span></Link>
                    </p>
                </div>
            </div>
    </section>
    
    </>
}

export default memo(Notfound);