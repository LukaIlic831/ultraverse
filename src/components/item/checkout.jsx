import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';

const Checkout = ({setCheckoutOpen}) => {

    const close = () => {
        setCheckoutOpen(false);
    }

    useEffect(() => {
        document.querySelector(".checkout__input").value = '1';
    });

    return (
        <div className='checkout__wrapper'>
            <div className="chackout">
                <div className="checkout__info">
                    <div className="chackout__title">
                        <h1>Checkout</h1>
                        <FontAwesomeIcon icon="fa-solid fa-xmark" className='x-mark' onClick={close}/>
                    </div>
                    <div className="checkout__para">
                        <p>You are about to purchase a <span>AnimeSailorClub #304</span> <br />
                        from <span>Monica Lucas</span></p>
                    </div>
                    <div className="checkout__input--wrapper">
                        <p>Enter quantity. <span>10 available</span></p>
                        <input type="text" className='checkout__input'/>
                    </div>
                    <div className="checkout__transaction">
                        <div className="checkout__transaction--block">
                            <p>Your balance</p>
                            <span>10.67856 ETH</span>
                        </div>
                        <div className="checkout__transaction--block">
                            <p>Service fee 2.5%</p>
                            <span>0.00325 ETH</span>
                        </div>
                        <div className="checkout__transaction--block">
                            <p>You will pay</p>
                            <span>0.013325 ETH</span>
                        </div>
                    </div>
                    <div className="checkout__btn">
                        <a>Add Founds</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Checkout;
