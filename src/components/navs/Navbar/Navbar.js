import React from "react";
import './Navbar.css'

const links = [
    'Home',
    'About',
    'Menu',
    'Reservations',
    'Order online',
    'Login',
]

function Navbar(){
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const isOpen = isMenuOpen ? 'open':'';
    return (
        <>
            <button
                className={`burger ${isOpen}`}
                onClick={toggleMenu}
            ></button>
            <div className={`background ${isOpen}`}></div>
            <div className={`menu ${isOpen}`}>
                <nav>
                    {links.map((link,index) => (
                        <a
                            href='/'
                            key={index}
                            className={isMenuOpen ? "appear" : ""}
                            style={{
                                animationDelay: `0.${index+1}s`
                            }}
                            onClick={() => console.log(link)}
                            >{link}</a>
                    ))}
                </nav>
            </div>
        </>
    )
}

export default Navbar;