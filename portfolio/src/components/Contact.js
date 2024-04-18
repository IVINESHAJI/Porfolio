import React from "react";
import '../styles/contact.css';
import linkedinImage from '../images/linkedin.png'; 
import phone from '../images/phone-call.png'
import gmail from '../images/mail.png'
import git from '../images/github.png'

const Contact = () => {
    return (
        <div className="mainContact">
            <div className="headContact">Contact Me</div>

            <div className="contactDiv">
                <div className="social">
                    <img src={linkedinImage} alt="LinkedIn"/>
                    <a href="https://www.linkedin.com/in/ivine-shaji-kakkanat-88bb06251/" target="blank">LinkedIn Page</a>
                </div>

                <div className="social">
                    <img src={phone} alt="LinkedIn"/>
                    <a>+91-8592050898</a>
                </div>

                <div className="social">
                    <img src={git} alt="LinkedIn"/>
                    <a href="https://github.com/IVINESHAJI" target="blank">Github Handle</a>
                </div>

                <div className="social">
                    <img src={gmail} alt="LinkedIn"/>
                    <a href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRlQHWhKJjLzdbmCKSbtPrVrqLhSrRlgntBZsplgdVzGqzSvckXZGnGdRHGMGfsccPWRhVG" target="blank">Gmail</a>
                </div>
            </div>
        </div>
    );
}

export default Contact;
