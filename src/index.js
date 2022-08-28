import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {library} from '@fortawesome/fontawesome-svg-core';
import { faLinkedin, faFacebook, faTwitter, faPinterest, faYoutube } from '@fortawesome/free-brands-svg-icons';
import {faWallet, faCloudArrowUp, faTags, faSquare, faCheck, faEllipsis, faHeart, faImage, faMusic, faMagnifyingGlass, faEarthAfrica, faIdCard, faTableCells, faRightLong, faAngleDown, faXmark, faEye, faBars} from '@fortawesome/free-solid-svg-icons';

library.add(faWallet, faCloudArrowUp, faTags, faSquare, faCheck, faEllipsis, faHeart, faImage, faMusic, faMagnifyingGlass, faEarthAfrica, faIdCard, faTableCells, faRightLong, faLinkedin, faFacebook, faTwitter, faPinterest, faBars, faYoutube, faAngleDown, faXmark, faEye);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
