import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

const Categories = () => {

    const navigate = useNavigate();

    return (
        <div className='categories__wrapper'>
            <div className="main__title">
                <h2>Browse by category</h2>
                <span className='small-border'></span>
            </div>
            <ul className="categories">
                <li className="category" onClick={() => navigate('/explore')}>
                        <FontAwesomeIcon icon="fa-solid fa-image" className='category-icon' />
                        <span className='category__name'>Art</span>
                </li>
                <li className="category" onClick={() => navigate('/explore')}>
                    <FontAwesomeIcon icon="fa-solid fa-music" className='category-icon' />
                    <span className='category__name'>Music</span>
                </li>
                <li className="category" onClick={() => navigate('/explore')}>
                    <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className='category-icon' />
                    <span className='category__name'>Domain Names</span>
                </li>
                <li className="category" onClick={() => navigate('/explore')}>
                    <FontAwesomeIcon icon="fa-solid fa-earth-africa" className='category-icon' />
                    <span className='category__name'>Virtual Worlds</span>
                </li>
                <li className="category" onClick={() => navigate('/explore')}>
                    <FontAwesomeIcon icon="fa-solid fa-id-card" className='category-icon' />
                    <span className='category__name'>Trading Cards</span>
                </li>
                <li className="category" onClick={() => navigate('/explore')}>
                    <FontAwesomeIcon icon="fa-solid fa-table-cells" className='category-icon' />
                    <span className='category__name'>Collectibles</span>
                </li>
            </ul>
        </div>
    );
}

export default Categories;
