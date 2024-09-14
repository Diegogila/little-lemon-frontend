import React from "react";
import Navbar from '../Navbar/Navbar'
import './Header.module.css'
import logo from '../../assets/images/Logo_header.svg'
import { NavMenu } from "../NavMenu/NavMenu";


function Header(){
    const [isMobile, setIsMobile] = React.useState(false)
    React.useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 991 ? true : false)
            console.log(isMobile)
        }

        window.addEventListener('resize',handleResize);
        return () => {
            window.removeEventListener('resize',handleResize)
        }
    },[])
    return (
        <header>
            {isMobile && <Navbar/>}
            <img src={logo} alt="logo"/>
            {!isMobile && <NavMenu/>}
        </header>
    )
}

export default Header;