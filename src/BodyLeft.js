import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './BodyLeft.css';
import Footer from './Footer';

function BodyLeft() {
    return (
        <div className="bodyLeft">
            <div className="bodyLeft__slogan">
                <span>CONNECTING THE DISCONNECTED</span>
            </div>
            <div className="bodyLeft__head">
                <h1><mark className='bodyLeft__word'>Vyorius</mark> brings unmanned</h1> <h1> robots <mark className='bodyLeft__word'>together</mark>, </h1>
                <h1>wherever they are</h1>
            </div>
            <div className="bodyLeft__para">
                <p>With all of the operations, commanding and maintenance</p> <p> tools in one place, unmanned vehicles will stay connected</p><p> and productive no matter where you're Delivering</p>
            </div>
            <div className="bodyLeft__btn">
                <button className="bodyLeft__btn1">Try Vyorius</button>
                <button className="bodyLeft__btn2">Learn More</button>
            </div>
            <div className="bodyLeft__foot">
                <p>Need to order a delivery?<Router> <Link to ='/Footer'>Get Started</Link></Router></p>
            </div>
        </div>
    )
}

export default BodyLeft
