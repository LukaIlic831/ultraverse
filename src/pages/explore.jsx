import React from 'react';
import Footer from '../components/footer';
import ExploreImg from '../components/explore/exploreImg';
import ExploreMarket from '../components/explore/exploreMarket';
import ExpolreFilters from '../components/explore/expolreFilters';
import Nav from '../components/home/nav';

const Explore = () => {
    return (
        <div>
            <Nav />
            <ExploreImg />
            <div className="row">
                <ExpolreFilters />
                <ExploreMarket/>
                <Footer />
            </div>
        </div>
    );
}

export default Explore;
