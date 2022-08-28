import React from 'react';
import img from '../../media/author-1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const AuthorProfile = () => {
    return (
        <div className='author-profile__wrapper'>
            <div className="author-profile__block">
                <figure className='author-profile__img'>
                    <img src={img} alt="" />
                    <FontAwesomeIcon icon="fa-solid fa-check" className='author-check'/>
                </figure>
                <div className="author-profile__details">
                    <div className="author-profile__title">
                        <h1>Monica Lucas</h1>
                    </div>
                    <div className="author-profile__username">
                        <span>@monicaaaa</span>
                    </div>
                    <div className="author-profile__id">
                        <span>DdzFFzCqrhshMSxb9oW3mRo4MJrQkusV3fGFSTwaiu4wPBqMryA9DYVJCkW9n7twCffG5f5wX2sSkoDXGiZB1HPa7K7f865Kk4LqnrME</span>
                        <a>Copy</a>
                    </div>
                </div>
            </div>
            <div className="author-profile__block">
                <div className="followers">
                    <span>500 followers</span>
                </div>
                <div className="follow__btn">
                    <span>Follow</span>
                </div>
            </div>
        </div>
    );
}

export default AuthorProfile;
