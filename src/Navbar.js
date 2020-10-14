import React from 'react'
import eagle_logo from './images/eagle_logo.jpg'
import vyorius from './images/logo.png'
import './Navbar.css';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

function Navbar() {

    return (
        <div className = "navbar">
                <img className="navbar__img1" src= {eagle_logo} alt="logo"/>
                <img className="navbar__img2" src= {vyorius} alt="logo"/>
                <div className="navbar__links">
                    <ul>
                    <Router>
                      <li>  <Link className= "navbar__link" to = '/'>Why Vyorius?</Link></li>
                       <li> <Link className= "navbar__link" to = '/'>Solutions</Link></li>
                       <li> <Link className= "navbar__link"  to = '/'>Product</Link></li>
                        <li><Link className= "navbar__link"  to = '/'>Use Cases</Link></li>
                        <li><Link className= "navbar__link"  to = '/'>Team</Link></li>
                        <li><Link className= "navbar__link"  to = '/'>Partners</Link></li>
                        <li><Link className= "navbar__link"  to = '/'>Contact us</Link></li>
                    </Router>
                    </ul>
                </div>
                <button className="navbar__btn">Launch Vyorius > </button>
        </div>
    )
}

export default Navbar
