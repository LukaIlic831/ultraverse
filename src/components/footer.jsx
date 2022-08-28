import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import img from "../media/logo.png";

const Footer = () => {
    return (
        <footer>
            <div className="footer__wrapper">
                <div className="footer__block">
                    <h2>Marketplace</h2>
                    <ul className='footer__items'>
                        <li className='footer__item'>
                            <a href="#">All NFTs</a>
                        </li>
                        <li className='footer__item'>
                            <a href="#">Art</a>
                        </li>
                        <li className='footer__item'>
                            <a href="#">Music</a>
                        </li>
                        <li className='footer__item'>
                            <a href="#">Domain Names</a>
                        </li>
                        <li className='footer__item'>
                            <a href="#">Virtual World</a>
                        </li>
                        <li className='footer__item'>
                            <a href="#">Collectibles</a>
                        </li>
                    </ul>
                </div>
                <div className="footer__block">
                    <h2>Resources</h2>
                    <ul className='footer__items'>
                        <li className='footer__item'>
                            <a href="#">Help Center</a>
                        </li>
                        <li className='footer__item'>
                            <a href="#">Partners</a>
                        </li>
                        <li className='footer__item'>
                            <a href="#">Suggestions</a>
                        </li>
                        <li className='footer__item'>
                            <a href="#">Discord</a>
                        </li>
                        <li className='footer__item'>
                            <a href="#">Docs</a>
                        </li>
                        <li className='footer__item'>
                            <a href="#">Newsletter</a>
                        </li>
                    </ul>
                </div>
                <div className="footer__block">
                    <h2>Community</h2>
                    <ul className='footer__items'>
                        <li className='footer__item'>
                            <a href="#">Documentation</a>
                        </li>
                        <li className='footer__item'>
                            <a href="#">Brand Assets</a>
                        </li>
                        <li className='footer__item'>
                            <a href="#">Community</a>
                        </li>
                        <li className='footer__item'>
                            <a href="#">Forum</a>
                        </li>
                        <li className='footer__item'>
                            <a href="#">Blog</a>
                        </li>
                        <li className='footer__item'>
                            <a href="#">Mailing List</a>
                        </li>
                    </ul>
                </div>
                <div className="footer__block">
                    <h2>Newsletter</h2>
                    <div className="footer__block--para">
                        <p>Signup for our newsletter to get the latest news in your inbox.</p>
                    </div>
                    <div className="footer__block--input-wrapper">
                        <input type="text" className='footer__block--input' placeholder='enter your email' />
                        <FontAwesomeIcon icon="fa-solid fa-right-long" className="right" />
                    </div>
                    <div className="footer__block--mini-para">
                        <p>Your email is safe with us. We don't spam.</p>
                    </div>
                </div>
            </div>
            <div className="footer__wrapper--two">
                <div className="footer__block--two">
                    <figure className='footer__wrapper--two-img'>
                        <a href="#"> <img src={img} alt="" /></a>
                    </figure>
                    <p>© Copyright 2022</p>
                </div>
                <ul className="footer__block--two">
                    <li>
                        <a href="#">
                        <FontAwesomeIcon icon="fa-brands fa-facebook" className='footer-icon'/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        <FontAwesomeIcon icon="fa-brands fa-linkedin" className='footer-icon' />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        <FontAwesomeIcon icon="fa-brands fa-youtube" className='footer-icon' />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        <FontAwesomeIcon icon="fa-brands fa-twitter" className='footer-icon' />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        <FontAwesomeIcon icon="fa-brands fa-pinterest" className='footer-icon' />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
