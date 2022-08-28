import React from 'react';
import { useNavigate } from 'react-router-dom';
import img from "../../media/landing.png";

const Landing = () => {

    const navigate = useNavigate();

    return (
        <div className='landing__wrapper'>
            <div className="landing__block">
                <div className="landing__block--sub-title">
                    <h4>gigaland market</h4>
                </div>
                <div className="landing__block--title">
                    <h1>Create, sell or collect digital items.</h1>
                </div>
                <div className="landing__block--para">
                    <p>Unit of data stored on a digital ledger, called a blockchain, that certifies a digital asset to be unique and therefore not interchangeable</p>
                </div>
                <div className="landing__block--button--wrapper">
                    <a href="#" className='landing__block--button'onClick={() => navigate('/explore')}>Explore</a>
                </div>
            </div>
            <div className="landing__block">
                <img src={img}/>
            </div>
        </div>
    );
}

export default Landing;
