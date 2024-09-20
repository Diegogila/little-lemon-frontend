import React from "react";
import './Footer.css'
import footerLogo from '../../assets/images/logo-footer.png'


function Footer(){
    return (
        <footer className="footer">
            <div className='footer__logo'>
                <img  src={footerLogo} alt="logo-footer"/>
            </div>
            <div className="footer__info">
                <div className="footer__navigation">
                    <h3 className="card-title">Doormat
                    Navigation</h3>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Menu</li>
                        <li>Reservation</li>
                        <li>Order Online</li>
                        <li>Login</li>
                    </ul>
                </div >
                <div className="footer__contact">
                    <h3 className="card-title">Contact</h3>
                    <ul>
                        <li>Address</li>
                        <li>Phone Number</li>
                        <li>Email</li>
                    </ul>
                </div>
                <div className="footer__social-media">
                    <h3 className="card-title">Solcial Media</h3>
                    <ul>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Twitter</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;