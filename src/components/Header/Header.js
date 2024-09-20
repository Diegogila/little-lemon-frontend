import React from "react";
import Navbar from '../navs/Navbar/Navbar'
import './Header.module.css'
import logo from '../../assets/images/Logo_header.svg'
import { NavMenu } from "../navs/NavMenu/NavMenu";


function Header(){
    const [displayWidth, setDisplayWidth] = React.useState(0)

    const isMobile = () => displayWidth < 991 ? true : false;

    React.useEffect(() => {
        setDisplayWidth(window.innerWidth)
        const handleResize = () => {
            setDisplayWidth(window.innerWidth)
        }

        window.addEventListener('resize',handleResize);
        return () => {
            window.removeEventListener('resize',handleResize)
        }
    },[])
    return (
        <header>
            {isMobile() && <Navbar/>}
            <img src={logo} alt="logo"/>
            {!isMobile() && <NavMenu/>}
        </header>
    )
}

export default Header;