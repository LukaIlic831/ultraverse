import React from 'react';
import { authorDataTab1, authorDataTab2, authorDataTab3 } from '../../data/authorData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthorNfts = () => {

    const [authorNfts, setAuthorNfts] = useState(authorDataTab1);
    const navigate = useNavigate();

    const dataTab1 = (e) => {
        setAuthorNfts(authorDataTab1);
        var buttons = document.querySelectorAll(" .author__button");
        for(var i = 0; i < buttons.length; i++){
            if(buttons[i].classList.contains('active')){
                buttons[i].classList.remove('active');
            }
        }

        e.target.classList += " active";
    }

    const dataTab2 = (e) => {
        setAuthorNfts(authorDataTab2);
        var buttons = document.querySelectorAll(" .author__button");
        for(var i = 0; i < buttons.length; i++){
            if(buttons[i].classList.contains('active')){
                buttons[i].classList.remove('active');
            }
        }

        e.target.classList += " active";
    }

    const dataTab3 = (e) => {
        setAuthorNfts(authorDataTab3);
        var buttons = document.querySelectorAll(" .author__button");
        for(var i = 0; i < buttons.length; i++){
            if(buttons[i].classList.contains('active')){
                buttons[i].classList.remove('active');
            }
        }

        e.target.classList += " active";
    }

    return (
        <div>
            <div className="author__buttons">
                <span className='author__button active' onClick={(e) => dataTab1(e)}>On Sale</span>
                <span className='author__button' onClick={(e) => dataTab2(e)}>Created</span>
                <span className='author__button' onClick={(e) => dataTab3(e)}>Liked</span>
            </div>
            <div className="author__nfts--wrapper">
            {
                    authorNfts.map(item =>
                        <div className="card__block">
                            <figure className='new__profile'>
                                <img src={item.author} alt="" />
                            </figure>
                            <FontAwesomeIcon icon="fa-solid fa-check" className='new-check' />
                            <div className="card__block--info">
                                <figure className="card____block--img">
                                    <a href="#"><img src={item.backgroundImage} onClick={() => navigate('/item')}/></a>
                                </figure>
                                <div className="card__block--title">
                                    <h4>{item.title}</h4>
                                    <FontAwesomeIcon icon="fa-solid fa-ellipsis" />
                                </div>
                                <div className="card__block--price">
                                    <p>{item.eth} ETH</p>
                                    <p className='date'>{item.date}</p>
                                </div>
                                <div className="card__block--bid">
                                    <a href="#">Place a bid</a>
                                    <div className="likes">
                                        <FontAwesomeIcon icon="fa-solid fa-heart" className='heart' />
                                        <span>{item.likes}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default AuthorNfts;
