import React from 'react';
import Footer from '../components/footer';
import Nav from '../components/home/nav';
import ItemInfo from '../components/item/itemInfo';

const Item = () => {
    return (
        <div>
            <Nav/>
            <div className="row">
                <ItemInfo/>
                <Footer/>
            </div>
        </div>
    );
}

export default Item;
