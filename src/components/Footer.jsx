import React, {Component} from "react";
import {Link} from "react-router-dom"


export default class Footer extends Component{ 
render()
{
    return(
        <div className="footer">
                <h2 className="logo-footer"> Tech Skilly®</h2>
                <p className="para-footer">Tech Skilly is a world's most preferred online learning platform with 1000+ top courses to choose from and free live classes. </p>
                <Link className="about-footer" to="/about">About </Link><br />
                <Link className="alumni-footer" to="/alumni">Alumni </Link><br />
                <a href="#self" className="self-footer">Our Top courses </a> <br />
                <a href="Home#contact" className="contact-footer">Contact-Us </a> <br /> <br /><br />
                <div className="social">
                <a href="#" className="fa fa-facebook" id="fb"></a>
                <a href="#" className="fa fa-linkedin" id="in"></a>
                <a href="#" className="fa fa-instagram" id="gram"></a> <br /> 
                </div>
                   <div className="copyright"> ©Tech Skilly 2021. All Rights reserved</div><br />
                   </div>            
    )
};

}