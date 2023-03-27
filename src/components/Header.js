import React from "react";
import mainBodyimage from "../images/mainBody.png";
import './Header.css';

const Header = ()=>{
    return(
    <div className="header">
        <div className="left">
            <b className="b1">An inspiring design delivered to your inbox every morning</b>
            <p className="para">Our team scouts the internet for the best designs, illustrations and art and delivers a truly inspiring one every day to your inbox</p>
            <b className="b2">Show me how it looks</b>
            <div className="form">
                <input type="text" class="inputFirst" placeholder="Your e-mail address"/>
                <button className="button1">Register now</button>
            </div>
            <b className ="b3"> Free - No Spam - No Data Sharing </b>

        </div>
        <div className="right">
            <img src={mainBodyimage} className="mainBody" alt="mainBody"/>
        </div>

    </div>
    )

    
}

export default Header;