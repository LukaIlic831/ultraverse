import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { topSellerData } from '../../data/topSellerData';
import { useNavigate } from 'react-router-dom';


const TopSellers = () => {

    const navigate = useNavigate();

    return (
        <div className='top-sellers'>
            <div className="main__title">
                <h2>Top Sellers</h2>
                <span className='small-border'></span>
            </div>
            <ol className='author__list'>
                {
                    topSellerData.map(item =>
                        <li>
                            <div className="author__list--item">
                                <figure>
                                    <a href="#"><img src={item.image} onClick={() => navigate('/author')} /></a>
                                    <FontAwesomeIcon icon="fa-solid fa-check" className='check2' />
                                </figure>

                                <div className="author__list--item-info">
                                    <a href="#"><h4 onClick={() => navigate('/author')} >{item.name}</h4></a>
                                    <span>{item.eth} ETH</span>
                                </div>
                            </div>
                        </li>
                    )
                }
            </ol>
        </div>
    );
}

export default TopSellers;
