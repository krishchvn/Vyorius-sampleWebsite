import React from 'react';
import './Footer.css';
import efficiency from './images/efficiency.jpeg';
import flexibility from './images/flexibility.jpeg';
import productivity from './images/productivity.png';
import safety from './images/safety.png';
import scalability from './images/scalability.jpeg';

function Footer() {
    return (
        <div className="footer">
            <h1><mark>Break out</mark> of the age old robotic automation</h1>
            <h5>Be a part of the world's first <mark>network of unmanned systems</mark> and start delivering at a click of button</h5>
            <h3>While Ensuring</h3>
            <div className="footer__ImageRow">
                <div className="footer__Image">
                    <div className="footer__eachImage">
                        <img src={efficiency} alt=""/>
                        <figcaption>Efficiency</figcaption>
                    </div>
                    <div className="footer__eachImage">
                        <img src={productivity} alt=""/>
                         <figcaption>Productivity</figcaption>
                    </div>
                    <div className="footer__eachImage">
                        <img src={scalability} alt=""/>
                        <figcaption>Scalability</figcaption>
                    </div>
                </div>
                <div className="footer__Image2">
                    <div className="footer__eachImage">
                        <img src={safety} alt=""/>
                        <figcaption>Safety</figcaption>
                    </div>
                    <div className="footer__eachImage">
                        <img src={flexibility} alt=""/>
                        <figcaption>Flexibility</figcaption>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Footer
