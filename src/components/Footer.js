import React from "react";
import './Footer.css';
import Instagramimage from '../images/InstagramLogo.png';
import Linkedinimage from '../images/LinkedinLogo.png';

const Footer = ()=>{
    return (
        <div className="footer">
        <div className="ftLeft">
            <b className="bf1">Prompt Generator</b>
            <b className="bf2">Dweep Daily </b>
            <b className="bf3">All Contributors</b>
            <b className="bf4">Your data on Dweep.io</b>
            <b className="bf5">Contribute to Dweep</b>

        </div>
        <div className="ftRight">
            <b className="br1">Dweep.io</b>
            <b className="br2">Made with love in India</b>
            <img src={Linkedinimage} className="LinkedIn" alt="LinkedIn"/>
            <img src={Instagramimage} className="Instagram" alt="Instagram"/>
            <b className="br3">hello@dweep.io</b>


        </div>

    </div>
    )



}


export default Footer;
