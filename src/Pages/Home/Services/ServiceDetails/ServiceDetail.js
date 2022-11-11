import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link } from "react-router-dom";
import myimg from "../../../../Assets/mine.jpg";

const ServiceDetail = ({ service }) => {
  const { ServiceName, details, price, rating, _id } = service;
  return (
    <PhotoProvider>
      <div className="text-start border">
        <h2>{ServiceName}</h2>

        <PhotoView src={myimg}>
          <img src={myimg} alt="" />
        </PhotoView>

        <p>{details}</p>
        <p>
          {price}
          {rating}
        </p>
        <Link to={`/serviceDetails/${_id}`}>
          <button className="btn btn-warning">View Details</button>
        </Link>
      </div>
    </PhotoProvider>
  );
};

export default ServiceDetail;
