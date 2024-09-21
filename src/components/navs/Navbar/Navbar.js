import React from "react";
import './Navbar.css'
import { Link } from "react-router-dom";

const links = [
    {page:'Home',route:'/'},
    {page:'Booking',route:'/booking'}
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
                        <Link                             key={index}
                            className={isMenuOpen ? "appear" : ""}
                            style={{
                            animationDelay: `0.${index+1}s`}}
                            to={link.route}>
                                {link.page}
                        </Link>
                    ))};
                </nav>
            </div>
        </>
    )
}

export default Navbar;