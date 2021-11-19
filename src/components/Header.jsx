import React, { Component } from 'react'
import {Link} from "react-router-dom"

export default class Header extends Component {
    render() {
        return (
            
                <div className="head">
                    <h2 className="logo"> Tech Skilly®</h2>
                    <div className="link">
                    <Link className="about" to="/about">About</Link>
                    <Link className="alumni" to="/alumni">Alumni</Link>
                     <a href="Home#contact" className="contact-header">Contact-Us</a>   
                     </div>
                </div>
            
        )
    }
}
