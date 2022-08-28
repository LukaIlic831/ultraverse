import React from 'react';
import img from "../../media/coll-1.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { exploreData } from '../../data/exploreData';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ExploreMarket = () => {

    const [cardNumber, setCardNumber] = useState(8);
    const navigate = useNavigate();
    
    const loadMore = () => {
        if(cardNumber === 12){
            document.querySelector(" .explore__button").style.display = 'none';
            document.querySelector(" .explore-market__wrapper").style.marginBottom = '140px';
        }
        setCardNumber(cardNumber+4);
    }
    return (
        <>
            <div className='explore-market__wrapper'>
                {
                    exploreData.map(item =>
                        <div className="explore-market__block">
                            <figure className='new__profile'>
                                <a href="#"><img src={item.author} onClick={() => navigate('/author')} /></a>
                            </figure>
                            <FontAwesomeIcon icon="fa-solid fa-check" className='new-check' />
                            <div className="explore-market__block--info">
                                <figure className="explore-market__block--img">
                                    <a href="#"><img src={item.backgroundImage} onClick={() => navigate('/item')}  /></a>
                                </figure>
                                <div className="explore-market--title">
                                    <h4>{item.title}</h4>
                                    <FontAwesomeIcon icon="fa-solid fa-ellipsis" />
                                </div>
                                <div className="explore-market__price">
                                    <p>{item.eth} ETH</p>
                                    <p className='date'>{item.date}</p>
                                </div>
                                <div className="explore-market--bid">
                                    <a href="#">Place a bid</a>
                                    <div className="likes">
                                        <FontAwesomeIcon icon="fa-solid fa-heart" className='heart' />
                                        <span>{item.likes}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ).splice(0,cardNumber)
                }
            </div>
            <div className="explore__button">
                <span onClick={loadMore}>Load More</span>
            </div>
        </>
    );
}

export default ExploreMarket;
