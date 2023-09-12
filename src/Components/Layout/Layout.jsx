import React, { memo } from 'react'
import style from './Layout.module.css'
import {Outlet} from 'react-router-dom'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Topfooter from '../Topfooter/Topfooter';

 function Layout() {
     return <>
        <Navbar/>
        <Outlet/>
    <Topfooter />
    <Footer />
    
    </>
}

export default memo(Layout);