import React, { memo } from 'react'
import styles from './Navbar.module.css';
import {Link}  from 'react-router-dom';

let windowScroll = {};
window.onscroll = getScroll;
function getScroll() {
  windowScroll = {
    y:window.scrollY
  }
  if (windowScroll.y > 10) {
    
    document.getElementById('navbar').classList.remove('py-3')
  } else {
    
    document.getElementById('navbar').classList.add('py-3')
    
  }
}
function clearLi() {
  document.querySelector('html', 'body').scrollTop = 0;
  
  let demo = document.querySelectorAll('nav li');
  for (const dem of demo) {
    dem.classList.remove(styles.targetLink)
    
  }
}
function sectionLi(e) {
  // console.log('window.scrollY: ', window.scrollY);
  clearLi()
  e.target.parentElement.classList.add(styles.targetLink)
  
}
function Navbar() {

    return <>
   <nav id='navbar' className="trans navbar navbar-expand-sm navbar-dark bg-main py-3 fixed-top">
      <div className="container">
        <Link onClick={clearLi} className="navbar-brand h1 fw-bold" to="">START FRAMWORK</Link>
        <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
               
                <li className="nav-item pt-1 ms-md-2" onClick={sectionLi}>
                    <Link className="nav-link h1 fw-bold" to="about">About</Link>
                </li>
                <li className="nav-item pt-1 ms-md-2" onClick={sectionLi}>
                    <Link className="nav-link h1 fw-bold" to="portfolio">Portfolio</Link>
                </li>
                <li className="nav-item pt-1 ms-md-2" onClick={sectionLi}>
                    <Link className="nav-link h1 fw-bold" to="contact">Contact</Link>
                </li>
               
            </ul>

        </div>
     </div>
   </nav>
   
    
    </>
}

export default memo(Navbar);