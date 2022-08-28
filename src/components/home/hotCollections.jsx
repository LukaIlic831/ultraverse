import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@splidejs/react-splide/css';
import { hotCollectionData } from '../../data/hotCollectionData';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';


const HotCollections = () => {

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
        <div className='hot-collections'>
            <div className="main__title">
                <h2>Hot Collections</h2>
                <span className='small-border'></span>
            </div>
            <Splide className='splide' options={{
                type: 'loop',
                perPage:perPage,
                perMove: 1,
                arrows: false,
                gap: '1rem',
                rewind: true,
                pagination: false,
                arrows:true,
            }}>
                {
                    hotCollectionData.map(item =>
                        <SplideSlide className='splide__slide'>
                            <div className="splide__slide--img-wrapper">
                                <a href="#"> <img src={item.backgroundImage} className='splide__slide--img' onClick={() => navigate('/explore')} /></a>
                            </div>
                            <div className="splide__slide--profile">
                                <figure>
                                    <a href="#"><img src={item.author} onClick={() => navigate('/author')} /></a>
                                    <FontAwesomeIcon icon="fa-solid fa-check" className='check' />
                                </figure>
                                <div className="splide__slide--text">
                                    <div className="splide__slide--profile-name">
                                        <h4>{item.title}</h4>
                                    </div>
                                    <div className="splide__slide--profile-sub-name">
                                        <span>ERC-{item.erc}</span>
                                    </div>
                                </div>
                            </div>
                        </SplideSlide>
                    )}
            </Splide>
        </div>
    );
}

export default HotCollections;
