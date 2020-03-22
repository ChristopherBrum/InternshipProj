import React, { useState } from 'react';
import './Main.css';
import Carousel from 'react-bootstrap/Carousel';

function Main() {
  let images = [
    "https://i.ibb.co/FWrdyLR/pic1.png", "https://i.ibb.co/5WNLLJp/pic2.png", "https://i.ibb.co/HTLkkDd/pic3.png", "https://i.ibb.co/8PwpxXL/pic4.png", "https://i.ibb.co/WfvQDwF/pic5.png", "https://i.ibb.co/T4GgJkK/pic6.png",
    "https://i.ibb.co/98y5vXM/pic7.png", "https://i.ibb.co/dmQLcd3/pic8.png", "https://i.ibb.co/8dYhsYT/pic9.png", "https://i.ibb.co/JqdVH1x/pic10.png", "https://i.ibb.co/gdYmMPn/pic11.png", "https://i.ibb.co/Ntby7HP/pic12.png", 
    "https://i.ibb.co/0BjfSGL/pic13.png", "https://i.ibb.co/NNKWyN0/pic14.png", "https://i.ibb.co/C6B7Zxw/pic15.png", "https://i.ibb.co/KwnZcGn/pic16.png", "https://i.ibb.co/KzgW1Mv/pic17.png", "https://i.ibb.co/85vYtnZ/pic18.png",
    "https://i.ibb.co/SvXnrGz/pic19.png", "https://i.ibb.co/z8dQqFQ/pic20.png", "https://i.ibb.co/fD0m07W/pic21.png"
  ];

  const [mainPic, setMainPic] = useState(images[0])

  function displayMain(arr) {
    mainPic = images
  }

  return(
    <div className="main-container">
      <div className="carousel-container">
        <div className="my-carousel">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://i.ibb.co/0X7z6RH/pic1.png"
                alt="First slide"
              />
            </Carousel.Item>
          </Carousel>
          <div className="image-scroll">

          </div>
        </div>
      </div>
    </div>
  )
}

export default Main;