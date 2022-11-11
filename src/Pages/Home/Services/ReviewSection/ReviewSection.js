import React from "react";
import "./ReviewSection.css";

const ReviewSection = ({ service }) => {
  const { review } = service;
  console.log(service);
  return (
    <div className="pt-5 rounded">
      <img className="reviewer mx-auto" src={review.img} alt="" />
      <h2>{review.name}</h2>
      <p>{review.text}</p>
      <p>{service.ServiceName}</p>
    </div>
  );
};

export default ReviewSection;
