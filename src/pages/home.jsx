import React from 'react';
import Footer from '../components/footer';
import Categories from '../components/home/categories';
import HotCollections from '../components/home/hotCollections';
import Landing from '../components/home/landing';
import Nav from '../components/home/nav';
import NewItems from '../components/home/newItems';
import Threeblocks from '../components/home/threeBlocks';
import TopSellers from '../components/home/topSellers';

const Home = () => {
    return (
        <div>
            <Nav />
            <div className="row">
                <Landing />
                <Threeblocks/>
                <HotCollections/>
                <NewItems/>
                <TopSellers/>
                <Categories/>
                <Footer/>
            </div>
        </div>
    );
}

export default Home;
