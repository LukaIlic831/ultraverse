import React from 'react';
import img from '../../media/item.jpg';
import img2 from '../../media/author-1.jpg';
import img3 from '../../media/author-2.jpg';
import img4 from '../../media/eth.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { detailsData } from '../../data/detailsData';
import { bidsData } from '../../data/bidsData';
import { historyData } from '../../data/historyData';
import Checkout from './checkout';
import { useState } from 'react';
import Bid from './bid';
import { useNavigate } from 'react-router-dom';

const ItemInfo = () => {

    const [checkoutOpen, setCheckoutOpen] = useState(false);
    const [bidOpen, setBidOpen] = useState(false);
    const navigate = useNavigate();

    const openBids = (e) => {
        document.querySelector(".owner").style.display = "none";
        document.querySelector(".properties").style.display = "none";
        document.querySelector(".bids").style.display = "flex";
        document.querySelector(".history").style.display = "none";

        var buttons = document.querySelectorAll(" .item__button");
        for (var i = 0; i < buttons.length; i++) {
            if (buttons[i].classList.contains('active')) {
                buttons[i].classList.remove('active');
            }
        }

        e.target.classList += " active";
    }

    const openDetails = (e) => {
        document.querySelector(".owner").style.display = "block";
        document.querySelector(".properties").style.display = "block";
        document.querySelector(".bids").style.display = "none";
        document.querySelector(".history").style.display = "none";

        var buttons = document.querySelectorAll(" .item__button");
        for (var i = 0; i < buttons.length; i++) {
            if (buttons[i].classList.contains('active')) {
                buttons[i].classList.remove('active');
            }
        }

        e.target.classList += " active";
    }

    const openHistory = (e) => {
        document.querySelector(".owner").style.display = "none";
        document.querySelector(".properties").style.display = "none";
        document.querySelector(".bids").style.display = "none";
        document.querySelector(".history").style.display = "flex";

        var buttons = document.querySelectorAll(" .item__button");
        for (var i = 0; i < buttons.length; i++) {
            if (buttons[i].classList.contains('active')) {
                buttons[i].classList.remove('active');
            }
        }

        e.target.classList += " active";

        var buttons = document.querySelectorAll(" .item__button");
        for (var i = 0; i < buttons.length; i++) {
            if (buttons[i].classList.contains('active')) {
                buttons[i].classList.remove('active');
            }
        }

        e.target.classList += " active";
    }

    const openCheckout = () => {
        setCheckoutOpen(true);
    }

    const openBid = () => {
        setBidOpen(true);
    }

    return (
        <div className='item__wrapper'>
            {
                checkoutOpen && <Checkout setCheckoutOpen={setCheckoutOpen} />
            }
            {
                bidOpen && <Bid setBidOpen={setBidOpen} />
            }
            <div className="item-block">
                <img src={img} />
            </div>
            <div className="item-block">
                <div className="end">
                    <span>Auctions ends in</span>
                </div>
                <div className="item__title">
                    <h1>AnimeSailorClub #304</h1>
                </div>
                <div className="statistic__info">
                    <div className="statistic">
                        <FontAwesomeIcon icon="fa-solid fa-image" />
                        <span>Art</span>
                    </div>
                    <div className="statistic">
                        <FontAwesomeIcon icon="fa-solid fa-eye" />
                        <span>250</span>
                    </div>
                    <div className="statistic">
                        <FontAwesomeIcon icon="fa-solid fa-heart" />
                        <span>18</span>
                    </div>
                </div>
                <div className="item__desc">
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                </div>
                <div className="creator__wrapper">
                    <div className="creator">
                        <p>Creator</p>
                        <div className="creator__info">
                            <figure>
                                <img src={img2} onClick={() => navigate('/author')} />
                                <FontAwesomeIcon icon="fa-solid fa-check" className='creator-check' />
                            </figure>
                            <span>Monica Lucas</span>
                        </div>
                    </div>
                    <div className="creator">
                        <p>Collection</p>
                        <div className="creator__info">
                            <figure>
                                <img src={img} onClick={() => navigate('/author')} />
                                <FontAwesomeIcon icon="fa-solid fa-check" className='creator-check' />
                            </figure>
                            <span>AnimeSailorClub</span>
                        </div>
                    </div>
                </div>
                <div className="item__buttons">
                    <a href="#" className='item__button active' onClick={(e) => openDetails(e)}>
                        Details
                    </a>
                    <a href="#" className='item__button' onClick={(e) => openBids(e)}>
                        Bids
                    </a>
                    <a href="#" className='item__button' onClick={(e) => openHistory(e)}>
                        History
                    </a>
                </div>
                <div className="owner">
                    <p>Owner</p>
                    <div className="creator__info">
                        <figure>
                            <img src={img3} onClick={() => navigate('/author')} />
                            <FontAwesomeIcon icon="fa-solid fa-check" className='creator-check' />
                        </figure>
                        <span>Stacy Long</span>
                    </div>
                </div>
                <div className="properties">
                    <p>Properties</p>
                    <div className="properties__wrapper">
                        {
                            detailsData.map(item =>
                                <a className="properties__block" href='#'>
                                    <div className="properties__block--info">
                                        <div className="properties__title">
                                            <span>{item.title}</span>
                                        </div>
                                        <h4>{item.trait}</h4>
                                        <div className="properties__percentg">
                                            <span>{item.percentageTrait}% have this trait</span>
                                        </div>
                                    </div>
                                </a>
                            )
                        }
                    </div>
                </div>
                <div className="bids">
                    {
                        bidsData.map(item =>
                            <div className="bid">
                                <figure className='bid__img'>
                                    <img src={item.author} />
                                    <FontAwesomeIcon icon="fa-solid fa-check" className='bid-check' />
                                </figure>
                                <div className="bid__desc">
                                    <p>Bid accepted <span>{item.eth} ETH</span></p>
                                    <p>by <span>{item.name}</span> at {item.date}</p>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className="history">
                    {
                        historyData.map(item =>
                            <div className="history__block">
                                <figure className='history__block--img'>
                                    <img src={item.author} />
                                    <FontAwesomeIcon icon="fa-solid fa-check" className='history-check' />
                                </figure>
                                <div className="history__block--desc">
                                    <p>Bid accepted <span>{item.eth} ETH</span></p>
                                    <p>by <span>{item.name}</span> at {item.date}</p>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className="price">
                    <p>Price</p>
                    <div className="price__wrapper">
                        <img src={img4} />
                        <h2>0.059</h2>
                        <span>($253.67)</span>
                    </div>
                    <div className="price__buttons">
                        <span onClick={openCheckout}>Buy Now</span>
                        <span onClick={openBid}>Place a Bid</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemInfo;
