import React from 'react';
import Logo from '../assets/Library.svg'

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row row__column">
                    <a href="/">
                        <figure className='footer__logo'>
                            <img src={Logo} alt="" className='footer__logo--img'/>
                        </figure>
                    </a>
                    <div className="footer__list">
                        <a href="/" className='footer__link'>Home</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
