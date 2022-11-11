import React from "react";
// import { PhotoProvider, PhotoView } from "react-photo-view";
// import "react-photo-view/dist/react-photo-view.css";
// import { Link } from "react-router-dom";

const ReviewSection = ({ service }) => {
  console.log(service);
  //   const { details, price, rating, _id, image_url } = service;
  return (
    <div>
      <h2>{service.ServiceName}</h2>
    </div>
  );
};

export default ReviewSection;
