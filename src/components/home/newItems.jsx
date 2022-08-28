import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { newItemsData } from '../../data/newItemsData';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const NewItems = () => {

    const navigate = useNavigate();
    const [perPage, setPerPage] = useState(4);

    useEffect(() => {
        window.addEventListener('resize', function(event) {

            if(this.document.body.clientWidth < 768 && this.document.body.clientWidth > 520){
                setPerPage(2);
            }
            else if(this.document.body.clientWidth < 768 && this.document.body.clientWidth < 520){
                setPerPage(1);
            }
            else{
                setPerPage(4);
            }

        }, true);

        if(document.body.clientWidth < 768 && document.body.clientWidth > 520){
            setPerPage(2);
        }
        else if(document.body.clientWidth < 768 && document.body.clientWidth < 520){
            setPerPage(1);
        }
        else{
            setPerPage(4);
        }
    });

    return (
        <div className='new-items'>
            <div className="main__title">
                <h2>New Items</h2>
                <span className='small-border'></span>
            </div>
            <Splide className='splide' options={{
                type: 'loop',
                perPage: perPage,
                perMove: 1,
                arrows: false,
                gap: '1rem',
                rewind: true,
                pagination: false,
                arrows:true,
            }}>
                {
                    newItemsData.map(item =>
                        <SplideSlide className='splide__slide new'>
                           <figure className='new__profile'>
                                <a href="#"><img src={item.author} onClick={() => navigate('/author')}/></a>
                            </figure>
                            <FontAwesomeIcon icon="fa-solid fa-check" className='new-check' />
                            <div className="card__block--info">
                                <figure className="card____block--img">
                                    <a href="#"><img src={item.backgroundImage} onClick={() => navigate('/item')} /></a>
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
                        </SplideSlide>
                    )
                }
            </Splide>
        </div>
    );
}

export default NewItems;
