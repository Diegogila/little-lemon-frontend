import React from "react";
import Navbar from '../Navbar/Navbar'
import './Header.module.css'
import logo from '../../assets/images/Logo_header.svg'

function Header(){
    return (
        <header>
            <Navbar/>
            <img src={logo} alt="logo"/>
        </header>
    )
}

export default Header;