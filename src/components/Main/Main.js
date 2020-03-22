import React from 'react';
import './Main.css';
// import Carousel from 'react-image-carousel'
// import Pic1 from '../Images/menu-icon.png';
// import Pic2 from '../Images/basket-icon.png';

function Main() {

  return(
    <div className="main-container">
      <div className="carousel-container">
        <a href="https://ibb.co/QcgxT3y"><img src="https://i.ibb.co/0X7z6RH/pic1.png" alt="pic1" border="0" /></a>
        {/* <Carousel >
          <div>
            <img src={Pic1} />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src={Pic2} />
            <p className="legend">Legend 2</p>
          </div>
        </Carousel> */}
      </div>
    </div>
  )
}

export default Main;