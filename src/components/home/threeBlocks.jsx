import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Threeblocks = () => {
    return (
        <div className='threeBlocks--wrapper'>
            <div className="block">
                <div className="block__info">
                    <div className='block__icon'>
                        <FontAwesomeIcon icon="fa-solid fa-wallet" />
                    </div>
                    <div className="block__title">
                        <h4>Set up your wallet</h4>
                    </div>
                    <div className="block__para">
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.</p>
                    </div>
                </div>
            </div>
            <div className="block">
                <div className="block__info">
                    <div className="block__icon">
                        <FontAwesomeIcon icon="fa-solid fa-cloud-arrow-up" />
                    </div>
                    <div className="block__title">
                        <h4>Add your NFT's</h4>
                    </div>
                    <div className="block__para">
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.</p>
                    </div>
                </div>
            </div>
            <div className="block">
                <div className="block__info">
                    <div className="block__icon">
                        <FontAwesomeIcon icon="fa-solid fa-tags" />
                    </div>
                    <div className="block__title">
                        <h4>Sell your NFT's</h4>
                    </div>
                    <div className="block__para">
                    <FontAwesomeIcon icon="fa-regular fa-square" />
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Threeblocks;
