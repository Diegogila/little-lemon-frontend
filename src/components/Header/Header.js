import React from "react";
import Navbar from '../Navbar/Navbar'
import './Header.module.css'
import logo from '../../assets/images/Logo_header.svg'

function Header(){
    return (
        <header>
            {/* <img src={logo} alt="logo"/> */}
            <Navbar/>
        </header>
    )
}

export default Header;