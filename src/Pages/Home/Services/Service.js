import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { ServiceName, details, price, rating, _id, image_url } = service;
  return (
    <PhotoProvider>
      <div className="text-start border">
        <h2>{ServiceName}</h2>

        <PhotoView src={image_url}>
          <img className="h-60" src={image_url} alt="" />
        </PhotoView>

        <p className="p-3">{details.slice(0, 100)}</p>
        <p>
          <span className="pr-3">Service Charge: {price} </span>
          <span>Rating: {rating}</span>
        </p>
        <Link to={`/serviceDetails/${_id}`}>
          <button className="btn btn-warning">View Details</button>
        </Link>
      </div>
    </PhotoProvider>
  );
};

export default Service;
