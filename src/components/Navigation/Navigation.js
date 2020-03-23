import React from 'react';
import './Navigation.css'
import MenuBasket from '../Images/basket-icon.jpg';

function Navigation() {
  // const menuIcon = <FontAwesomeIcon icon={faMenu} />

  return(
    <div className="nav-container">
      <div className="nav-topper">
        <p className="topper-text">STAY QUARANTINED - CLICK FOR 25% OFF - FOR THE FORESEEABLE FUTURE!</p>
      </div>
      <div className="nav-bottom">
        <div className="menu-nav">
            {/* <img 
            src={MenuLogo} 
            className="menu-icon"
            alt="menu icon"></img> */}
          <svg class="bi bi-list" width="2em" height="2em" viewBox="0 0 16 16" fill="#c5b376" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M2.5 11.5A.5.5 0 013 11h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5zm0-4A.5.5 0 013 7h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5zm0-4A.5.5 0 013 3h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5z" clip-rule="evenodd"/>
          </svg>
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