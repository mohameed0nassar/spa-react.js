import React, { memo } from 'react'
import styles from './Contact.module.css'
import { Helmet } from 'react-helmet';


function Contact() {
     function inpLabel(e) {
         if (e.target.value !=='') {
             e.target.parentNode.firstChild.style.transform = 'translateY(0px)';
             
            } else {
                
                e.target.parentNode.firstChild.style.transform = 'translateY(30px)';
          }
         
     }
     return <>
<Helmet>
             <title>Home</title>
        </Helmet>
         <section id='contact' className='py-5 main-color'>

    <div className="container my-5 ">
            <div className='row justify-content-center' >
            <div className="col-md-6 text-center ">
                <h2 className='main-title'>CONTACT SECTION</h2>
                <div className='main-icon'>
                        <i className='bg-white fa-solid fa-star'></i>
                </div>
            </div>
            </div>
        <div className="row mt-3 justify-content-center">
                     <div className="col-md-8 mb-2">
                         <label htmlFor="userName" className={`trans sec-color ${styles.inpLabel}`}>User Name :</label>
                         <input onInput={inpLabel} type="text" name='userName' className='form-control mt-2 shadow-sm' />
        </div>
                     <div className="col-md-8 mb-2">
                         <label htmlFor="userAge" className={`trans sec-color ${styles.inpLabel}`}>User Age :</label>
                         <input onInput={inpLabel} type="text" name='userAge' className='form-control mt-2 shadow-sm' />
        </div>
                     <div className="col-md-8 mb-2">
                         <label htmlFor="userEmail" className={`trans sec-color ${styles.inpLabel}`}>User Email :</label>
                         <input onInput={inpLabel} type="email" name='userEmail' className='form-control mt-2 shadow-sm' />
        </div>
                     <div className="col-md-8 mb-2">
                         <label htmlFor="userPassword" className={`trans sec-color ${styles.inpLabel}`}>User Password :</label>
                         <input onInput={inpLabel} type="password" name='userPassword' className='form-control mt-2 shadow-sm' />
                     </div>
                     <div className='text-center mt-3'><button className='btn btn-info px-5 py-2'>Send</button></div>
        </div>
    </div>
</section>
    </>
}

export default memo(Contact);