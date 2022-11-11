import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Banner.css";
import study1 from "../../../Assets/bannerPic/study1.jpg";
import study2 from "../../../Assets/bannerPic/study2.jpg";
import study3 from "../../../Assets/bannerPic/study3.jpg";
import study4 from "../../../Assets/bannerPic/study4.png";
import study5 from "../../../Assets/bannerPic/study5.png";
import study6 from "../../../Assets/bannerPic/study6.jpg";

const Banner = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="image-size d-block w-100"
          src={study1}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <div>
          <img
            className="image-size d-block w-100"
            src={study2}
            alt="Second slide"
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="image-size d-block w-100"
          src={study3}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="image-size d-block w-100"
          src={study4}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="image-size d-block w-100"
          src={study5}
          alt="Second slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className=" image-size d-block w-100"
          src={study6}
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
