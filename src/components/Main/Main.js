import React, { useState } from 'react';
import './Main.css';

function Main() {
  const images = [
    "https://i.ibb.co/dKpJ5cB/Screenshot-2020-03-22-12-47-39.png", "https://i.ibb.co/JqbpxBC/Screenshot-2020-03-22-12-50-42.png", "https://i.ibb.co/Qfm3p8J/Screenshot-2020-03-22-12-51-00.png", "https://i.ibb.co/J50GBS5/Screenshot-2020-03-22-12-51-12.png", "https://i.ibb.co/rk0pdQw/Screenshot-2020-03-22-12-51-26.png", 
    "https://i.ibb.co/yN3LmZr/Screenshot-2020-03-22-12-51-38.png", "https://i.ibb.co/njvFnXn/Screenshot-2020-03-22-12-51-51.png", "https://i.ibb.co/w0Wwg4m/Screenshot-2020-03-22-12-52-08.png", "https://i.ibb.co/2FkxcKj/Screenshot-2020-03-22-12-52-20.png", "https://i.ibb.co/94QSGbz/Screenshot-2020-03-22-12-52-30.png", 
    "https://i.ibb.co/QN3KQc8/Screenshot-2020-03-22-12-52-46.png", "https://i.ibb.co/7KrYVhn/Screenshot-2020-03-22-12-52-59.png", "https://i.ibb.co/BcMWyx0/Screenshot-2020-03-22-12-53-11.png", "https://i.ibb.co/rfKkGHv/Screenshot-2020-03-22-12-53-21.png", "https://i.ibb.co/RBDRmWV/Screenshot-2020-03-22-12-53-31.png", 
    "https://i.ibb.co/FJmjBF6/Screenshot-2020-03-22-12-53-58.png", "https://i.ibb.co/1m1S2dP/Screenshot-2020-03-22-12-54-16.png", "https://i.ibb.co/zQRbCRr/Screenshot-2020-03-22-12-54-27.png", "https://i.ibb.co/SJkHRVn/Screenshot-2020-03-22-12-54-40.png", "https://i.ibb.co/rZC0rV6/Screenshot-2020-03-22-12-54-52.png", 
    "https://i.ibb.co/tPSMgL0/Screenshot-2020-03-22-12-55-03.png"
  ];

  const [mainPic, setMainPic] = useState(images[0])

  const displayMain = (checkMain) => {
    return(
      <div>
        <img
          id="main-pic"
          className="img-fluid"
          src={mainPic}
          alt="First slide"
          
        />
      </div>
    )
  }

  const checkMain = () => {
    if (mainPic.indexOf > 20){
      return setMainPic(images[0])
    } else {
      return mainPic
    }
  }

  const getSlides = () => {
    let slideArr = []
    for(let i = 0; i < 4; i++) {
      let slide = images[images.indexOf(mainPic) + i]
      slideArr.push(slide)
    }
    return slideArr
  }

  const displaySlides = () =>
    getSlides().map(slide => (
      <img onClick={() => setMainPic(slide)}
        id="side-pic"
        className="img-fluid"
        src={slide}
        alt="First slide"
        key={slide}
        
      />
    )
  )

  return(
    <div className="main-container">
      <div className="carousel-container">
        <div className="images-container">
          <div className="main-image-container">
          {displayMain()}
          </div>
          <div className="image-scroll">
            {displaySlides()}
          </div>
        </div>
        <div>
          <p className="sheets-desc">Premium Bamboo Sheets</p>
          <p className="sheets-price">$104.99</p>
        </div>
      </div>
    </div>
  )
}

export default Main;
