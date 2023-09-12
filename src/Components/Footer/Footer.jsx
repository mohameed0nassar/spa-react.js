import React, { memo } from 'react'
import style from './Footer.module.css'


 function Footer() {
    return <>
        <footer className='py-3 bg-footer '>
            <p className='text-white text-center'> Copyright &copy; <span className='sec-color'>Nassar</span> 2023</p>
    </footer>
    
    </>
}

export default memo(Footer);