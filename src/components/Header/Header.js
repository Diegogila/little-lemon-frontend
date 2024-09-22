import React from "react";
import Navbar from '../navs/Navbar/Navbar'
import './Header.css'
import logo from '../../assets/images/Logo_header.svg'
import { NavMenu } from "../navs/NavMenu/NavMenu";
import GoBack from "../navs/GoBack/Goback";


function Header({isSection=false}){
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
            <header className={isSection ? "is-section" : "is-home"}>
                {isSection && <GoBack/> }
                <img src={logo} alt="logo"/>
                {isMobile() ? <Navbar/> : <NavMenu/>}
            </header>
    )
}

export default Header;