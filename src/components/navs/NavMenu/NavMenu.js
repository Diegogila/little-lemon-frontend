import React from "react";
import './NavMenu.css'
import { Link } from "react-router-dom";


function NavMenu(){
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/booking">Booking</Link></li>
            </ul>
        </nav>
        )
    }

export {NavMenu}
