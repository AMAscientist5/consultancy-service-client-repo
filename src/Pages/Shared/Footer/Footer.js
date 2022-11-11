import React from "react";
import "./Footer.css";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../../../Assets/footerPic/f1.JPG";
import image2 from "../../../Assets/footerPic/f2.JPG";
import image3 from "../../../Assets/footerPic/f3.JPG";
import {
  FaGoogle,
  FaFacebookSquare,
  FaTwitter,
  FaWhatsapp,
  FaTwitch,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="bg-black d-lg-flex p-5">
        <div className="">
          <p className=" mx-auto text-white font-semibold">
            Our goal is to provide a personal <br />
            and specialised service to all <br />
            students who want to study in the UK, <br />
            USA, canada & Australia. Get <br />
            in touch today to see how we can help
          </p>
        </div>
        <div className="mx-auto">
          <div className="mb-5">
            <Carousel>
              <Carousel.Item>
                <img
                  className=" uni-size d-block w-100"
                  src={image1}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <div>
                  <img
                    className="uni-size d-block w-100"
                    src={image2}
                    alt="Second slide"
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="uni-size d-block w-100"
                  src={image3}
                  alt="Second slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className=" d-flex d-md-flex d-sm-flex justify-content-sm-center align-items-sm-center justify-content-md-around justify-content-lg-around">
            <div>
              <div>
                <h4 className="text-white">Contact us</h4>
              </div>
              <p className="mb-0 text-secondary">
                Email: ahmadmusa9805@gmail.com <br /> Phone: 01496858450
              </p>
              <div>
                <button className="text-primary">
                  <FaFacebookSquare></FaFacebookSquare>
                </button>
                <button className="text-warning">
                  <FaGoogle></FaGoogle>
                </button>
                <button className="text-success">
                  <FaWhatsapp></FaWhatsapp>
                </button>
                <button className="text-primary">
                  <FaTwitter></FaTwitter>
                </button>
                <button>
                  <FaTwitch></FaTwitch>
                </button>
              </div>
            </div>

            <div>
              <h4 className="text-white">Address:</h4>
              <div>
                <p className="text-secondary mb-0">
                  House - Old 56, Lake Circus, (1st Floor), Panthapath, Dhaka
                  (Near Square Hospital)
                </p>

                <p className="text-secondary ">
                  Privacy Ploicy | Terms & Condition
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
