import React from 'react';
import './Navigation.css'
import MenuLogo from '../Images/menu-icon.jpg';
import MenuBasket from '../Images/basket-icon.jpg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faMenu } from '@fortawesome/free-solid-svg-icons'

function Navigation() {
  // const menuIcon = <FontAwesomeIcon icon={faMenu} />

  return(
    <div className="nav-container">
      <div className="nav-topper">
        <p className="topper-text">STAY QUARANTINED - CLICK FOR 25% OFF - FOR THE FORESEEABLE FUTURE!</p>
      </div>
      <div className="nav-bottom">
        <div className="menu-nav">
            <img 
            src={MenuLogo} 
            className="menu-icon"
            alt="menu icon"></img>
        </div>
        <h1 className="nav-com-name">LUXURY</h1>
        <div className="menu-checkout">
          <img 
          src={MenuBasket} 
          className="basket-icon"
          alt="basket icon"></img>
        </div>
      </div>
    </div>
  );
}

export default Navigation;