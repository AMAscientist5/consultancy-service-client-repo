import React from "react";
import aboutPic from "../../../Assets/aboutPic.jpg";
const AboutUs = () => {
  return (
    <div className="d-lg-flex p-5">
      <div className="text-start">
        <h2 className="ms-5">About us</h2>
        <div className="p-5">
          <h6>We are determined to help you to obtain your potential.</h6>
          <p>
            <strong>Aradun</strong> is an innovative brand and the best
            education consultancy firm in Bangladesh that exemplifies promoting
            education programs. The consulting services focus on aiding and
            facilitating recruitment, advising, or understanding the expertise.
          </p>
          <p>
            The Company conceptualizes a start-to-finish plan to provide market
            intelligence. Our Marketing Consulting experts integrate a
            comprehensive, systematic student application procedure through an
            organized internet marketing platform and easy to use professional
            web tools. Educational resources and excellent customer service
            support are our biggest assets to promote our partner institution’s
            programs.{" "}
          </p>
        </div>
      </div>
      <div>
        <img src={aboutPic} alt="" />
      </div>
    </div>
  );
};

export default AboutUs;
