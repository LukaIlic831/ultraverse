import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import img from "../../media/logo.png";


const Nav = () => {

    const navigate = useNavigate();

    const openMenu = () => {
        document.querySelector(".mobile__nav--list").style.right = "0";
    }

    const closeMenu = () => {
        document.querySelector(".mobile__nav--list").style.right = "-100%";
    }


    return (
        <nav>
            <div className="row row2">
                <div className="nav__logo--input-wrapper">
                    <figure className="nav__logo">
                        <a href="#" onClick={() => navigate('/')}>
                            <img src={img} />
                        </a>
                    </figure>
                    <div className='nav__input--wrapper'>
                        <input type="text" className='nav__input' placeholder='search item here...' />
                    </div>
                </div>
                <FontAwesomeIcon icon="fa-solid fa-bars" className='bars' onClick={openMenu}/>
                <ul className='nav__list--links'>
                    <li className='nav__list--item'>
                        <a href="#" className='nav__list--item-link' onClick={() => navigate('/')}>Home</a>
                    </li>
                    <li className='nav__list--item'>
                        <a href="#" className='nav__list--item-link' onClick={() => navigate('/explore')}>Explore</a>
                    </li>
                    <li className='nav__list--item'>
                        <a href="#" className='nav__list--item-link' onClick={() => navigate('/author')}>Author</a>
                    </li>
                    <li className='nav__list--item'>
                        <a href="#" className='nav__list--item-link' onClick={() => navigate('/item')}>Item Details</a>
                    </li>
                </ul>
                    <div className="mobile__nav--list">
                        <FontAwesomeIcon icon="fa-solid fa-xmark" className='x-mark2' onClick={closeMenu}/>
                        <ul>
                            <li>
                                <a href="#" onClick={() => navigate('/')}>Home</a>
                            </li>
                            <li>
                                <a href="#" onClick={() => navigate('/explore')}>Explore</a>
                            </li>
                            <li>
                                <a href="#" onClick={() => navigate('/author')}>Author</a>
                            </li>
                            <li>
                                <a href="#" onClick={() => navigate('/item')}>Item Details</a>
                            </li>
                        </ul>
                    </div>
                </div>
        </nav>
    );
}

export default Nav;
