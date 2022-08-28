import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ExpolreFilters = () => {

    const pickCategory = (e) => {
        var category = document.querySelector(" .dropdown__text");
        var categories = document.querySelectorAll(" .dropdown__item");
        category.innerHTML = e.target.innerText;
        for(var i=0; i < categories.length; i++){
            if(categories[i].innerText == e.target.innerText)
            {
                categories[i].style.display = "none";
            }
            else{
                categories[i].style.display = "flex";
            }
        }
    }

    const pickAuction = (e) => {
        var auction = document.querySelector(" .dropdown__text2");
        var categories = document.querySelectorAll(" .dropdown__item2");
        auction.innerHTML = e.target.innerText;
        for(var i=0; i < categories.length; i++){
            if(categories[i].innerText == e.target.innerText)
            {
                categories[i].style.display = "none";
            }
            else{
                categories[i].style.display = "flex";
            }
        }
    }

    const pickItem = (e) => {
        var item = document.querySelector(" .dropdown__text3");
        var categories = document.querySelectorAll(" .dropdown__item3");
        item.innerHTML = e.target.innerText;
        for(var i=0; i < categories.length; i++){
            if(categories[i].innerText == e.target.innerText)
            {
                categories[i].style.display = "none";
            }
            else{
                categories[i].style.display = "flex";
            }
        }
    }

    return (
        <div className='explore-filters__wrapper'>
            <div className="explore-filters__input">
                <input type="text" placeholder='search item here...'/>
                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className='search-icon' />
            </div>
            <div className="dropdown">
                <a className='dropdown__text'>
                    All categories
                    <FontAwesomeIcon icon="fa-solid fa-angle-down" className='down'/>
                </a>
                <ul className='dropdown__list'>
                    <li className='dropdown__item active' onClick={(e) => pickCategory(e)}>
                        <span>All categories</span>
                    </li>
                    <li className='dropdown__item' onClick={(e) => pickCategory(e)}>
                        <span>Art</span>
                    </li>
                    <li className='dropdown__item' onClick={(e) => pickCategory(e)}>
                        <span>Music</span>
                    </li>
                    <li className='dropdown__item' onClick={(e) => pickCategory(e)}>
                        <span>Domain Names</span>
                    </li>
                    <li className='dropdown__item' onClick={(e) => pickCategory(e)}>
                        <span>Virtual World</span>
                    </li>
                    <li className='dropdown__item' onClick={(e) => pickCategory(e)}>
                        <span>Trading Cards</span>
                    </li>
                    <li className='dropdown__item' onClick={(e) => pickCategory(e)}>
                        <span>Collectibles</span>
                    </li>
                    <li className='dropdown__item' onClick={(e) => pickCategory(e)}>
                        <span>Sports</span>
                    </li>
                    <li className='dropdown__item' onClick={(e) => pickCategory(e)}>
                        <span>Utility</span>
                    </li>
                </ul>
            </div>
            <div className="dropdown dropdown-space">
                <a className='dropdown__text dropdown__text2'>
                    On Auction
                    <FontAwesomeIcon icon="fa-solid fa-angle-down" className='down'/>
                </a>
                <ul className='dropdown__list'>
                    <li className='dropdown__item dropdown__item2' onClick={(e) => pickAuction(e)}>
                        <span>Buy Now</span>
                    </li>
                    <li className='dropdown__item dropdown__item2' onClick={(e) => pickAuction(e)}>
                        <span>Has Offers</span>
                    </li>
                </ul>
            </div>
            <div className="dropdown dropdown-space">
                <a className='dropdown__text dropdown__text3'>
                    All Items
                    <FontAwesomeIcon icon="fa-solid fa-angle-down" className='down'/>
                </a>
                <ul className='dropdown__list'>
                    <li className='dropdown__item dropdown__item3' onClick={(e) => pickItem(e)}>
                        <span>Single Items</span>
                    </li>
                    <li className='dropdown__item dropdown__item3' onClick={(e) => pickItem(e)}>
                        <span>Bundles</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default ExpolreFilters;
