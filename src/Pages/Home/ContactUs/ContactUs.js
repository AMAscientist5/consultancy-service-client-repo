import React from "react";
import image1 from "../../../Assets/contactPicMan.JPG";
import image2 from "../../../Assets/contactPic.JPG";

const ContactUs = () => {
  return (
    <div className="d-lg-flex align-items-lg-center justify-content-lg-center">
      <div>
        <img src={image1} alt="" />
      </div>
      <div>
        <img src={image2} alt="" />
      </div>
    </div>
  );
};

export default ContactUs;
