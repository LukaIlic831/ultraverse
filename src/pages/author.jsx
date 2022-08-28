import React from 'react';
import AuthorBackground from '../components/author/authorBackground';
import AuthorNfts from '../components/author/authorNfts';
import AuthorProfile from '../components/author/authorProfile';
import Footer from '../components/footer';
import Nav from '../components/home/nav';

const Author = () => {
    return (
        <div>
            <Nav/>
            <AuthorBackground/>
            <div className="row">
                <AuthorProfile/>
                <AuthorNfts/>
                <Footer/>
            </div>
        </div>
    );
}

export default Author;
