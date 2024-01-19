import React from 'react'
import { Link } from 'react-router-dom';
import '../css/Navbar.css'

import logo from '../assets/CPlogo.png'

function Navbar() {
  return (
    <>
        <div className="nav-bar">
            <div className="nav-left">
                <Link to="/"><img src={logo} alt="" /></Link>
            </div>
            <div className="nav-mid">
                <ul>
                    <li><Link to="">Home</Link></li>
                    <li><Link to="">Features</Link></li>
                    <li><Link to="">Pricing</Link></li>
                    <li><Link to="">About</Link></li>
                    <li><Link to="">Contact Us</Link></li>
                </ul>
            </div>
            <div className="nav-right">
                <ul>
                    <li><Link to="">Log In</Link></li>
                    <li><Link to="">Sign Up Now</Link></li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Navbar